// Converts Aya's iPhone media into web files under public/media/.
// FFMPEG=/path/to/ffmpeg node scripts/make-media.cjs "<folder with the iPhone files>" .
// Optional: ONLY=IMG_1274,IMG_1264 redoes some videos; AT_IMG_1274=5 takes that cover frame at 5 s; SKIP_PHOTOS=1.
const { execFileSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const FF = process.env.FFMPEG || "ffmpeg";
const [src, repo] = process.argv.slice(2);
const out = path.join(repo, "public/media");
fs.mkdirSync(path.join(out, "work"), { recursive: true });
fs.mkdirSync(path.join(out, "photos"), { recursive: true });
const ff = (args) => execFileSync(FF, ["-v", "error", "-y", ...args], { stdio: "inherit" });

const videos = ["IMG_0619", "IMG_1256", "IMG_1257", "IMG_1258", "IMG_1260", "IMG_1261", "IMG_1262", "IMG_1263", "IMG_1264", "IMG_1265", "IMG_1266", "IMG_1274", "IMG_1275"];
const only = process.env.ONLY ? process.env.ONLY.split(",") : null;
for (const v of videos) {
  if (only && !only.includes(v)) continue;
  const name = v.replace("IMG_", "work-");
  const input = path.join(src, `${v}.MOV`);
  const scale = "scale=720:1280:force_original_aspect_ratio=increase,crop=720:1280";
  if (!process.env.POSTERS_ONLY) {
    ff(["-i", input, "-vf", `${scale},fps=30`, "-c:v", "libx264", "-profile:v", "high", "-pix_fmt", "yuv420p",
      "-crf", "30", "-maxrate", "1600k", "-bufsize", "3200k", "-preset", "slow",
      "-c:a", "aac", "-b:a", "96k", "-ac", "2", "-movflags", "+faststart", path.join(out, "work", `${name}.mp4`)]);
  }
  const at = process.env[`AT_${v}`] || "2";
  ff(["-ss", at, "-i", input, "-frames:v", "1", "-vf", scale, "-q:v", "4", path.join(out, "work", `${name}.jpg`)]);
  ff(["-ss", at, "-i", input, "-frames:v", "1", "-vf", "scale=360:640:force_original_aspect_ratio=increase,crop=360:640", "-q:v", "5", path.join(out, "work", `${name}-sm.jpg`)]);
  console.log("ok", name);
}

if (!process.env.SKIP_PHOTOS) {
  // 9:16 tiles for the hero wall (360x640) and a 4:5 portrait (720x900).
  const tile = "scale=360:640:force_original_aspect_ratio=increase,crop=360:640";
  const photos = [
    ["IMG_1267.JPG.jpeg", "photo-phone", "crop=1966:3496:328:0"],
    ["IMG_1269.JPG.jpeg", "photo-product", null],
    ["IMG_1270.PNG", "photo-chair", "crop=1290:2293:0:251"],
    ["IMG_1271.PNG", "photo-chair-2", "crop=1290:2293:0:251"],
    ["IMG_1272.PNG", "photo-selfie", "crop=1290:2293:0:251"],
    ["IMG_1273.PNG", "photo-cafe", "crop=1290:2293:0:251"],
  ];
  for (const [file, name, crop] of photos) {
    ff(["-i", path.join(src, file), "-frames:v", "1", "-vf", [crop, tile].filter(Boolean).join(","), "-q:v", "4", path.join(out, "photos", `${name}.jpg`)]);
  }
  ff(["-i", path.join(src, "IMG_1272.PNG"), "-frames:v", "1", "-vf", "crop=1290:1612:0:300,scale=720:900", "-q:v", "3", path.join(out, "photos", "aya-portrait.jpg")]);
  console.log("photos ok");
}

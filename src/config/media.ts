// Aya's own photos and sample videos, converted for the web into public/media/ (see scripts/make-media.cjs).
// Videos: 720x1280 H.264 MP4 with a cover image (.jpg) and a small tile (-sm.jpg). Labels are "Category · format".
// Brand footage needs the brand's written permission before it goes public (CLAUDE.md, Photography).
const base = `${import.meta.env.BASE_URL}media/`;

export type Sample = { id: string; label: string; video: string; loop: string; poster: string; thumb: string };

const sample = (n: string, label: string): Sample => ({
  id: n,
  label,
  video: `${base}work/work-${n}.mp4`,
  /** Silent 8 s 360x640 loop (about 250 KB) for the turning ring on Home. */
  loop: `${base}work/work-${n}-loop.mp4`,
  poster: `${base}work/work-${n}.jpg`,
  thumb: `${base}work/work-${n}-sm.jpg`,
});

/** Every sample, in the order the For brands page shows them (the first nine). */
export const samples: Sample[] = [
  sample("1274", "Skincare · Product demo"),
  sample("1264", "Tech · Product demo"),
  sample("1258", "Hotel · Staycation"),
  sample("1261", "Food · Product review"),
  sample("1275", "Fashion · Get ready with me"),
  sample("1256", "Home · Bedding"),
  sample("1257", "Beauty · Salon visit"),
  sample("1266", "Wellness · Experience"),
  sample("0619", "Talking to camera · Tips"),
  sample("1265", "Travel · Resort"),
  sample("1260", "Home · Cosy routine"),
  sample("1263", "Food · Talking to camera"),
  sample("1262", "Lifestyle · Voiceover"),
];

export type Photo = { src: string; alt: string };
const photo = (name: string, alt: string): Photo => ({ src: `${base}photos/${name}.jpg`, alt });

/** 9:16 photos of Aya at work (360x640 tiles). */
export const photos = {
  phone: photo("photo-phone", "Aya holding up her phone with a portrait on screen"),
  product: photo("photo-product", "Aya holding a skincare jar up to the camera"),
  chair: photo("photo-chair", "Aya on a rattan chair, scrolling her phone"),
  chair2: photo("photo-chair-2", "Aya on a rattan chair, reading her phone"),
  selfie: photo("photo-selfie", "Aya smiling at the camera"),
  cafe: photo("photo-cafe", "Aya working on her laptop in a cafe with an iced matcha"),
};

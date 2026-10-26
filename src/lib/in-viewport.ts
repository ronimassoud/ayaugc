/** True once the element's box overlaps the viewport (callers re-check on scroll and resize). */
export const inViewport = (el: Element, margin = 0) => {
  const r = el.getBoundingClientRect();
  return r.bottom > margin && r.top < window.innerHeight - margin && r.width > 0;
};

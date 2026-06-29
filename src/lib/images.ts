/** Derive a WebP sibling path for PNG/JPEG assets in public/. */
export const webpSource = (src: string) =>
  /\.(png|jpe?g)$/i.test(src) ? src.replace(/\.(png|jpe?g)$/i, ".webp") : undefined;

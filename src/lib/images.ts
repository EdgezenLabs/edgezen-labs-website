import { allImagePaths } from "./assets";

const WEBP_BY_SOURCE = new Map<string, string>();

for (const path of allImagePaths()) {
  if (path.endsWith(".webp")) {
    continue;
  }

  const webp = path.replace(/\.(png|jpe?g)$/i, ".webp");
  if (allImagePaths().includes(webp)) {
    WEBP_BY_SOURCE.set(path, webp);
  }
}

/** Returns a WebP sibling path only when that file is registered in assets. */
export const webpSource = (src: string): string | undefined => WEBP_BY_SOURCE.get(src);

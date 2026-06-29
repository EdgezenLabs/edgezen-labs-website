/**
 * Single source of truth for public-folder images (served from site root).
 * Every `src` must match an existing file in `public/` exactly (case-sensitive).
 */
export const brandAssets = {
  logo: "/ez.png",
  icon: "/edgezen-logo-cropped.png",
} as const;

export const productAssets = {
  credosafe: {
    src: "/credo_logo.jpg",
    webp: "/credo_logo.webp",
    alt: "CredoSafe logo",
  },
  briktra: {
    src: "/bricktra.jpg",
    webp: "/bricktra.webp",
    alt: "Briktra logo",
  },
  briktraMockup: {
    src: "/briktra_app_mockup.png",
    webp: "/briktra_app_mockup.webp",
    alt: "Briktra mobile app preview",
  },
  expeniqo: {
    src: "/expeniqo-logo.png",
    webp: "/expeniqo-logo.webp",
    alt: "Expeniqo logo",
  },
  cardclash: {
    src: "/cardclash.png",
    webp: "/cardclash.webp",
    alt: "ClashCard Legends Arena logo",
  },
  maintzen: {
    src: "/maintzen_logo_accurate.png",
    webp: "/maintzen_logo_accurate.webp",
    alt: "Maintzen logo",
  },
  gstledger: {
    src: "/gstledger-logo.png",
    webp: "/gstledger-logo.webp",
    alt: "GSTLedger Pro logo",
  },
} as const;

export const websitePreviewAssets = {
  vsCorporate: {
    src: "/website-previews/vs-corporate-lending.png",
    webp: "/website-previews/vs-corporate-lending.webp",
    alt: "VS Corporate Lending website preview",
  },
  eladent: {
    src: "/website-previews/eladent-consulting.png",
    webp: "/website-previews/eladent-consulting.webp",
    alt: "Eladent Consulting website preview",
  },
  gabrielJm: {
    src: "/website-previews/gabriel-jm-events.png",
    webp: "/website-previews/gabriel-jm-events.webp",
    alt: "Gabriel JM Events website preview",
  },
} as const;

export type ImageAsset = {
  src: string;
  webp?: string;
  alt?: string;
};

/** All raster image paths referenced by the app (for audit scripts). */
export const allImagePaths = (): string[] => {
  const paths = new Set<string>([brandAssets.logo, brandAssets.icon]);

  for (const asset of Object.values(productAssets)) {
    paths.add(asset.src);
    if (asset.webp) paths.add(asset.webp);
  }

  for (const asset of Object.values(websitePreviewAssets)) {
    paths.add(asset.src);
    if (asset.webp) paths.add(asset.webp);
  }

  return [...paths];
};

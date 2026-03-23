export const dynamic = "force-static";

import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://thomasdebroize.com",
      lastModified: new Date(),
      changeFrequency: "daily",
    },
  ];
}

import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://trust.leylix.com",
      lastModified: new Date(),
    },

    {
      url: "https://trust.leylix.com/verified-users",
      lastModified: new Date(),
    },

    {
      url: "https://trust.leylix.com/fake-accounts",
      lastModified: new Date(),
    },

    {
      url: "https://trust.leylix.com/european-platform",
      lastModified: new Date(),
    },
  ];
}
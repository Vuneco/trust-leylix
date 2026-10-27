import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://trust.leylix.com",
    },

    {
      url: "https://trust.leylix.com/verified-users",
    },

    {
      url: "https://trust.leylix.com/fake-accounts",
    },

    {
      url: "https://trust.leylix.com/european-platform",
    },

    {
      url: "https://trust.leylix.com/impressum",
    },

    {
      url: "https://trust.leylix.com/datenschutz",
    },
  ];
}
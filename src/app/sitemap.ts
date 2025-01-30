import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  return [
    {
      url: `${baseUrl}/`,
    },
    {
      url: `${baseUrl}/six-charts`,
    },
    {
      url: `${baseUrl}/ai-analyzer`,
    },
    {
      url: `${baseUrl}/rsi`,
    },
    {
      url: `${baseUrl}/sma`,
    },
    {
      url: `${baseUrl}/atr`,
    },
    {
      url: `${baseUrl}/privacy-policy`,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
    },
    {
      url: `${baseUrl}/careers`,
    },
    {
      url: `${baseUrl}/about`,
    },
    {
      url: `${baseUrl}/blog`,
    },
    {
      url: `${baseUrl}/sign-up`,
    },
    {
      url: `${baseUrl}/sign-in`,
    },
  ];
}

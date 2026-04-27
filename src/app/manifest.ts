import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest{
  return {
    name: "Sheik Aahin | Frontend Developer",
    short_name: "Sheik Aahin Portfolio",
    description:"Frontend developer with 2+ years of experience building React & Node.js applications. Open to full-time and freelance roles.",
    icons: [
      {
        src: "icons/butterfly-liquid-glass-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "icons/butterfly-liquid-glass-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
     
    ],
    display: "browser",
    theme_color: "#000000",
    background_color: "#ffffff",
  }
}
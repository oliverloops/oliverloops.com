const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  images: {
    domains: [
      "i.scdn.co", // Spotify Album Art
    ],
  },
  i18n: {
    locales: ["en-US", "es-MX"],
    defaultLocale: "en-US",
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
});

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
    locales: ["EN", "ES"],
    defaultLocale: "EN",
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
});

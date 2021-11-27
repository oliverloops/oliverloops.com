const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  images: {
    domains: [
      "i.scdn.co", // Spotify Album Art
    ],
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
});

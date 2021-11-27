function importAll(r: any) {
  return r.keys().map((fileName: any) => ({
    link: fileName.substr(1).replace(/\/index\.mdx$/, ""),
    module: r(fileName),
  }));
}

export const posts = importAll(
  require.context("./pages/blog/", true, /\.mdx$/)
);

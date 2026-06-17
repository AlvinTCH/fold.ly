import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer({
  reactStrictMode: false,
  output: "standalone",
  compress: false,

  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
});

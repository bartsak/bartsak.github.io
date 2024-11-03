const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? "/bartsak.github.io/" : "",
  basePath: isProd ? "/bartsak.github.io" : "",
  output: "export",
};

export default nextConfig;

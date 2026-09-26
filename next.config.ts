import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/cafe-3d-scroll",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['dummyimage.com'],
  },
};

export default withNextVideo(nextConfig);
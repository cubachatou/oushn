import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['dummyimage.com', 'cdn.sanity.io'],
  },
};

export default withNextVideo(nextConfig);
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Add real remote photo hosts here if you serve images from a CDN
    // instead of /public (e.g. Cloudinary, Supabase Storage).
    remotePatterns: [],
  },
};

export default nextConfig;

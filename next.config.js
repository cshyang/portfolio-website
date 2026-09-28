/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
      {
        source: "/ingest/flags",
        destination: "https://us.i.posthog.com/flags",
      },
    ];
  },
  async redirects() {
    // The privacy policy moved to Wherewit, which now operates the Meta integrations.
    return ["/meta-app-privacy-policy", "/meta-app-privacy-policy/"].map((source) => ({
      source,
      destination: "https://wherewit.com/privacy/",
      permanent: true,
    }));
  },
  skipTrailingSlashRedirect: true,
};

module.exports = nextConfig;

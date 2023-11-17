/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.storyblok.com',
            },
        ]
    },
    async redirects() {
        return [
          {
            source: '/casos',
            destination: '/casos/index',
            permanent: true,
          },
        ]
      },
}

module.exports = nextConfig

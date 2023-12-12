/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.storyblok.com',
            }
        ],
        unoptimized: true
    },
}

module.exports = nextConfig

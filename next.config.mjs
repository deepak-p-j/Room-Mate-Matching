/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'a0.muscache.com',
                port: '',
            }
        ],
    },
    experimental: {
        serverActions: {
            bodySizeLimit: '10mb', 
        },
    },
};

export default nextConfig;

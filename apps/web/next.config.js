/** @type {import('next').NextConfig} */
const nextConfig = {
    allowedDevOrigins: [
        '127.0.0.1',
        'localhost',
    ],
    images: {
        unoptimized: true,
        localPatterns: [
            {
                pathname: '/assets/images/**',
                search: '',
            },
        ],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        qualities: [25, 50, 75],
        minimumCacheTTL: 2678400, // 31 days
        disableStaticImages: true,
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
};

export default nextConfig;

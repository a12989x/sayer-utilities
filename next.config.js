const withPWA = require('next-pwa');

const nextConfig = withPWA({
	reactStrictMode: true,
	pwa: { des: 'public' },
});

module.exports = nextConfig;

const title = 'Sayer Utilities';
const description = 'Utilities for Sayer store';

const SEO = {
	title,
	description,
	canonical: 'https://sayer-utilities.vercel.app',
	openGraph: {
		type: 'website',
		locale: 'en_IE',
		url: 'https://sayer-utilities.vercel.app',
		title,
		description,
		images: [
			{
				url: 'https://sayer-utilities.vercel.app/og.png',
				alt: title,
				width: 1280,
				height: 720,
			},
		],
	},
	twitter: {
		handle: '@__codax__',
		site: '@__codax__',
		cardType: 'summary_large_image',
	},
};

export default SEO;

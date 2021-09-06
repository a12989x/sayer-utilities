import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';

import SEO from '../next-seo.config.js';

import Layout from '@/components/layout';
import Head from '@/components/Head';

import '@/styles/globals.scss';

const MyApp = ({ Component, pageProps }) => {
	return (
		<>
			<Head />
			<DefaultSeo {...SEO} />
			<ThemeProvider defaultTheme='system'>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</>
	);
};

export default MyApp;

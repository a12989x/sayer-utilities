import { ThemeProvider } from 'next-themes';

import Layout from '@/components/Layout';
import Head from '@/components/Head';

import '@/styles/globals.scss';

const MyApp = ({ Component, pageProps }) => {
	return (
		<ThemeProvider defaultTheme='system'>
			<Layout>
				<Head />
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
};

export default MyApp;

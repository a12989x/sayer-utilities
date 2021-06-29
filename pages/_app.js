import { ThemeProvider } from 'next-themes';

import Layout from '@/components/Layout';

import '@/styles/globals.scss';

const MyApp = ({ Component, pageProps }) => {
	return (
		<ThemeProvider defaultTheme='system'>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
};

export default MyApp;

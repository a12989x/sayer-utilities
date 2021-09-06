import Document, { Html, Head, Main, NextScript } from 'next/document';

/**
 * MyDocument: Custom Document
 * @return {JSX.Element} The JSX Code for the custom Document component
 */
class MyDocument extends Document {
	/**
	 * getInitialProps: Obtain initial props
	 * @param {Object} ctx - context
	 * @return {DocumentInitialProps} initialProps
	 */
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	/**
	 * Document: Custom Document
	 * @return {JSX.Element} Custom JSX
	 */
	render() {
		return (
			<Html lang='es'>
				<Head>
					<link
						rel='apple-touch-icon'
						sizes='180x180'
						href='/favicons/apple-touch-icon.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='32x32'
						href='/favicons/favicon-32x32.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='16x16'
						href='/favicons/favicon-16x16.png'
					/>
					<link
						rel='mask-icon'
						href='/favicons/safari-pinned-tab.svg'
						color='#1a8ccb'
					/>
					<meta
						name='msapplication-TileImage'
						content='/favicons/mstile-144x144.png'
					/>
					<meta name='msapplication-TileColor' content='#ffffff' />
					<meta name='theme-color' content='#ffffff' />
					<link rel='manifest' href='/favicons/site.webmanifest' />
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;

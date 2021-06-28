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
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;

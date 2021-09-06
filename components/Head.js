import NextHead from 'next/head';

const Head = () => {
	return (
		<NextHead>
			<meta content='IE=edge' httpEquiv='X-UA-Compatible' />
			<meta
				content='width=device-width, initial-scale=1'
				name='viewport'
			/>
		</NextHead>
	);
};

export default Head;

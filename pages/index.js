import ToolsList from '@/components/pages/home/tools-list';

import styles from '@/styles/pages/home.module.scss';

/**
 * Home: Component
 * @return {JSX} code
 */
const Home = () => {
	return (
		<main>
			<h1 className={styles.home__title}>Utilidades de Sayer</h1>

			<ToolsList />
		</main>
	);
};

export default Home;

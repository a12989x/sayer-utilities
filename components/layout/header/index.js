import styles from '@/styles/components/layout/header/header.module.scss';

import Logo from './Logo';
import Navbar from './Navbar';

const Header = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<Navbar />
		</header>
	);
};

export default Header;

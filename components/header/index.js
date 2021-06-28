import styles from '@/styles/components/header/header.module.scss';

import Logo from './Logo';
import Navbar from './Navbar';
import ToggleModeButton from './ToggleModeButton';

const Header = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<Navbar />
			<ToggleModeButton />
		</header>
	);
};

export default Header;

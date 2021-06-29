import styles from '@/styles/components/header/navbar.module.scss';

import NavItem from './NavItem';

const Navbar = () => {
	return (
		<nav>
			<ul className={styles.navbar__list}>
				<NavItem href='/'>Inicio</NavItem>
				<NavItem href='/about'>Acerca</NavItem>
			</ul>
		</nav>
	);
};

export default Navbar;

import styles from '@/styles/components/header/navbar.module.scss';

import NavItem from './NavItem';

const Navbar = () => {
	return (
		<nav>
			<ul className={styles.navbar__list}>
				<NavItem href='/'>Home</NavItem>
				<NavItem href='/about'>About</NavItem>
			</ul>
		</nav>
	);
};

export default Navbar;

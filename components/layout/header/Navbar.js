import styles from '@/styles/components/layout/header/navbar.module.scss';

import NavItem from './NavItem';
import ToggleModeButton from './ToggleModeButton';

const Navbar = () => {
	return (
		<nav>
			<ul className={styles.navbar__list}>
				<NavItem href='/'>Inicio</NavItem>
				<NavItem href='/about'>Acerca</NavItem>
				<li>
					<ToggleModeButton />
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;

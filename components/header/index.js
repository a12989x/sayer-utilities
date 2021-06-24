import Link from 'next/link';
import Image from 'next/image';

import styles from '@/styles/components/header/header.module.scss';

import Logo from '@/public/logo.svg';
import NavItem from './NavItem';

const Header = () => {
	return (
		<header className={styles.header}>
			<Link href='/'>
				<a>
					<Image src={Logo} alt='Sayer logo' />
				</a>
			</Link>

			<nav>
				<ul className={styles.list}>
					<NavItem href='/'>Home</NavItem>
					<NavItem href='/about'>About</NavItem>
					<NavItem href='/contact'>Contact</NavItem>
				</ul>
			</nav>
		</header>
	);
};

export default Header;

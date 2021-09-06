import Link from '@/components/Link';

import styles from '@/styles/components/layout/header/nav-item.module.scss';

const NavItem = ({ href, children }) => {
	return (
		<li className={styles.navItem}>
			<Link href={href}>{children}</Link>
		</li>
	);
};

export default NavItem;

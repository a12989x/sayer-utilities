import Image from 'next/image';
import { useTheme } from 'next-themes';

import styles from '@/styles/components/header/toggle-mode-button.module.scss';

import SunIcon from '@/public/assets/sun.min.svg';
import MoonIcon from '@/public/assets/moon.min.svg';

const ToggleModeButton = () => {
	const { theme, setTheme, resolvedTheme } = useTheme();

	const toggleColorMode = () => {
		if (theme === 'light' || resolvedTheme === 'light') setTheme('dark');
		else if (theme === 'dark' || resolvedTheme === 'dark')
			setTheme('light');
	};

	return (
		<button className={styles.toggleModeButton} onClick={toggleColorMode}>
			{theme === 'light' || resolvedTheme === 'light' ? (
				<Image src={MoonIcon} alt='sun icon' />
			) : (
				<Image src={SunIcon} alt='sun icon' />
			)}
		</button>
	);
};

export default ToggleModeButton;

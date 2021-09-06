import Image from 'next/image';

import Link from '../../Link';

import LogoIcon from '@/public/assets/logo.min.svg';

const Logo = () => {
	return (
		<Link href='/' style={{ height: 45, width: 50 }}>
			<Image src={LogoIcon} alt='Sayer logo' />
		</Link>
	);
};

export default Logo;

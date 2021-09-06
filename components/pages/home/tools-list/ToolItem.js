import Image from 'next/image';

import styles from '@/styles/components/tool-item.module.scss';

import Link from '@/components/Link';

const ToolItem = ({ href, image, height, width, title, description }) => {
	return (
		<Link href={href} className={styles.toolItem}>
			<div className={styles.toolItem__image}>
				<Image src={image} alt={`explicación para ${title}`} />
			</div>
			<h3 className={styles.toolItem__title}>{title}</h3>
			<p className={styles.toolItem__description}>{description}</p>
		</Link>
	);
};

export default ToolItem;

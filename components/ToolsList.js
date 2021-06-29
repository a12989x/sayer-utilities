import styles from '@/styles/components/tools-list.module.scss';

import Link from './Link';

const ToolsList = () => {
	return (
		<section className={styles.toolsList}>
			<h3>Herramientas</h3>

			<ul className={styles.toolsList__list}>
				<li>
					<Link href='/check'>Conocer ganancia</Link>
				</li>
				<li>
					<Link href='/obtain-price'>Obtener precio</Link> (Pendiente)
				</li>
			</ul>
		</section>
	);
};

export default ToolsList;

import { useTheme } from 'next-themes';

import styles from '@/styles/components/tools-list.module.scss';

import ToolItem from './ToolItem';

import ProfitDarkSVG from '@/public/assets/profit-dark.min.svg';
import ProfitLightSVG from '@/public/assets/profit-light.min.svg';
import PriceDarkSVG from '@/public/assets/price-dark.min.svg';
import PriceLightSVG from '@/public/assets/price-light.min.svg';

const ToolsList = () => {
	const { theme, resolvedTheme } = useTheme();

	return (
		<section className={styles.toolsList}>
			<ul className={styles.toolsList__list}>
				<li>
					<ToolItem
						href='/know-profit'
						image={
							theme === 'light' || resolvedTheme === 'light'
								? ProfitLightSVG
								: ProfitDarkSVG
						}
						title='Ganancia'
						description='Conoce la cantidad y el porcentaje que ganas de un producto.'
					/>
				</li>
				<li>
					<ToolItem
						href='/obtain-price'
						image={
							theme === 'light' || resolvedTheme === 'light'
								? PriceLightSVG
								: PriceDarkSVG
						}
						title='Precio'
						description='Obten el precio final de un producto dependiendo el margen de ganancia.'
					/>
				</li>
			</ul>
		</section>
	);
};

export default ToolsList;

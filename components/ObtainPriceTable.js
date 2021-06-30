import { useEffect, useState } from 'react';

import styles from '@/styles/components/tables.module.scss';

import useForm from 'hooks/useForm';

import Item from './Item';

const ObtainPriceTable = () => {
	const [values, handleChange] = useForm({ cost: '', percent: 30 });
	const [finalPrice, setFinalPrice] = useState('');

	useEffect(() => {
		const obtainPrice = () => {
			const { cost, percent } = values;

			const price = cost / ((100 - percent) / 100);

			setFinalPrice(price);
		};

		obtainPrice();
	}, [values]);

	return (
		<section className={styles.section}>
			<Item
				id='cost'
				value={values.cost}
				onChange={handleChange}
				label='Costo'
			/>

			<Item id='price' value={finalPrice} label='Precio Final' readOnly />

			<Item
				id='percent'
				value={values.percent}
				onChange={handleChange}
				label='Porcentaje'
			/>
		</section>
	);
};

export default ObtainPriceTable;

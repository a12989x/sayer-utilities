import { useEffect, useState } from 'react';

import styles from '@/styles/components/tables.module.scss';

import useForm from 'hooks/useForm';

import InputItem from './InputItem';
import ResultItem from './table/ResultItem';
import formatter from 'lib/formatter';

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
			<div className={styles.section__operation}>
				<InputItem
					id='cost'
					value={values.cost}
					onChange={handleChange}
				/>

				<span>+</span>

				<InputItem
					id='percent'
					value={values.percent}
					onChange={handleChange}
				/>
			</div>

			<ResultItem value={formatter.format(finalPrice)} />
		</section>
	);
};

export default ObtainPriceTable;

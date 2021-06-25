import { useEffect, useState } from 'react';

import styles from '@/styles/components/check/check.module.scss';

import useForm from 'hooks/useForm';
import Item from './Item';

const Check = () => {
	const [values, handleChange] = useForm({ cost: null, sale: null });
	const [gain, setGain] = useState({ gain: null, percent: null });

	useEffect(() => {
		const getGain = () => {
			const { cost, sale } = values;
			const gain = cost && sale ? sale - cost : 0;
			const percent = ((sale - cost) / sale) * 100;

			setGain({ gain, percent });
		};

		getGain();
	}, [values]);

	return (
		<section className={styles.section}>
			<Item
				id='cost'
				value={values.cost}
				onChange={handleChange}
				label='Compra'
			/>
			<Item
				id='sale'
				value={values.sale}
				onChange={handleChange}
				label='Venta'
			/>
			<Item id='gain' value={gain.gain || 0} label='Ganancia' readOnly />
			<Item
				id='percent'
				value={gain.percent || 0}
				label='Porcentaje'
				readOnly
			/>

			<br />
		</section>
	);
};

export default Check;

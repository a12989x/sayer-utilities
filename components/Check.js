import { useEffect, useState } from 'react';

import styles from '@/styles/components/check.module.scss';

import useForm from 'hooks/useForm';
import Item from './Item';

const Check = () => {
	const [values, handleChange] = useForm({ cost: '', sale: '' });
	const [gain, setGain] = useState({ currency: '', percent: '' });
	const [isPositive, setIsPositive] = useState(undefined);

	useEffect(() => {
		const getGain = () => {
			const { cost, sale } = values;
			const currency = cost && sale ? sale - cost : '';
			const percent = cost && sale ? ((sale - cost) / sale) * 100 : '';

			if (!sale || !cost) setIsPositive(undefined);
			else if (+sale < +cost) setIsPositive(false);
			else if (+sale > +cost) setIsPositive(true);
			else if (+sale === +cost) setIsPositive(undefined);

			setGain({ currency, percent });
		};

		getGain();
	}, [values]);

	return (
		<section className={styles.section}>
			<Item
				id='cost'
				value={values.cost}
				onChange={handleChange}
				label='Costo'
			/>
			<Item
				id='currency'
				value={gain.currency}
				label='Pesos'
				valueState={isPositive}
				readOnly
			/>

			<Item
				id='sale'
				value={values.sale}
				onChange={handleChange}
				label='Venta'
			/>
			<Item
				id='percent'
				value={gain.percent}
				label='Porcentaje'
				valueState={isPositive}
				readOnly
			/>
		</section>
	);
};

export default Check;

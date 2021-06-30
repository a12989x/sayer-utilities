import { useEffect, useState } from 'react';

import styles from '@/styles/components/know-profit-table.module.scss';

import useForm from 'hooks/useForm';
import Item from './Item';

const KnowProfitTable = () => {
	const [values, handleChange] = useForm({ cost: '', sale: '' });
	const [profit, setProfit] = useState({ currency: '', percent: '' });
	const [isPositive, setIsPositive] = useState(undefined);

	useEffect(() => {
		const getProfit = () => {
			const { cost, sale } = values;
			const currency = cost && sale ? sale - cost : '';
			const percent = cost && sale ? ((sale - cost) / sale) * 100 : '';

			if (!sale || !cost) setIsPositive(undefined);
			else if (+sale < +cost) setIsPositive(false);
			else if (+sale > +cost) setIsPositive(true);
			else if (+sale === +cost) setIsPositive(undefined);

			setProfit({ currency, percent });
		};

		getProfit();
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
				value={profit.currency}
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
				value={profit.percent}
				label='Porcentaje'
				valueState={isPositive}
				readOnly
			/>
		</section>
	);
};

export default KnowProfitTable;

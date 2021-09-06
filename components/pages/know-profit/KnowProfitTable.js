import { useEffect, useState } from 'react';

import styles from '@/styles/components/tables.module.scss';

import useForm from 'hooks/useForm';
import InputItem from '../../InputItem';
import ResultItem from '@/components/table/ResultItem';

const KnowProfitTable = () => {
	const [values, handleChange] = useForm({ cost: '0', sale: '0' });
	const [profit, setProfit] = useState({ currency: '0', percent: '0' });
	const [isPositive, setIsPositive] = useState(null);

	useEffect(() => {
		const getProfit = () => {
			const { cost, sale } = values;
			const currency = cost && sale ? sale - cost : '';
			const percent = cost && sale ? ((sale - cost) / sale) * 100 : '';

			if (!sale || !cost) setIsPositive(null);
			else if (+sale < +cost) setIsPositive(false);
			else if (+sale > +cost) setIsPositive(true);
			else if (+sale === +cost) setIsPositive(null);

			setProfit({ currency, percent });
		};

		getProfit();
	}, [values]);

	return (
		<section className={styles.section}>
			<div className={styles.section__operation}>
				<InputItem
					id='sale'
					value={values.sale}
					onChange={handleChange}
				/>
				<span>-</span>
				<InputItem
					id='cost'
					value={values.cost}
					onChange={handleChange}
				/>
				<span>=</span>
			</div>

			<div className={styles.section__result}>
				<ResultItem symbol='+' value={`$ ${profit.currency}`} />
				<ResultItem symbol='+' value={`${profit.percent} %`} />
			</div>
		</section>
	);
};

export default KnowProfitTable;

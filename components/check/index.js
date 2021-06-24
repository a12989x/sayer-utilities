import { useEffect, useState } from 'react';

import useForm from 'hooks/useForm';

import round10 from '../../utils/ronud10';

const Check = () => {
	const [values, handleChange] = useForm({ cost: 0, sale: 0 });
	const [gain, setGain] = useState({ gain: 0, percent: 0 });

	useEffect(() => {
		const getGain = () => {
			const { cost, sale } = values;
			const gain = sale - cost;
			const percent = ((sale - cost) / sale) * 100;

			setGain({ gain, percent });
		};
		getGain();
	}, [values]);

	return (
		<form>
			<label htmlFor='cost'>Compra</label>
			<input
				type='number'
				id='cost'
				value={values.cost}
				onChange={handleChange}
			/>

			<br />
			<label htmlFor='sale'>Venta</label>
			<input
				type='number'
				id='sale'
				value={values.sale}
				onChange={handleChange}
			/>

			<hr />

			<label htmlFor='gain'>Ganancia</label>
			<input
				type='number'
				id='gain'
				value={round10(gain.gain, -1) || 0}
			/>

			<br />
			<label htmlFor='percent'>Porcentaje</label>
			<input type='number' id='percent' value={gain.percent || 0} />

			<br />
		</form>
	);
};

export default Check;

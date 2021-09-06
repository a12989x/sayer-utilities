import styles from '@/styles/components/input-item.module.scss';

const InputItem = ({
	id,
	label,
	value,
	readOnly = false,
	valueState,
	...props
}) => {
	return (
		<div className={styles.inputItem}>
			<span>$</span>

			<input
				className={styles.inputItem__input}
				type='number'
				id={id}
				value={value}
				placeholder='0'
				{...props}
			/>
		</div>
	);
};

export default InputItem;

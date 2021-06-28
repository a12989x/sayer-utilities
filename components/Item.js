import styles from '@/styles/components/item.module.scss';

const Item = ({ id, label, value, readOnly = false, valueState, ...props }) => {
	return (
		<div className={styles.field}>
			<label htmlFor={id} className={styles.field__label}>
				{label}
			</label>

			<span>{id === 'percent' ? '%' : '$'}</span>

			<input
				className={
					readOnly
						? valueState === undefined
							? styles.field__input_default
							: valueState === false
							? styles.field__input_negative
							: styles.field__input_positive
						: styles.field__input_default
				}
				type='number'
				id={id}
				value={value}
				placeholder='0'
				disabled={readOnly}
				readOnly={readOnly}
				{...props}
			/>
		</div>
	);
};

export default Item;

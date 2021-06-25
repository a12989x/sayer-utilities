import styles from '@/styles/components/check/item.module.scss';

const Item = ({ readOnly, id, value, onChange, label }) => {
	return (
		<div className={styles.field}>
			<label htmlFor={id}>{label}</label>
			{readOnly ? (
				<input
					className={styles.field__input}
					type='number'
					id={id}
					value={value}
					placeholder='0'
					readOnly
				/>
			) : (
				<input
					className={styles.field__input}
					type='number'
					id={id}
					value={value}
					onChange={onChange}
					placeholder='0'
				/>
			)}
		</div>
	);
};

export default Item;

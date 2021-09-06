import styles from '@/styles/components/table/result-item.module.scss';

const ResultItem = ({ symbol, value, isPositive }) => {
	return (
		<div
			className={`${styles.resultItem} ${
				isPositive ? styles.resultItem__positive : ''
			}`}
		>
			<span>{symbol}</span>
			<p>{value}</p>
		</div>
	);
};

export default ResultItem;

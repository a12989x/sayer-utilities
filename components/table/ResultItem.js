import styles from '@/styles/components/table/result-item.module.scss';

const ResultItem = ({ symbol, value }) => {
	return (
		<div className={styles.resultItem}>
			<span>{symbol}</span>
			<p>{value}</p>
		</div>
	);
};

export default ResultItem;

import styles from './transactionHistory.module.css';
export const TransactionHistoryItem = ({ id, type, amount, currency }) => {
  return (
    <tr className={styles.item} id={id}>
      <td className={styles.type}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

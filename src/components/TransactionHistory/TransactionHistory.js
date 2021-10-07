import styles from './transactionHistory.module.css';
import PropTypes from 'prop-types';
import { TransactionHistoryItem } from './TransactionHistoryItem';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.TransactionHistory}>
      <thead className={styles.title}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(el => (
          <TransactionHistoryItem
            key={el.id}
            type={el.type}
            amount={el.amount}
            currency={el.currency}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  key: PropTypes.number,
};

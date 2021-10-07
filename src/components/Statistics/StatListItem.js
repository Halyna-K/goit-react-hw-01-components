import styles from './statistics.module.css';
export const StatListItem = ({ id, label, percentage }) => {
  return (
    <li className="item" key={id}>
      <span className="label">{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
};

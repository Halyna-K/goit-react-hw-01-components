import PropTypes from 'prop-types';
import styles from './friendList.module.css';

export const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <li className={`item ${styles.item}`} key={id}>
      {isOnline === true ? (
        <span className={`${styles.status} ${styles.true}`}>{isOnline}</span>
      ) : (
        <span className={`${styles.status} ${styles.false}`}>{isOnline}</span>
      )}

      <img
        className={`avatar ${styles.avatar}`}
        src={avatar}
        alt={id}
        width="100"
      />
      <p className="name">{name}</p>
    </li>
  );
};
FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
};

import styles from './friendList.module.css';
import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.FriendList}>
      {friends.map(el => (
        <FriendListItem
          key={el.id}
          isOnline={el.isOnline}
          avatar={el.avatar}
          name={el.name}
        />
      ))}
    </ul>
  );
};

export default FriendList;

FriendList.propTypes = {
  key: PropTypes.number,
};

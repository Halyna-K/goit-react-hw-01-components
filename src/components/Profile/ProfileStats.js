// import StatsItem from "./StatsItem"
import styles from './profile.module.css';
export const ProfileStats = ({ followers, views, likes }) => (
  <ul className="stats">
    {/* {<StatsItem followers={followers}/> */}
    <li className="item">
      <span className="label">Followers</span>
      <span className={styles.quantity}>{followers}</span>
    </li>
    <li className="item">
      <span className="label">Views</span>
      <span className={styles.quantity}>{views}</span>
    </li>
    <li className="item">
      <span className="label">Likes</span>
      <span className={styles.quantity}>{likes}</span>
    </li>
  </ul>
);

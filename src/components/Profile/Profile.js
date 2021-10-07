// import PropTypes from 'prop-types';
import styles from './profile.module.css';
import { ProfileStats } from './ProfileStats';
import DescUser from './Description';

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={styles.Profile}>
      <DescUser avatar={avatar} name={name} tag={tag} location={location} />
      <ProfileStats
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
    </div>
  );
};
export default Profile;

// Profile.propTypes ={
//     name: PropTypes.string,
//     tag: PropTypes.string,
//     location: PropTypes.string, avatar: PropTypes.elementType, stats: PropTypes.objectOf(PropTypes.number)
// }

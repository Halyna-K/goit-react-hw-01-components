import styles from './profile.module.css'
const DescUser = (
  {avatar, name,tag,location})=>
  (
<div className={styles.description}>
    <img
      src={avatar}
      alt={avatar}
      width = "200px"
      className="avatar"
    />
    <p className="name">{name}</p>
    <p className={styles.tag}>{tag}</p>
    <p className={styles.location}>{location}</p>
  </div>
)
export default DescUser;

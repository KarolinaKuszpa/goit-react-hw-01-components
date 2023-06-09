import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => (
  <div className={styles.container}>
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <div className={styles.statsWrapper}>
        <div className={styles.frame}>
          <p className={styles.frameText}>Followers</p>
          <p className={styles.frameCount}>{stats.followers}</p>
        </div>

        <div className={styles.frame}>
          <p className={styles.frameText}>Views</p>
          <p className={styles.frameCount}>{stats.views}</p>
        </div>

        <div className={styles.frame}>
          <p className={styles.frameText}>Likes</p>
          <p className={styles.frameCount}>{stats.likes}</p>
        </div>
      </div>
    </div>
  </div>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;

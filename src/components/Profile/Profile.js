
// @ts-nocheck
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={classes.profile}>
      <div className={classes.profileContainer}>
        <div className={classes.profileHeader}>
          <div className={classes.profileIcon}>M</div>
          <div className={classes.profileName}>
            <h1>Lorem Ipsum</h1>
            <p>lorem@posum.com</p>
            <small>mayowad43</small>
            <small>Last Login: 1992 12:00:30</small>
          </div>
        </div>
        <div className={classes.profile__details}>
          <div className={classes.profileSection}>
            <h4>Phone Number</h4>
            <p>07065426253</p>
          </div>
          <div className={classes.profileSection}>
            <h4>Gender</h4>
            <p>Lorem</p>
          </div>
          <div className={classes.profileSection}>
            <h4>Longtitude</h4>
            <p>Male</p>
          </div>
          <div className={classes.profileSection}>
            <h4>Latitude</h4>
            <p>Male</p>
          </div>
          <div className={classes.profileSection}>
            <h4>URL</h4>
            <p>Male</p>
          </div>
          <div className={classes.profileSection}>
            <h4>Mac address</h4>
            <p>Male</p>
          </div>
          <div className={classes.profileSection}>
            <h4> Card Number</h4>
            <p>Male</p>
          </div>
          <div className={classes.profileSection}>
            <h4> Card Type</h4>
            <p>Male</p>
          </div>

          <div className={classes.profileSection}>
            <h4>Payment Method</h4>
            <p>Male</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Profile;

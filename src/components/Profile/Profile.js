// @ts-nocheck
import classes from "./Profile.module.css";

const Profile = ({ user }) => {
  return (
    <div className={classes.profile}>
      <div className={classes.profileContainer}>
        <div className={classes.profileHeader}>
          <div className={classes.profileIcon}>M</div>
          <div className={classes.profileName}>
            <h1>{`${user.FirstName} ${user.LastName}`} </h1>
            <p>{user.UserName}</p>
            <small>{user.Email}</small>
            <small>Last Login:{user.LastLogin}</small>
          </div>
        </div>
        <div className={classes.profile__details}>
          <div className={classes.profileSection}>
            <h4>Phone Number</h4>
            <p>{user.PhoneNumber}</p>
          </div>
          <div className={classes.profileSection}>
            <h4>Gender</h4>
            <p>{user.Gender}</p>
          </div>
          <div className={classes.profileSection}>
            <h4>Longtitude</h4>
            <p>{user.Longitude}</p>
          </div>
          <div className={classes.profileSection}>
            <h4>Latitude</h4>
            <p>{user.Latitude}</p>
          </div>
          <div className={classes.profileSection}>
            <h4>URL</h4>
            <p>{user.URL}</p>
          </div>
          <div className={classes.profileSection}>
            <h4>Mac address</h4>
            <p>{user.MacAddress}</p>
          </div>
          <div className={classes.profileSection}>
            <h4> Card Number</h4>
            <p>{user.CreditCardNumber}</p>
          </div>
          <div className={classes.profileSection}>
            <h4> Card Type</h4>
            <p>{user.CreditCardType}</p>
          </div>
          <div className={classes.profileSection}>
            <h4>Payment Method</h4>
            <p>{user.PaymentMethod}</p>
          </div>
          <div className={classes.profileSection}>
            <h4>Doamin Name</h4>
            <p>{user.DomainName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

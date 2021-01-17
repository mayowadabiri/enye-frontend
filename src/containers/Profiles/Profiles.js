// @ts-nocheck
import Profile from "../../components/Profile/Profile";
import classes from "./Profiles.module.css";
const Profiles = ({ profile, value, gender, payment }) => {
  console.log(gender)
  return (
    <div className={classes.profiles}>
      <div className={classes.profilesContainer}>
        {profile
          .filter(
            (user) =>
              user.FirstName.toLowerCase().includes(value.toLowerCase()) ||
              user.LastName.toLowerCase().includes(value.toLowerCase()) ||
              user.UserName.toLowerCase().includes(value.toLowerCase()) ||
              user.Gender === gender
            // user.PaymentMethod.includes(payment)
            // );
          )
          .map((user, index) => (
            <Profile user={user} key={index} />
          ))}
      </div>
    </div>
  );
};

export default Profiles;

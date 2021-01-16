// @ts-nocheck
import Profile from "../../components/Profile/Profile";
import classes from "./Profiles.module.css";
const Profiles = ({ profile }) => {
  console.log(profile)
  return (
    <div className={classes.profiles}>
      <div className={classes.profilesContainer}>
        {profile.map((user, index) => (
          <Profile user={user} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profiles;

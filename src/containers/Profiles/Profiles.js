// @ts-nocheck
import Profile from "../../components/Profile/Profile";
import classes from "./Profiles.module.css"
const Profiles = () => {
  return (
    <div className={classes.profiles}>
      <div className={classes.profilesContainer}>
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
      </div>
    </div>
  );
};

export default Profiles;

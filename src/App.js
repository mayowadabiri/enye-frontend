import Profiles from "./containers/Profiles/Profiles";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="filter">
          <div>
            <label className="filter__label">Filter by Gender:</label>
            <select className="filter__input">
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div>
            <label className="filter__label">Filter by Payment Method:</label>
            <select className="filter__input">
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div>
            <label className="filter__label">Search</label>
            <input type="text" className="filter__input" placeholder="Search by username, name or email address" />
          </div>
        </div>
        <Profiles />
      </div>
    </div>
  );
};

export default App;

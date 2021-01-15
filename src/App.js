// @ts-nocheck
import Profiles from "./containers/Profiles/Profiles";
import "./App.css";
import { useEffect, useState } from "react";
import Input from "./components/Input/Input";
import axios from "axios";

const App = () => {
  const [profiles, setProfiles] = useState([]);
  const [searches, setSearches] = useState({
    gender: {
      elementType: "select",
      label: "Country",
      options: [
        {
          value: "Male",
          name: "Male",
        },
        {
          value: "Female",
          name: "Female",
        },
        {
          value: "-",
          name: "Prefer  not to say",
        },
      ],
      value: "",
    },

    payment: {
      elementType: "select",
      label: "Country",
      options: [
        {
          value: "Male",
          name: "Male",
        },
        {
          value: "Female",
          name: "Female",
        },
        {
          value: "-",
          name: "Prefer  not to say",
        },
      ],
      value: "",
    },
    name: {
      elementType: "input",
      label: "Search",
      type: "text",
      value: "",
      placeholder: "Search by name, username or email address",
    },
  });

  useEffect(() => {
    axios
      .get("https://api.enye.tech/v1/challenge/records")
      .then((res) => {
        console.log(res.data);
        const sliced = res.data.records.profiles.slice(0, 20)
        setProfiles(sliced);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const changeHandler = (event, formType) => {
    const updatedForm = {
      ...searches[formType],
      value: event.target.value,
    };
    setSearches({
      ...searches,
      [formType]: updatedForm,
    });
  };

  let search = [];
  for (let key in searches) {
    search.push({
      id: key,
      config: searches[key],
    });
  }
  let form = search.map((form) => (
    <Input
      key={form.id}
      onchange={(event) => changeHandler(event, form.id)}
      value={form.config.value}
      elementType={form.config.elementType}
      label={form.config.label}
      options={form.config.options}
      place={form.config.placeholder}
    />
  ));

  return (
    <div className="App">
      <div className="container">
        <div className="filter">{form}</div>
        <div className="pagination">
          <div className="pagination__container">
            <p className="pagination__item">
              <span>1</span>
            </p>
            <p className="pagination__item">
              <span>2</span>
            </p>
            <p className="pagination__item">
              <span>3</span>
            </p>
            <p className="pagination__item">
              <span>4</span>
            </p>
          </div>
        </div>
        <Profiles profile={profiles} />
      </div>
    </div>
  );
};

export default App;

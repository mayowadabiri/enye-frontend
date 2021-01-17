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
      label: "Payment Method",
      options: [
        {
          value: "money order",
          name: "money order",
        },
        {
          value: "check",
          name: "check",
        },
        {
          value: "cc",
          name: "cc",
        },
        {
          value: "paypal",
          name: "paypal",
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
    const profiles = localStorage.getItem("profiles");
    if (!profiles) {
      axios
        .get("https://api.enye.tech/v1/challenge/records")
        .then((res) => {
          localStorage.setItem(
            "profiles",
            JSON.stringify(res.data.records.profiles)
          );
          const sliced = res.data.records.profiles.slice(0, 20);
          console.log(sliced);
          setProfiles(sliced);
        })
        .catch((err) => {
          console.log(err.response);
        });
    } else {
      console.log(true)
      const update = JSON.parse(profiles);
      const updated = update.slice(0, 20);
      setProfiles(updated);
    }
  }, []);

  useEffect(() => {
    const updatedProfile = profiles.filter((prof) => {
      console.log(prof.FirstName);
      return (
        prof.FirstName.toLowerCase().includes(
          searches.name.value.toLowerCase()
        ) ||
        prof.Gender.includes(searches.gender.value) ||
        prof.PaymentMethod.includes(searches.payment.value) ||
        prof.Email.toLowerCase().includes(searches.name.value.toLowerCase())
      );
    });
    console.log(searches.name.value);
    // console.log(updatedProfile);
    setProfiles(updatedProfile);
  }, [searches.gender.value, searches.name.value, searches.payment.value]); // eslint-disable-line react-hooks/exhaustive-deps

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

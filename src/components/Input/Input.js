// @ts-nocheck
import classes from "./Input.module.css";

const Input = (props) => {
  let inputElement;
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          id={props.label}
          className={classes.filter__input}
          value={props.value}
          onChange={props.onchange}
          placeholder={props.place}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={classes.filter__input}
          value={props.value}
          onChange={props.onchange}
          id={props.label}
        >
          {props.options.map((option) => (
            <option key={option.value} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          id={props.label}
          value={props.value}
          onChange={props.onchange}
          name={props.label}
          className="form-input"
        />
      );
      break;
  }

  return (
    <div className="form-group">
      <label className="form-label" htmlFor={props.label}>
        {props.label}
      </label>
      {inputElement}
    </div>
  );
};

export default Input;

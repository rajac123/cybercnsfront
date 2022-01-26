import React from "react";
import Select from "react-select";
import { components } from "react-select";
const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

const DropDownInput = (props) => {
  console.log(props);
  const itemValues = [];
  props.items.forEach((item) => {
    itemValues.push({
      label: item.name,
      value: item.name,
    });
  });
  
  const errorMessage = props.error ? (
    <span className="error-message">{props.error}</span>
  ) : (
    <span className="error-message"></span>
  );
  const handleChange = (item) => {
    let list = [];
    item && item.map((o) => list.push(o.value));
    props.onChange(list);
  };

  return (
    <>
      <Select
        placeholder={props.placeholder}
        isMulti=  { true }
        isDisabled={props.isDisabled}
        value={
          props.value && 
          props.value.map((item) => {
            let actionItem = props.items.find((o) => o.name === item);
              return {
                value: actionItem.name,
                label: actionItem.name,
              };
              })
        }
        onChange={handleChange}
        components={{
          Option
        }}
        hideSelectedOptions={false}
        closeMenuOnSelect={false}
        isSearchable={true}
        options={itemValues}
      />
      {errorMessage}
    </>
  );
};

export default DropDownInput;
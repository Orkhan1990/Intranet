import { Select } from "flowbite-react";
import React from "react";

const SelectWithButtons = ({ workers, name, value, onChange }) => {

  const handleChange=(event)=>{
    onChange(event.target.value)
  }
  return (
    <div className="flex flex-col gap-4">
      <Field
        as={Select}
        name={name}
        value={value}
        className="w-[250px]"
        onChange={handleChange}
      >
        <option value="">İsciler</option>
        {workers &&
          workers.map((worker, index) => (
            <option value={worker._id} key={index}>
              {worker.firstName + " " + worker.lastName}
            </option>
          ))}
      </Field>
    </div>
  );
};

export default SelectWithButtons;

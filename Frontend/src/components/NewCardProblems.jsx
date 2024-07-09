import React, { useState } from "react";
import SelectWithButtons from "../components/SelectWithButtons";
import { TextInput, Button } from "flowbite-react";

const NewCardProblems = ({workers,onValueChange,value}) => {
  const[inputValues,setInputValues]=useState(value);

  console.log(inputValues);
  const incrementCount = () => {
    setInputValues([...inputValues,{description:"",
      serviceWorkers:[]}])
  };
 

 
  return (
    <div className="border p-5 rounded-md">
      <h2>Problemlər</h2>
      {inputValues.map((input, index) => (
        <div className="flex gap-[250px] mt-2" key={index}>
          <TextInput type="text" className="w-[500px]" id="decription" value={input.description} onChange={onValueChange}/>
          <SelectWithButtons workers={workers} onValueChange={onValueChange} value={input.serviceWorkers} />
        </div>
      ))}
      <div className="flex gap-5">
        <Button color="blue" className="mt-5" onClick={incrementCount}>
          Əlavə et <span className="ml-2 ">+</span>
        </Button>
      </div>
    </div>
  );
};

export default NewCardProblems;

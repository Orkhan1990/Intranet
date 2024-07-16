import React, { useState } from "react";
import SelectWithButtons from "../components/SelectWithButtons";
import { TextInput, Button } from "flowbite-react";

const NewCardProblems = ({workers,value}) => {
  const[inputValues,setInputValues]=useState(value);

  console.log(inputValues);
  const incrementCount = () => {
    setInputValues([...inputValues,{description:"",
      serviceWorkers:[]}])
  };
 
 const handleChangeValue=(event,index)=>{
         const newArray=[...inputValues];
         newArray[index].description=event.target.value;
         setInputValues(newArray);
 }
 
  return (
    <div className="border p-5 rounded-md">
      <h2>Problemlər</h2>
      {inputValues.map((input, index) => (
        <div className="flex gap-[250px] mt-2" key={index}>
          <TextInput type="text" className="w-[500px]" id="description" defaultValue={input.description} onChange={(e)=>handleChangeValue(e,index)}/>
          <SelectWithButtons workers={workers}  value={input.serviceWorkers} />
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

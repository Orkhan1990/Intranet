import { Select } from "flowbite-react";
import React, { useState } from "react";

const SelectWithButtons = ({workers,onValueChange,value}) => {
       const[selectValues,setSelectValues]=useState(value);
       console.log(value);

  const incrementSelectCount = () => {
    setSelectValues([...selectValues,""]);
  };

  const decrementSelectCount = (index) => {
    const newForm=[...selectValues];
    setSelectValues(newForm.splice(index,1));
   
  };
  return (
    <div  className="flex flex-col gap-4">
      {selectValues.map((selectValue, index) => (
        <div className="flex gap-4 items-center">
          
          {
            index==0?"":(
              <span
              className="text-[25px] cursor-pointer"
              onClick={()=>decrementSelectCount(index)}
            >
              -
            </span>
            )
          }
         
        <Select className="w-[250px]" key={index} id="workers" value={
          selectValue} onChange={onValueChange} >
          <option value="">İsciler</option>
          {
            workers&&workers.map((worker,index)=>(
              <option value={worker._id} key={index}>{worker.firstName+" "+worker.lastName}</option>
            ))
          }
        </Select>
        <span
        className="text-[25px] cursor-pointer"
        onClick={incrementSelectCount}
      >
        +
      </span>
        </div>
      ))}
      </div>

    
  
  );
};

export default SelectWithButtons;

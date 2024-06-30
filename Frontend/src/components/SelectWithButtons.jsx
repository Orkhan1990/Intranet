import { Select } from "flowbite-react";
import React, { useState } from "react";

const SelectWithButtons = ({workers}) => {
  const [selectCount, setSelectCount] = useState(1);

  const incrementSelectCount = () => {
    setSelectCount(selectCount + 1);
  };

  const decrementSelectCount = () => {
    if (selectCount > 1) {
      setSelectCount(selectCount - 1);
    }
  };
  return (
    <div  className="flex flex-col gap-4">
      {[...Array(selectCount)].map((_, index) => (
        <div className="flex gap-4 items-center">
          
          <span
        className="text-[25px] cursor-pointer"
        onClick={decrementSelectCount}
      >
        -
      </span>
        <Select className="w-[250px]" key={index}>
          <option value="">İsciler</option>
          {
            workers&&workers.map((worker,index)=>(
              <option value={worker._id}>{worker.firstName+" "+worker.lastName}</option>
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

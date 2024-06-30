import { TextInput,Select } from "flowbite-react";
import React, { useState } from "react";

const NewCardWorkersName = () => {
  const [selectCount, setSelectCount] = useState(1);

  const decrementSelectCount = () => {
    if (selectCount > 1) {
      setSelectCount(selectCount - 1);
    }
  };

  const incrementSelectCount = () => {
    setSelectCount(selectCount + 1);
  };
  return (
    <div className=" flex flex-col gap-2">
      {[...Array(selectCount)].map((_, index) => (
        <div className="flex gap-4 items-center">
          <span
            className="text-[25px] cursor-pointer"
            onClick={decrementSelectCount}
          >
            -
          </span>
          <div className="flex gap-2 w-[200px]">
            <TextInput type="text" className="w-[70px]" />
            <Select className="w-[250px]" key={index}>
              <option value="">İsciler</option>
            </Select>
          </div>

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

export default NewCardWorkersName;

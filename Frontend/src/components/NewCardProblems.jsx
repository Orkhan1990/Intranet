import React, { useState } from "react";
import SelectWithButtons from "../components/SelectWithButtons";
import { TextInput, Button } from "flowbite-react";

const NewCardProblems = ({workers,value,onValueChange}) => {
  const [count, setCount] = useState(1);
  const[inputValue,setInputValue]=useState(value);


  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleChangeValue=(e)=>{
    const newValue=e.target.value;
    setInputValue(newValue);
    onValueChange()
  }
  return (
    <div className="border p-5 rounded-md">
      <h2>Problemlər</h2>
      {[...Array(count)].map((_, index) => (
        <div className="flex gap-[250px] mt-2" key={index}>
          <TextInput type="text" className="w-[500px]" onChange={handleChangeValue} />
          <SelectWithButtons workers={workers} />
        </div>
      ))}
      <div className="flex gap-5">
        <Button color="blue" className="mt-5" onClick={incrementCount}>
          Əlavə et <span className="ml-2 ">+</span>
        </Button>

        <Button color="blue" className="mt-5" onClick={decrementCount}>
          Azalt <span className="ml-2 ">-</span>
        </Button>
      </div>
    </div>
  );
};

export default NewCardProblems;

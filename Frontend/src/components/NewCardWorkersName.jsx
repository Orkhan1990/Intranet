import { TextInput,Select, Button } from "flowbite-react";
import { Field } from "formik";
import React, {  useState } from "react";

const NewCardWorkersName = ({workers,name,value,onChange,index,push,remove}) => {
 


  return (
    <div className=" flex flex-col gap-2">
   
        <div className="flex gap-4 items-center">
          <Button
          color={"blue"}
          onClick={()=>remove(index)}
          >
            -
          </Button>
          <div className="flex gap-2 w-[200px]">
            <Field as={TextInput} type="text" className="w-[70px]" />
            <Select className="w-[250px]" name={`${name}.jobWorkers`}>
              <option value="">İşçilər</option>
            {
              workers&&workers.map((worker,index)=>(
               
                <option value={worker._id} key={index}>{worker.firstName+" "+worker.lastName}</option>
             
              ))
            }
             </Select>
           
          </div>

          <Button
          color={"blue"}
          onClick={()=>push("")}
          >
            +
          </Button>
        </div>
  
    </div>
  );
};

export default NewCardWorkersName;

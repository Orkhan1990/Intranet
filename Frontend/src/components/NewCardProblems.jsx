import React from "react";
import SelectWithButtons from "../components/SelectWithButtons";
import { Field,FieldArray } from "formik";
import { TextInput } from "flowbite-react";

const NewCardProblems = ({ workers, name, values, setFieldValue }) => {
  return (
    <div>
      <div className="flex gap-[250px] mt-2">
        <Field
          as={TextInput}
          type="text"
          className="w-[500px]"
          name={`${name}.description`}
        />
        <FieldArray name={`${name}.serviceWorkers`}>
          {({ push, remove }) => (
            <>
              {values.serviceWorkers.map((_,index) => (
                <div key={index}>
                  <SelectWithButtons
                   name={`${name}.serviceWorkers[${index}]`}
                   value={values.serviceWorkers[index]}
                   onChange={(value)=>setFieldValue(`${name}.serviceWorkers[${index}]`,value)}
                   workers={workers}
                  />
                </div>
              ))}
            </>
          )}
        </FieldArray>
      </div>
    </div>
  );
};

export default NewCardProblems;

import { Table, Button, TextInput } from "flowbite-react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import NewCardWorkersName from "./NewCardWorkersName";

const NewCardWorkers = ({workers,values,push,remove}) => {
 

  return (
 
          <Table.Body  >
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <TextInput type="text" className="w-[200px]" />
              </Table.Cell>
              <Table.Cell>
                <div className="flex gap-2 items-center">
                  <TextInput type="text" className="w-[300px]" />
                  <Link>
                    <FaArrowAltCircleUp className="text-2xl text-green-600" />
                  </Link>
                </div>
              </Table.Cell>
              <Table.Cell>
                <TextInput type="text" className="w-[60px]" />
              </Table.Cell>
              <Table.Cell>
                <TextInput type="text" className="w-[100px]" />
              </Table.Cell>
              <Table.Cell>
                <TextInput type="text" className="w-[70px]" />
              </Table.Cell>
              <Table.Cell>
                <TextInput type="text" className="w-[70px]" />
              </Table.Cell>
              <Table.Cell>
                <NewCardWorkersName workers={workers}/>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
       
     
   
  );
};

export default NewCardWorkers;

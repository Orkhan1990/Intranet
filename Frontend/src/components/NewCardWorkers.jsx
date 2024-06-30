import { Table, Button, TextInput } from "flowbite-react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import NewCardWorkersName from "./NewCardWorkersName";

const NewCardWorkers = ({workers}) => {
  const [count, selectCount] = useState(1);
  const incrementCount = () => {
    selectCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      selectCount(count - 1);
    }
  };

  return (
    <div className="border p-5 rounded-md  overflow-x-scroll">
      <h2 className="mb-4">İşçilik</h2>

      <Table>
        <Table.Head>
          <Table.HeadCell>İşin kodu (MAN)</Table.HeadCell>
          <Table.HeadCell>İşin adı</Table.HeadCell>
          <Table.HeadCell>AV</Table.HeadCell>
          <Table.HeadCell>Qiymət</Table.HeadCell>
          <Table.HeadCell>Endirim(%)</Table.HeadCell>
          <Table.HeadCell>Yağ</Table.HeadCell>
          <Table.HeadCell>Görüldü</Table.HeadCell>
        </Table.Head>
        {[...Array(count)].map((_, index) => (
          <Table.Body className="divide-y " key={index}>
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
        ))}
      </Table>

      <div className="flex  gap-2 mt-5 items-center justify-center">
        <h2 className="font-bold">Cəmi:</h2>
        <span className="font-semibold">0 AZN</span>
      </div>

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

export default NewCardWorkers;

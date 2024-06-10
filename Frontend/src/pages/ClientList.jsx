import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";

const ClientList = () => {
  const [clients, setClients] = useState([]);
  const [error, setError] = useState(false);
  console.log(clients);
  useEffect(() => {
    const getAllClients = async () => {
      try {
        const res = await fetch(
          "http://localhost:3004/api/v1/client/getClients",
          {
            method: "GET",
            credentials: "include", // added this part
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await res.json();
        if (!res.ok || data.success === false) {
          setError(data.message);
        }
        setClients(data);
      } catch (error) {
        setError(error.message);
      }
    };
    getAllClients();
  }, []);
  return (
    <div className="min-h-screen p-10">
      <Table>
        <Table.Head>
          <Table.HeadCell>Şirkət adı</Table.HeadCell>
          <Table.HeadCell>İşçilik</Table.HeadCell>
          <Table.HeadCell>Zapcast</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {clients.map((client, index) => (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {client.companyName}
              </Table.Cell>
              <Table.Cell>
                <input type="text" className="w-10 h-7 p-1"/>
              </Table.Cell>
              <Table.Cell>
                <input type="text"  className="w-10 h-7 p-1"/>
              </Table.Cell>
              <Table.Cell>
                <input type="text" className="w-10 h-7 p-1"/>
              </Table.Cell>
              <Table.Cell>
                <Link
                  to={"/updateClient"}
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Edit
                </Link>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ClientList;

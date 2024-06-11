import React, { useEffect, useState } from "react";
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
      <div className="p-50 flex flex-col gap-2">
        <div className="max-w-full flex justify-around bg-blue-200 p-2 rounded-md text-sm">
          <span>Say</span>
          <span>Şirkət adı</span>
          <span>İşçilik</span>
          <span>Ehtiyyat hissəsi</span>
          <span>Dəyişmək</span>
        </div>
        <div className="max-w-full  flex flex-col gap-5 bg-blue-200 p-2 rounded-md">
          {clients.map((item, index) => (
            <form className="flex  justify-around items-center" key={index}>
              <span>{index+1}</span>
              <span>{item.companyName}</span>
              <input type="text" className="w-[40px] h-[30px] p-2" />
              <input type="text" className="w-[40px] h-[30px] p-2" />
              <Link to={`/updateClient/${item._id}`} className="text-blue-600">Edit</Link>
            </form>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientList;

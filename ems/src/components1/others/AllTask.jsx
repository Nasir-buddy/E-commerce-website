import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = (elem) => {
  const [userData , setUserData] = useContext(AuthContext);
  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded h-60">
      <div className="bg-blue-300 rounded px-4 flex justify-between text-black py-2 mb-6 border-purple-400">
        <h2 className="w-1/5">Employee Name</h2>
        <h3 className="w-1/5">New task</h3>
        <h5 className="w-1/5">Active</h5>
        <h5 className="w-1/5"> Completed</h5>
        <h5 className="w-1/5"> Failed</h5>
      </div>

      <div className="h-[80%] overflow-auto">
        {userData.map(function (elem , idx) {
          return (
            <div key={idx} className="border-yellow-200 border-2 mb-6 py-2 px-4 flex center justify-between ">
              <h2 className="w-1/5 text-lg gap-1px text-white">{elem.name}</h2>
              <h3 className="w-1/5 text-pink-300">{elem.taskNumbers.new}</h3>
              <h5 className="w-1/5 text-blue-400">{elem.taskNumbers.active}</h5>
              <h5 className="w-1/5 text-gray-400">{elem.taskNumbers.completed}</h5>
              <h5 className="w-1/5 text-amber-400">{elem.taskNumbers.failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;

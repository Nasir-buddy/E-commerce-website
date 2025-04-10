import React from "react";
import { useState } from "react";

import { AuthContext } from "../../context/AuthProvider";
import { useContext } from "react";

const CreateTask = () => {

const [userData , setUserData] = useContext(AuthContext);

  const [taskTitle, settaskTitle] = useState("");
  const [taskDescription, settaskDescription] = useState("");
  const [taskDate, settaskDate] = useState("");
  const [assignTo, setassignTo] = useState("");
  const [category, setcategory] = useState("");

  const [newtask, setNewTask] = useState({});

  const submithandler = (e) => {
    e.preventDefault;

    setNewTask({
      taskTitle,
      taskDate,
      taskDescription,
      category,
      NewTask: true,
      failed: false,
      active: false,
      completed: false,
    });

    
    const data = userData

    
    data.forEach(function (elem) {
      if (assignTo == elem.name) {
        elem.tasks.push(newtask);
        elem.taskNumbers.new = elem.taskNumbers.new+1
      }
    });
    setUserData(data)
    console.log(data)

    localStorage.setItem('employees',JSON.stringify(data))
    settaskDate("");
    setassignTo("");
    setcategory("");

    settaskDescription("");
    settaskTitle("");
  };

  return (
    <div className="p-5  rounded mt-7 bg-[#1c1c1c]">
      <form
        onSubmit={(e) => {
          submithandler(e);
        }}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-1/2 ">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title </h3>
            <input
              value={taskTitle}
              onChange={(e) => {
                settaskTitle(e.target.value);
              }}
              className="text-sm px-2 py-1  w-4/5 rounded outline-none  bg-transparent text-gray-300 border-[1px] placeholder:text-gray-300"
              type="text"
              placeholder="Enter the title of the task"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => {
                settaskDate(e.target.value);
              }}
              className="text-sm px-2 py-1  w-4/5 rounded outline-none  bg-transparent border-[1px] text-gray-300 placeholder:text-gray"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5 ">Assign To </h3>
            <input
              value={assignTo}
              onChange={(e) => {
                setassignTo(e.target.value);
              }}
              className="text-sm px-2 py-1  w-4/5 rounded outline-none  bg-transparent border-[1px] text-gray-300 placeholder:text-gray-300 "
              type="text"
              placeholder="Enter employee Name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5 ">Category </h3>
            <input
              value={category}
              onChange={(e) => {
                setcategory(e.target.value);
              }}
              className="text-sm px-2 py-1  w-4/5 rounded outline-none  bg-transparent border-[1px] text-gray-300 placeholder:text-gray-300"
              type="text"
              placeholder="Design, Dev etc"
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <h3 className="taxt-sm text-gray-300 mb-0.5">Description </h3>
          <textarea
            value={taskDescription}
            onChange={(e) => {
              settaskDescription(e.target.value);
            }}
            className=" w-full text-sm height-44 py-2 px-4 rounded outline-none bg-transparent border-[1px] text-gray-300 placeholder:text-gray-300"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button className="bg-[#cc8b86] rounded text-sm mt-4 w-full px-5 py-3 hover:bg-[#d1be9c] text-black ">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;

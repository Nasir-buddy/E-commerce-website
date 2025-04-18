import React from "react";

const TaskListNumbers = ({data}) => {
  console.log("Data", data)
  
  if (!data) {
    return <div>Loading task data...</div>;
  }
  
  return (
    <div className="flex mt-10 justify-between gap-5 screen overflow-auto h-40">
      <div className="rounded-xl w-[45%] py-6 px-9 bg-[#cc8b86] text-black">
        <h2 className="text-3xl font-semibold">{data.taskNumbers.new}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 px-9 text-black bg-[#f9eae1]">
        <h2 className="text-3xl font-semibold">{data.taskNumbers.completed}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 px-9 bg-[#7d4f50] text-white" >
        <h2 className="text-3xl font-semibold">{data.taskNumbers.failed}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 px-9 bg-[#d1be9c]">
        <h2 className="text-3xl font-semibold">{data.taskNumbers.active}</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;

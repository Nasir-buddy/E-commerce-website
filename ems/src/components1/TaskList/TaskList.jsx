import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";
import CompleteTask from "./CompleteTask";

const TaskList = ({data}) => {
  if (!data || !data.tasks) {
    return <div>Loading tasks...</div>;
  }
  
  return (
    <div
      id="tasklist"
      className="h-[50%] over x-auto justify overflow-auto w-full flex items-center justify-start gap-10 flex-nowrap mt-10">
    {data.tasks.map((elem, idx )=>{
      if(elem.active){
        return <AcceptTask key ={idx} data={elem}/>
      }
      if (elem.NewTask){
        return <NewTask  key={idx} data={elem}/>
      }
      if(elem.Completed){
        return <CompleteTask key ={idx} data={elem} />
      }
      if(elem.failed){
        return<FailedTask key={idx} data={elem}/>
      }
    })

    }
      <div className="flex-shrink-0 h-full w-[300px] bg-[#aa998f] rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-[#7d4f50] text-sm px-3 py-1 rounded items-center justify-between mt-5 ml-2">
            High
          </h3>
          <h4 className="text-sm">28 March 2025</h4>
        </div>
        <h2 className="mt-6 text-xl font-semibold">
          Make a content for Instagram
        </h2>
        <p className="text-sm mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
          dignissimos laborum facilis assumenda deleniti dolores.
        </p>
        
      </div>
      
      <div className="flex-shrink-0 h-full w-[300px] bg-[#aa998f] rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-[#7d4f50] text-sm px-3 py-1 rounded items-center justify-between mt-5 ml-2">
            High
          </h3>
          <h4 className="text-sm">28 March 2025</h4>
        </div>
        <h2 className="mt-6 text-xl font-semibold">
          Make a content for Instagram
        </h2>
        <p className="text-sm mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
          dignissimos laborum facilis assumenda deleniti dolores.
        </p>
      </div>
      <div className="flex-shrink-0 h-full w-[300px] bg-[#aa998f] rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-[#7d4f50] text-sm px-3 py-1 rounded items-center justify-between mt-5 ml-2">
            High
          </h3>
          <h4 className="text-sm">28 March 2025</h4>
        </div>
        <h2 className="mt-6 text-xl font-semibold">
          Make a content for Instagram
        </h2>
        <p className="text-sm mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
          dignissimos laborum facilis assumenda deleniti dolores.
        </p>
        
      </div>
      <div className="flex-shrink-0 h-full w-[300px] bg-[#aa998f] rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-[#7d4f50] text-sm px-3 py-1 rounded items-center justify-between mt-5 ml-2">
            High
          </h3>
          <h4 className="text-sm">28 March 2025</h4>
        </div>
        <h2 className="mt-6 text-xl font-semibold">
          Make a content for Instagram
        </h2>
        <p className="text-sm mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
          dignissimos laborum facilis assumenda deleniti dolores.
        </p>
        
      </div>
      <div className="flex-shrink-0 h-full w-[300px] bg-[#aa998f] rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-[#7d4f50] text-sm px-3 py-1 rounded items-center justify-between mt-5 ml-2">
            High
          </h3>
          <h4 className="text-sm">28 March 2025</h4>
        </div>
        <h2 className="mt-6 text-xl font-semibold">
          Make a content for Instagram
        </h2>
        <p className="text-sm mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
          dignissimos laborum facilis assumenda deleniti dolores.
        </p>
        
      </div>
      
      
      
      

    </div>
  );
};

export default TaskList;

import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div>
      <div className="flex-shrink-0 h-full w-[300px] bg-[#aa998f] rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-[#7d4f50] text-sm px-3 py-1 rounded items-center justify-between mt-5 ml-2">
            {data.category}
          </h3>
          <h4 className="text-sm">{data.date}</h4>
        </div>
        <h2 className="mt-6 text-xl font-semibold">
          {data.title}
        </h2>
        <p className="text-sm mt-3">
         {data.description}
        </p>
        <div className="mt-2">
            <button className='w-full bg-red-400 text-black'>Failed Task</button>
        </div>
      </div>
    </div>
  )
}

export default FailedTask

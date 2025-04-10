import React from 'react'

const AcceptTask = ({data}) => {
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
        <div className="flex justify-between mt-5">
        <button className='bg-purple-400 py-1 px-2 text-sm'>Mark as completed</button>
        <button className='bg-red-500 py-1 px-2 text-sm'>Mark as failed</button>
      </div>
      </div>
      
      
    </div>
  )
}

export default AcceptTask

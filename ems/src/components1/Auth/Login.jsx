import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const[email,setEmail] =useState('')
    const[Password,setPassword] =useState('')

    const submitHandler =(e)=>{
        e.preventDefault()
        handleLogin(email , Password)
        console.log("email is:", email)
        console.log ("password is:",Password)

        setEmail('')
        setPassword('')
    }
    
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 bg border-blue-700 rounded-xl '>
            <form className=' mt-6 flex flex-col items-center justify-center' onSubmit={(e)=>{
                 submitHandler(e)}}>
                 
                 <input value={email}
                 onChange={(e)=>{
                    setEmail(e.target.value)
                 }}
                   required className='mt-6 border-amber-700  rounded-full text-xl px-4 py-3 text-black placeholder:text-gray-700'  type='Email' placeholder='Type your Email'
                   />
                 <input
                 value={Password}
                 onChange={(e)=>{
                    setPassword(e.target.value)
                 }}
                  required className='mt-6 border-amber-700   rounded-full text-xl px-4 py-3 text-black placeholder:text-gray-700'  type='Password' placeholder='Type Password'
                  />
                 <button className='mt-6 bg-amber-500   rounded-2xl  text-xl px-5  py-3 text-black placeholder:text-gray-700' >Login here</button>
            </form>

        </div>
      
    </div>
  )
}

export default Login

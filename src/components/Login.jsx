import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex justify-center mt-5'>
      <form className='w-full max-w-md bg-white shadow-lg rounded-xl border p-6' action="">
        <h1 className='flex justify-center font-bold py-4 text-2xl'>Login Form</h1>
        <label className='font-semibold' htmlFor="username">Username</label>
        <input type="text" id="username" name="username" className='w-full border rounded-lg px-3 py-2 mt-1 mb-4 focus:outline-none  focus:ring-blue-300' />
        <label className='font-semibold' htmlFor="password">Password</label>
        <input type="text" id="password" name="password" className='w-full border rounded-lg px-3 py-2 mt-1 mb-4 focus:outline-none  focus:ring-blue-300' />
        <div>
          <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition w-full mt-4'>Login</button>
          <Link to="/register" className='text-blue-500 hover:underline block text-center mt-4'>Don't have an account? Register</Link>
        </div>
      </form>
    </div>
  )
}

export default Login

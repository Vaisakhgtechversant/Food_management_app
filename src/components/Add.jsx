import { React, useState, useEffect } from 'react'
import './Add.css'
import uuid from 'react-uuid'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Add = () => {
  const [id, setId] = useState('')
  const [fname, setFname] = useState('')
  const [price, setPrice] = useState(0)
  const [available, setAvailable] = useState('')

  useEffect(() => {
    setId(uuid().slice(0, 3));
  }, [])
  let location = useNavigate()

  const addFood = async (e) => {
    e.preventDefault()
    setId(uuid().slice(0, 3));
    const body = {
      id, fname, price, available
    }
    const result = await axios.post('http://localhost:8000/api/addData', body)
    alert(result.data.message)
    location('/')
  }


  return (
    <div className="flex justify-center mt-5">
      <form className='w-full max-w-md bg-white shadow-lg rounded-xl p-6 border' action="">
        <label className='font-semibold' htmlFor="">Food Name</label><br />
        <input className='w-full border rounded-lg px-3 py-2 mt-1 mb-4 focus:outline-none  focus:ring-blue-300' onChange={(e) => setFname(e.target.value)} type="text" /><br />

        <label className='font-semibold' htmlFor="">Price</label><br />
        <input className='w-full border rounded-lg px-3 py-2 mt-1 mb-4 focus:outline-none  focus:ring-blue-300' onChange={(e) => setPrice(e.target.value)} type="text" /><br />

        <label className='font-semibold' htmlFor="">available</label><br />
        <input className='w-full border rounded-lg px-3 py-2 mt-1 mb-4 focus:outline-none  focus:ring-blue-300' onChange={(e) => setAvailable(e.target.value)} type="text" /><br />
        <div className="flex justify-between mt-6">
        <Link to={'/'}>
          <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition' onClick={(e) => addFood(e)}>Add</button>
        </Link>
        <Link to={'/'}>
          <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition' >Cancel</button>
        </Link>
        </div>
      </form>


    </div>
  )
}

export default Add
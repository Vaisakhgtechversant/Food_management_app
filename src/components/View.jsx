import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const View = () => {
    const [id, setId] = useState('')
    const [fname, setFname] = useState('')
    const [price, setPrice] = useState(0)
    const [available, setAvailable] = useState('')
      const params = useParams()
    
const fetchData=async()=>{
    const result = await axios.get(`http://localhost:8000/api/singleData/${params.id}`)
    setId(result.data.data.id)
    setFname(result.data.data.fname)
    setPrice(result.data.data.price)
    setAvailable(result.data.data.available)
    
}
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="flex justify-center mt-5">
      <form className='w-full max-w-md bg-white shadow-lg rounded-xl p-6 border' action="">
              <h2 className="text-2xl font-bold mb-6 text-center">View Food Details</h2>

        <label className='font-semibold' htmlFor="">Food Name</label><br />
        <input className='w-full border rounded-lg px-3 py-2 mt-1 mb-4 focus:outline-none  focus:ring-blue-300' type="text" onChange={(e) => setFname(e.target.value)} value={fname} /><br />

        <label className='font-semibold'htmlFor="">Price</label><br />
        <input className='w-full border rounded-lg px-3 py-2 mt-1 mb-4 focus:outline-none  focus:ring-blue-300' type="text" onChange={(e) => setPrice(e.target.value)} value={price} /><br />

        <label className='font-semibold' htmlFor="">available</label><br />
        <input className='w-full border rounded-lg px-3 py-2 mt-1 mb-4 focus:outline-none  focus:ring-blue-300' type="text" onChange={(e) => setAvailable(e.target.value)} value={available} /><br />
        <div className="flex justify-center mt-6">

        <Link to={'/'}>
          <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition'>Back</button>
        </Link>
        </div>
        
      </form>


    </div>
  )
}

export default View
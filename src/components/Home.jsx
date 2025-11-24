import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Home.css'
import { useNavigate, Link } from 'react-router-dom'
const Home = () => {
  const [allfoods, setallfoods] = useState([])

  const fetchData = async () => {
    const result = await axios.get('http://localhost:8000/api/getallfood')
    setallfoods(result.data);
  }
  console.log(allfoods);
  const handleDelete = async (id) => {
    console.log(id);

    await axios.delete(`http://localhost:8000/api/deleteData/${id}`)
    fetchData();
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="text-3xl font-bold mb-5">Food App</h1>

      <div className="w-full flex justify-center">
        <table className="border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-500 px-4 py-2">#</th>
              <th className="border border-gray-500 px-4">fname</th>
              <th className="border border-gray-500 px-4">price</th>
              <th className="border border-gray-500 px-4">available</th>
            </tr>
          </thead>
          <tbody>
            {allfoods?.map((item, index) => (
              <tr key={item.id} className="bg-gray-100">
                <td className="border px-2">{index + 1}</td>
                <td className="border px-2">{item.fname}</td>
                <td className="border px-2">{item.price}</td>
                <td className="border px-2">{item.available}</td>

                <td className="border px-2">
                  <Link to={`edit/${item.id}`}>
                    <button className="mr-2 text-blue-500">Edit</button>
                  </Link>
                  <Link to={`view/${item.id}`}>
                    <button className="mr-2 text-green-500">View</button>
                  </Link>
                  <button
                    className="text-red-500"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
      <Link to={'/add'}>
        <button className="mt-5 bg-blue-500 text-white px-4 py-2 rounded">
          Add Food</button>
      </Link>
    </div>
  )
}

export default Home
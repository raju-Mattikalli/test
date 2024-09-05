import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import {updateUser } from './UserReducer';

function Update() {
    const {id} = useParams();
    const users = useSelector((state) => state.users)
    const existingUser = users.filter(f => f.id == id);

    const{name , email} = existingUser[0];
    const[uname , setName] = useState(name);
    const [uemail , setEmail] = useState(email)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateUser({
            id : id ,
            name : uname ,
            email : uemail,
        }))

        navigate('/')
    }
  return (
    <div className="flex w-full h-screen justify-center items-center">
    <div className="w-1/2 border bg-gray-700 text-white p-5">
    <h3 className='font-bold'>Update User</h3>
      <form onSubmit={handleUpdate}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Name:</label>
          <input
            type="text"
            name="name"
            className="w-full p-2 border rounded  text-black "
          value={uname}
          onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 ">Email:</label>
          <input
            type="email"
            name="email"
            className="w-full p-2 border rounded  text-black"
          value={uemail}
          onChange={e => setEmail(e.target.value)}
          />
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">
         Update
        </button>
      </form>
    </div>
  </div>
  )
}

export default Update
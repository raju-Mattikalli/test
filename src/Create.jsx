import React, { useState } from 'react'
import { addUser } from './UserReducer';
import { useDispatch } from 'react-redux';
import {useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux';

function Create() {
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addUser({id : users[users.length-1].id +1 , name , email}))
        navigate('/')
    }
    return (
      <div className="flex w-full h-screen justify-center items-center">
        <div className="w-1/2 border bg-gray-700 text-white p-5">
        <h3 className='font-bold'>Add New User</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">Name:</label>
              <input
                type="text"
                name="name"
                className="w-full p-2 border rounded"
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email:</label>
              <input
                type="email"
                name="email"
                className="w-full p-2 border rounded"
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
  

export default Create
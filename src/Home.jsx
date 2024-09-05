import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Home() {
    const users = useSelector((state) => state.users)
    console.log(users)
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4">CRUD App with JSON Server</h2>
            <Link to="/create" className="bg-green-500 text-white py-2 px-4 rounded mb-3">
                Create +
            </Link>
            <table className="min-w-full bg-white">
                <thead className="bg-gray-200 text-gray-600">
                    <tr>
                        <th className="py-2 px-4">ID</th>
                        <th className="py-2 px-4">Name</th>
                        <th className="py-2 px-4">Email</th>
                        <th className="py-2 px-4">Action</th>
                    </tr>
                </thead>
                <tbody>
                 {users.map((user , index) => (
                    <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td><Link to={`/edit/${user.id}`} className='bg-blue-500 text-white py-2 px-4 rounded'>Edit</Link>
                        <button className='bg-red-500 text-white py-2 px-4 rounded'>Delete</button>
                        </td>

                    </tr>
                 ))}
                </tbody>
            </table>
        </div>
    );
}

export default Home
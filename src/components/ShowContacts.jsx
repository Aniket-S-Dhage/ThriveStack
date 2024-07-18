import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const ShowContacts = () => {

    const [contacts, setContacts] = useState([])

    const [filterContact, setFilterContact] = useState([])

    const getData = async ()=> {
        const response = await axios.get("http://localhost:8700/contacts")

        console.log(response)
        setContacts(response.data)
        setFilterContact(response.data)

    }

    useEffect(()=>{
        getData()
    },[])

    const nav = useNavigate()

    const deleteContact = async (id) => {
        await axios.delete(`http://localhost:8700/contacts/${id}`)

        alert("Data Deleted")

        getData()

        nav('/show')
    }

    const [search, setSearch] = useState('')

    const makeSearch = (e) => {
        setSearch(e)
        // console.log(search)
    }

    const handleSearch = () => {

        const searchedContacts = (s) => {
            return ( s.name.toLowerCase().includes( search.toLowerCase() )   ||
            s.email.toLowerCase().includes( search.toLowerCase() ) ||
            s.address.toLowerCase().includes( search.toLowerCase() )  )
        }

        const l = contacts.filter(searchedContacts)

        setFilterContact(l)

    }

    return (
        <div className='container-fluid w-75 mx-auto m-5 p-3'>

            <input value={search} onChange={(e)=>{makeSearch(e.target.value)}}/>
            <button onClick={handleSearch}>Search</button>

            <table className='table table-info'>
                <thead>
                    <tr>
                        <td>Sr no.</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone_number</td>
                        <td>Address</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        filterContact.map((con, index)=>(
                            <tr key={con.id} className='table-primary'>
                                <td>{index + 1}</td>
                                <td>{con.name}</td>
                                <td>{con.email}</td>
                                <td>{con.phone_number}</td>
                                <td>{con.address}</td>
                                <td>
                                    <NavLink to={`/update/${con.id}`}><button className='btn btn-warning me-4'>Update</button></NavLink>
                                    <NavLink to={`/show/`}><button className='btn btn-danger' onClick={()=>{deleteContact(con.id)}}>Delete</button></NavLink>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ShowContacts
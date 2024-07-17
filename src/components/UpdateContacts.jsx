import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateContacts = () => {

    const {register, handleSubmit, setValue} = useForm()

    const nav = useNavigate()

    const {contactID} = useParams()

    const getData = async () =>{

        const response = await axios.get(`http://localhost:8700/contacts/${contactID}`)

        setValue('name', response.data.name)
        setValue('email', response.data.email)
        setValue('phone_number', response.data.phone_number)
        setValue('address', response.data.address)
    }

    useEffect(()=>{
        getData()
    },[])


    const saveData = async (data) => {

        await axios.put(`http://localhost:8700/contacts/${contactID}`, data)

        alert("Contact updated")

        nav('/show')

    }





    return (
        <div>
            <section className="vh-100">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{borderRadius: 25}}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add Contact</p>

                                            <form className="mx-1 mx-md-4" onSubmit={handleSubmit(saveData)}>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example1c" className="form-control" {...register('name')}/>
                                                        <label className="form-label" for="form3Example1c">Name</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                        <input type="email" id="form3Example3c" className="form-control" {...register('email')}/>
                                                        <label className="form-label" for="form3Example3c">Your Email</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                        <input type="number" id="form3Example4c" className="form-control" {...register('phone_number')}/>
                                                        <label className="form-label" for="form3Example4c">Phone Number</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example4c" className="form-control" {...register('address')}/>
                                                        <label className="form-label" for="form3Example4c">Address</label>
                                                    </div>
                                                </div>

                                                

                                                

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg">Register</button>
                                                </div>

                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default UpdateContacts
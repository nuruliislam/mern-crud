import axios from 'axios'
import React, { useState } from 'react'

export default function NewEmployeeScreen(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')

    const submitHandler = (e) =>{
        e.preventDefault();

        const newEmployee = {
            name: name,
            email: email,
            address: address
        }

        const fetchData = async() => {
            try{
                const { data } = await axios.post('/api/employees/add/',newEmployee)
                // console.log(data);
            }catch(error)
            {
                // console.log(error)
            }
        }

        fetchData();

        props.history.push('/');

    }


    return (
        <section className="registration">
            <div className="container">
                <div className="row text-center">
                    <h1> Content </h1>
                </div>

                <div className="row text-center">
                    <form onSubmit= { submitHandler } >
                        <div className="formGroup">
                            <label htmlFor="name"> Name </label>
                            <input type="text" id="name" placeholder="Name" 
                            required onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className="formGroup">
                            <label htmlFor="name"> Email </label>
                            <input type="email" id="email" placeholder="Email"
                            required onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="formGroup">
                            <label htmlFor="name"> Address </label>
                            <input type="text" id="address" placeholder="Address"
                            required onChange={(e) => setAddress(e.target.value)}/>
                        </div>

                        <input type="Submit" className="btn btn-submit" defaultValue="Submit"/>
                    </form>
                </div>
            </div>
        </section>
    )
}

import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function EmployeeEditScreen(props) {

    const userId = props.match.params.id;
    // console.log(props);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    useEffect(() => {
        const fetchData= async () => {
            try{
                const { data } = await axios.get(`/api/employees/${userId}`)
                // console.log(data);
                setName(data.name);
                setEmail(data.email);
                setAddress(data.address);

            }catch(error){
                console.log(error.message)
            }};
        fetchData();
    }, [userId])

    const submitHandler = async(e) => {
        e.preventDefault();

        const newEmployee = {
            name: name,
            email: email,
            address: address,
            _id: userId,
        }

        const fetchData = async() => {
            try{
                console.log({userId});
                const { data } = await axios.put(`/api/employees/${userId}`,newEmployee)
                console.log(data);
            }catch(error)
            {
                console.log(error)
            }
        }

        fetchData();

        props.history.push('/');

      };

    return (
        <div>
            <section className="registration">
            <div className="container">
                <div className="row text-center">
                    <h1> Content </h1>
                </div>

                <div className="row text-center">
                    <form onSubmit={submitHandler}>
                        <div className="formGroup">
                            <label htmlFor="name"> Name </label>
                            <input type="text" id="name" value={name} placeholder="Name"
                            required onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className="formGroup">
                            <label htmlFor="name"> Email </label>
                            <input type="email" id="email" value={email} placeholder="Email"
                            required onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="formGroup">
                            <label htmlFor="name"> Address </label>
                            <input type="text" id="address" value={address} placeholder="Address"
                            required onChange={(e) => setAddress(e.target.value)} />
                        </div>

                        <input type="Submit" className="btn btn-submit" defaultValue="Submit"/>
                    </form>
                </div>
            </div>
        </section>
        </div>
    )
}

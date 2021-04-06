import React, { useEffect, useState } from 'react'
import axios from 'axios';


export default function HomeScreen(props) {
    // console.log(props)
    // console.log('object');
    const [employee, setEmployee] = useState([]);
    

    useEffect(() => {
        const fetchData= async () => {
            try{
                const { data } = await axios.get('/api/employees/')
                // console.log(data)
                setEmployee(data)
            }catch(error){
                console.log(error.message)
            }


        
        };
        fetchData();
    }, [props.history, employee])

    const deleteHandler = async(employee) =>{
        if(window.confirm('Are You sure To Delete ? ')){
            const { data } = await axios.delete(`/api/employees/${employee._id}`);
            // console.log(message);
            console.log(data);
           

        }
    }
    return (
        <section className="table-section">
            <div className="container">

                <div className="row text-center">
                    <h1> Content </h1>
                </div>

                <div className="row over-x">
                    <table className="table">
                        <thead>
                            <tr>
                                <th> First Name </th>
                                <th>  Email </th>
                                <th> Addresss </th>
                                <th> Action </th>
        

                            </tr>
                        </thead>
                           
                        <tbody>
                        {
                            employee.map((empl) => (
                                <tr key={empl._id}> 
                                    <td> { empl.name }</td>
                                    <td> { empl.email }</td>
                                    <td> { empl.address }</td>
                                    <td>
                                        <button type="button" 
                                        className="btn"
                                        onClick={()=> deleteHandler(empl)}>
                                            Delete
                                        </button>

                                        <button type="button" 
                                        className="btn"
                                        onClick={()=> props.history.push(`/employee/${empl._id}/edit`)}>
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                        
                    
                    </table>
                </div>

            </div>
    </section>
    );
}

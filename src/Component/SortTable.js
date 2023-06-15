import React, { useState, useEffect } from "react";
import axios from "axios";
import "./tabela.css"
import Page2 from "./Page2";
import { useNavigate } from "react-router-dom";


function SortTable() {
    const [data, setData] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then((result) => {
                const data = [];
                console.table(result)
                result.data.forEach(user => {
                    data.push(user)
                })
                setData(data)
            })
    }, []);



    return (
        <div className="container">
            <table className="table">
                <thead>
                    <th>NR</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>E-mail</th>
                </thead>
                <tbody>
                    {data.map((user) => (
                        <tr className="row-test" key={user.id}>
                            
                            <td onClick={() => navigate(`/${user.id}`)}>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>


        </div>
    )
}

export default SortTable 
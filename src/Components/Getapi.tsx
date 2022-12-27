import React, { useEffect, useState } from 'react'
import { Outlet, UNSAFE_DataRouterStateContext } from 'react-router-dom';
import { Table } from 'react-bootstrap';




const Getapi = () => {
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        var requestOptions: any = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://localhost:7004/Account/GetUsers", requestOptions)
            .then(response => response.json())
            .then((result: any) => {
                setData(result);

            })
            .catch(error => console.log('error', error));
    }, [])



    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-2 '></div>
                    <div className='col-10'>
                        <h1> Get Api Call</h1>
                        <Table border={2} hover>
                            <tbody>

                                <tr>
                                    <th>S.N</th>
                                    <th>FirstName</th>
                                    <th>LastName</th>
                                    <th>Email</th>

                                </tr>
                                {

                                    data.map((item: any, i: any) => {

                                        return (

                                            <tr key={i}>
                                                <td>{i}</td>
                                                <td>{item.firstName}</td>
                                                <td>{item.lastName}</td>
                                                <td>{item.email}</td>



                                            </tr>
                                        )
                                    }

                                    )
                                }

                            </tbody>




                        </Table>
                    </div></div></div>
            <Outlet />
        </>
    )
}

export default Getapi

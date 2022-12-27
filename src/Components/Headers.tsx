import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import "./Header.css"

function Headers() {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate("/Login")

    }
    return (
        <>
            <nav className="navbar  bg-dark topnav-right">

                <div className="">
                    <div className="d-flex justify-content-center mx-4 ">
                        <button type="button" className="btn btn-light btn-lg" onClick={handleLogout}>logout</button>
                    </div>

                </div>
            </nav>

            <Outlet />

        </>
    )
}

export default Headers

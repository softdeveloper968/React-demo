import React from 'react'
import { Outlet } from 'react-router-dom'
import "./Loginheader.css"
import { useNavigate } from 'react-router-dom';

function Loginheader() {
    const navigate = useNavigate();
    const login = () => {
        navigate("/Login")
    }
    const signup = () => {
        navigate("/SignUp")
    }

    return (
        <>
            <nav className="navbar sticky-top  bg-dark " id='id'>
                <div>
                    <button type="button" className="btn btn-light btn-lg mx-2" onClick={signup}>SignUp</button>
                    <button type="button" className="btn btn-light btn-lg" onClick={login}>login</button>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Loginheader

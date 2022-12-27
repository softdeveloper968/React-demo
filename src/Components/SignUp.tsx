import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function SignUp() {

    const navigate = useNavigate();
    const [firstName, setfirstame] = useState("");
    const [lastName, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    function saveUser() {

        var myHeaders = new Headers();
        myHeaders.append("accept", "*/*");
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": password
        });

        var requestOptions: any = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://localhost:7004/Account/UserRegister", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }
    return (
        <>
            <div>
                <section className="vh-100" style={{ backgroundColor: "#eee" }}>
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-lg-12 col-xl-11">
                                <div className="card text-black" style={{ borderRadius: "25px" }}>
                                    <div className="card-body p-md-5">
                                        <div className="row justify-content-center">
                                            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>


                                                <form className="mx-1 mx-md-4">

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input type="text" id="form3Example1c" className="form-control" value={firstName} onChange={(e) => { setfirstame(e.target.value) }} name="firstname" />
                                                            <label className="form-label" >Your Name</label>
                                                        </div>
                                                    </div>

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input type="text" id="form3Example3c" className="form-control" value={lastName} onChange={(e) => { setlastname(e.target.value) }} name="lastname" />
                                                            <label className="form-label" >Last Name</label>
                                                        </div>
                                                    </div>

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input type="email" id="form3Example4c" className="form-control" value={email} onChange={(e) => { setemail(e.target.value) }} name="email" />
                                                            <label className="form-label" >Email</label>
                                                        </div>
                                                    </div>

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input type="password" id="form3Example4cd" className="form-control" value={password} onChange={(e) => { setpassword(e.target.value) }} name="password" />
                                                            <label className="form-label" >Password</label>
                                                        </div>
                                                    </div>


                                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                        <button type="button" className="btn btn-primary btn-lg" onClick={saveUser} >Register</button>
                                                    </div>

                                                </form>

                                            </div>
                                            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                                    className="img-fluid" alt="Sample image" />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Outlet />
        </>
    )
}

export default SignUp

import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");


    function login() {

        var myHeaders = new Headers();
        myHeaders.append("accept", "*/*");
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({

            "email": email,
            "password": password
        });

        var requestOptions: any = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://localhost:7004/Account/UserLogin", requestOptions)

            .then(response => response.json())
            .then((result) => {
                if (result.status == 200) {
                    console.log('result :>> ', result);
                    alert("Login")
                    navigate("/Sidebar")
                    localStorage.setItem("token", result.tokenString)
                } else {
                    navigate("/SignUp")
                    alert("invalid user")
                }
            })
            .catch(error => console.log('error', error));

    }



    return (
        <>
            <div><br /><br /><br />

                <section className="vh-100">
                    <div className="container-fluid h-custom">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-md-9 col-lg-6 col-xl-5">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                    className="img-fluid" alt="Sample image" />
                            </div>
                            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                                <form>
                                    <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">

                                        <p className="text-center h1 fw-bold mb-5 mt-4">Login</p>
                                    </div>


                                    {/* <!-- Email input --> */}
                                    <div className="form-outline mb-4">
                                        <input type="email" id="form3Example3" className="form-control form-control-lg" value={email} onChange={(e) => { setemail(e.target.value) }} name="email"
                                            placeholder="Enter a valid email address" />
                                        <label className="form-label" >Email address</label>
                                    </div>

                                    {/* <!-- Password input --> */}
                                    <div className="form-outline mb-3">
                                        <input type="password" id="form3Example4" className="form-control form-control-lg" value={password} onChange={(e) => { setpassword(e.target.value) }} name="password"
                                            placeholder="Enter password" />

                                        <label className="form-label">Password</label>
                                    </div>

                                    <div className="text-center text-lg-start mt-4 pt-2">
                                        <button type="button" className="btn btn-primary btn-lg"
                                            style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }} onClick={login} >Login</button>
                                        <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account?   < Link to="/SignUp" > Register</Link ></p>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
            <Outlet />

        </>
    )
}

export default Login

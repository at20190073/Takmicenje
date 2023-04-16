import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


    const Login=({addToken})=>{
        const[userData, setUserData]= useState({
            email: " ",
            password: " ",
        })
        let navigate= useNavigate();
        function handleInput(e){
            //console.log(e);
            let newUserData= userData;
            newUserData[e.target.name]= e.target.value;
            //console.log(newUserData);
            setUserData(newUserData);
        }
        function handleLogin(e){
            e.preventDefault();
            axios
            .post("http://127.0.0.1:8000/api/login", userData)
            .then((res)=>{
                console.log(res.data);
                if(res.data.success === true){
                    window.sessionStorage.setItem("auth_token", res.data.access_token);
                    addToken(res.data.access_token);
                    navigate("/");
                }
            })
            .catch((e)=>{
                console.log(e);
            });
        }
        
        return(
            <section
            className="vh-100"
            style={{paddingTop:4.5 + "rem",}}
            >
                <div className="conteiner-fluid h-custom">
                    <div className="row d-flex justify-content-centar align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img
                           src="https://media.istockphoto.com/id/466175630/photo/tomato-isolated-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=zloJA_rdhqA7aJ9O0mDDaBQOzOei3SlW2RCwvH4CxOA="
                            className="img-fluid"
                            style={{ width: "200px", height: "auto" }}
                            alt="Sample image"
                            />
                            </div> 
                            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                                <form onSubmit={handleLogin}>
                                <div className="form-outline mb-4">
                                    <input
                                    type="email"
                                    id="form3Exemple3"
                                    className="form-control form-control-lg"
                                    
                                    name="email"
                                    onInput={(e)=>handleInput(e)}
                                    />
                                    <label className="form-label" htmlFor="form3Exemple3">
                                        Email address
                                    </label>
                                    </div>
                                    <div className="form-outline mb-3">
                                    <input
                                    type="password"
                                    id="form3Exemple4"
                                    className="form-control form-control-lg"
                                   
                                    name="password"
                                    onInput={(e)=>handleInput(e)}
                                    />
                                    <label className="form-label" htmlFor="form3Exemple4">
                                        Password
                                    </label>
                                    </div>

                                    <div className="text-center text-ig-start mt-4 pt-2">
                                    <button
                                    type="submit"
                                
                                    className="btn btn-primary btn-lg"
                                    style={{
                                        paddingLeft: 2.5 + "rem",
                                        paddingRight: 2.5 + "rem",
                                    }}
                                    >
                                    Log in
                                    </button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">
                                        Don't have an account? {" "}
                                        <a href="/register" className="link-danker">
                                            Register
                                        </a>
                                    </p>
                                </div>
                                </form>
                            </div>

                        </div>
                  </div>
            </section>        
            
        );
    }

    export default Login;
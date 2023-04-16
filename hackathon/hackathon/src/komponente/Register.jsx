import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


    const Register=()=>{
        
        const [userData, setUserData]=useState({
            first_name:"",
            last_name:"",
            addres:"",
            telephone:"",
            email:"",
            password:""
        })
        let navigate=useNavigate();
        function handleInput(e){
            //console.log(e);
            let newUserData= userData;
            newUserData[e.target.name]= e.target.value;
            //console.log(newUserData);
            setUserData(newUserData);
        }

        function handleRegister(e){
            e.preventDefault();
       
            axios.post('http://127.0.0.1:8000/api/register', userData).then((res)=>{
               console.log(res.data);
               navigate("/login");
            })
            .catch((e)=>{
                console.log(e);
            })
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
                           src="https://www.organiccentar.rs/media/images/articles/Rotkvice.jpg"
                            className="img-fluid"
                            style={{ width: "225px", height: "auto" }}
                            alt="Sample image"
                            />
                            </div> 
                            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                                <form onSubmit={handleRegister}>
                                <div className="form-outline mb-1">
                                    <input
                                    type="first_name"
                                    id="form3Exemple1"
                                    className="form-control form-control-lg"
                                    
                                    name="first_name"
                                    onInput={(e)=>handleInput(e)}
                                    />
                                    <label className="form-label" htmlFor="form3Exemple1">
                                        First name
                                    </label>
                                    </div>
                                    <div className="form-outline mb-2">
                                    <input
                                    type="last_name"
                                    id="form3Exemple2"
                                    className="form-control form-control-lg"
                                    
                                    name="last_name"
                                    onInput={(e)=>handleInput(e)}
                                    />
                                    <label className="form-label" htmlFor="form3Exemple2">
                                        Last name
                                    </label>
                                    </div>
                                    <div className="form-outline mb-5">
                                    <input
                                    type="addres"
                                    id="form3Exemple5"
                                    className="form-control form-control-lg"
                                    
                                    name="addres"
                                    onInput={(e)=>handleInput(e)}
                                    />
                                    <label className="form-label" htmlFor="form3Exemple5">
                                        Address
                                    </label>
                                    </div>
                                    <div className="form-outline mb-6">
                                    <input
                                    type="telephone"
                                    id="form3Exemple6"
                                    className="form-control form-control-lg"
                                    
                                    name="telephone"
                                    onInput={(e)=>handleInput(e)}
                                    />
                                    <label className="form-label" htmlFor="form3Exemple6">
                                        Telephone
                                    </label>
                                    </div>
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
                                    Register
                                    </button>
                                   
                                </div>
                                </form>
                            </div>

                        </div>
                  </div>
            </section>        
            
        );
    }

    export default Register;
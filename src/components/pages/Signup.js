import React,{useState} from "react";
import {Link} from "react-router-dom"
import { toast } from "react-toastify";
import connection from "../services/connection";


  
  const Signup = () =>{

    const [user,setUser] = useState({
        id:"",username:"",name:"",email:"",password:"",phone:"",cpassword:""
    });

    let name, value;
    const handleInputs= (event)=>{
        console.log(event);
        name = event.target.name;
        value = event.target.value;

        setUser({...user,[name]:value});
    } 

  
  return (
    <>
    <div>
      <section className="section">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 ">
                  <h4>Join Practo</h4>
                  <label className="mb-1">Are you a Doctor? </label>
                  <Link to="/register">Register Here</Link>
                 
              <div><Link to="/login">Login</Link></div>
                  <hr />
                  <div className="form-group">
                    <label className="mb-1">Id</label>
                    <input
                      type="number"
                      className="form-control"
                      name="id" id="id" 
                      autoComplete="off"
                       value={user.id} 
                       onChange={handleInputs}  
                       placeholder="Your Id"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label className="mb-1">User name</label>
                    <input
                      type="name"
                      className="form-control"
                      name="username" id="username" 
                      autoComplete="off"
                       value={user.username} 
                       onChange={handleInputs}  
                       placeholder="User name"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name" id="name" 
                      autoComplete="off"
                       value={user.name} 
                       onChange={handleInputs}  
                       placeholder="Your Name"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Mobile Number</label>
                    <input
                      type="number"
                      className="form-control"
                      name="phone" id="phone" 
                      autoComplete="off"
                       value={user.phone} 
                       onChange={handleInputs}  
                       placeholder="Your phone no."
                    ></input>
                  </div>
                  <div className="form-group">
                   <label className="mb-1">Email</label>
                   <input
                         type="email"
                         className="form-control"
                         name="email" id="email" 
                         autoComplete="off"
                          value={user.email} 
                          onChange={handleInputs}  
                          placeholder="Your Email"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Create Password</label>
                    <input
                       type="password"
                       className="form-control"
                       name="password" id="password" 
                       autoComplete="off"
                        value={user.password} 
                        onChange={handleInputs}  
                        placeholder="Your password "
                    ></input>
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Confirm Password</label>
                    <input
                       type="password"
                       className="form-control"
                       name="cpassword" id="cpassword" 
                       autoComplete="off"
                        value={user.cpassword} 
                        onChange={handleInputs}  
                        placeholder="Your Confirm Password "
                    ></input>
                  </div>
                  
                  <div className="form-group py-3">
                    <button
                      type="button"
                   className="btn btn-light w-50 "
                    >
                      SignUp
                    </button>
                  </div>
                </div>

                <div className="col-md-6 border-start">
                  <img src="https://img.freepik.com/free-vector/cartoon-character-filling-form-survey-checklist-man-writing-test-signing-business-medical-document-flat-illustration_74855-20483.jpg?w=740&t=st=1659980056~exp=1659980656~hmac=95288ee978ea14c3337ad522edc98dc1c7898e6e432fc6f9c9218a0d1a7729b2"  width={500} height={350} />
                </div>
                
                <div><p className="small mt-3">
                  By signing up, you are indicating that you have read and agree
                  to the Terms of Use and Privacy Policy.
                </p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export default Signup;
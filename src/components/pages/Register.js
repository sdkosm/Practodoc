import React,{useState} from "react";
import {Link} from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
// import { toast } from "react-toastify";
// import connection from "../services/connection";


 
  const Register = () =>{

    const [user,setUser] = useState({
        doctorname:"",experience:"",specialisation:"",price:"",password:"",phone:"",location:""
    });

    let name, value;
    const handleInputs= (event)=>{
        console.log(event);
        name = event.target.name;
        value = event.target.value;

        setUser({...user,[name]:value});
    
    } 
 
  return (
    <div>
      
      <section className="section">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 ">
                  <h4>Join 12500+ doctor</h4>
                  <label className="mb-1"> </label>
                  <Link to="/signup">Not a Doctor?</Link>
                  <hr/>
                 
              <div><Link to="/login">Login</Link></div>
                  <hr />
                  <div className="form-group">
                    <label className="mb-1">Doctor Name</label>
                    <input
                       type="name"
                       className="form-control"
                       name="doctorname" id="doctorname" 
                       autoComplete="off"
                        value={user.doctorname} 
                        onChange={handleInputs}  
                        placeholder="Your name"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Experience</label>
                    <input
                       type="number"
                       className="form-control"
                       name="experience" id="experience" 
                       autoComplete="off"
                        value={user.experience} 
                        onChange={handleInputs}  
                        placeholder="Your Experience"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Specialisation</label>
                    <input
                      type="text"
                      className="form-control"
                      name="specialisation" id="specialisation" 
                      autoComplete="off"
                       value={user.specialisation} 
                       onChange={handleInputs}  
                       placeholder="Specialised Feild"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Location</label>
                    <input
                     type="text"
                        className="form-control"
                        name="location" id="location" 
                        autoComplete="off"
                         value={user.location} 
                         onChange={handleInputs}  
                         placeholder="Your Location"
                    ></input>
                  </div>
                  <div className="form-group">
                   <label className="mb-1">Fees</label>
                   <input
                        type="number"
                        className="form-control"
                        name="price" id="price" 
                        autoComplete="off"
                         value={user.price} 
                         onChange={handleInputs}  
                         placeholder="Your Fees"
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
                         placeholder="Your Password"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Phone no.</label>
                    <input
                     type="phone"
                        className="form-control"
                        name="phone" id="phone" 
                        autoComplete="off"
                         value={user.phone} 
                         onChange={handleInputs}  
                         placeholder="Your Phone"
                    ></input>
                  </div>            
                  <div className="form-group py-3 ">
                    <button
                      type="button"
                      className="btn btn-light w-50 "
                    >
                     <Link to="/">SignUp</Link> 
                    </button>
                  </div>
                </div>

                <div className="col-md-6 border-start">
                  <img src="https://img.freepik.com/premium-vector/healthcare-workers-are-front-lines-public-health-system_1150-50284.jpg?w=740"  width={500} height={350} />
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </section>     
                  
    </div>
  );
}

export default Register;
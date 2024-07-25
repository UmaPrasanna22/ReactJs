import {useState } from "react";

function Register(){
    const [collegeIdValue,setCollegeId]=useState('');
    const [passwordValue,setPassword]=useState('');
    const [emailValue,setEmail]=useState('');
    const [branchValue,setBranch]=useState('');
    const [yearValue,setYear]=useState('');
    const [genderValue,setGender]=useState('');
    const [user,setUser]=useState('');
    const getCollegeId=(event)=>{
        setCollegeId(event.target.value)
        console.log(collegeIdValue);
   
    }
    const getPassword=(event)=>{
        setPassword(event.target.value)
        console.log(passwordValue);
   
    }
    const getEmail=(event)=>{
        setEmail(event.target.value)
        console.log(emailValue);
   
    }
    const getBranch=(event)=>{
        setBranch(event.target.value)
        console.log(branchValue);
   
    }
    const getYear=(event)=>{
        setYear(event.target.value)
        console.log(yearValue);
   
    }
    const getGender=(event)=>{
        console.log(event.target.value);
        setGender(event.target.value);
   
    }
    const submitData=(event)=>{
        event.preventDefault();
        const obj={
            collegeIdValue,passwordValue,emailValue,branchValue,genderValue
        }
        setUser(obj);
        console.log(obj);
        console.log(user);
    }
    return(
        <div className="container">
        <div className="card" style = {{width:'350px',padding:'20px'}}>
            <h1>Register</h1>
            <p>Provide your details to Login</p>
            <form  style={{display:'flex',flexDirection:'column'}}>
                <label>CollegeId</label>
                <input type="text" placeholder="Enter College id" onChange={getCollegeId}/>
                <label>Password</label>
                <input type="password" placeholder="Enter Password" onChange={getPassword}/>
                <label>Email Address</label>
                <input type="text" placeholder="Enter Email Adress" onChange={getEmail}/>
                <label>Branch</label>
                <select className="form-select" value={branchValue} onChange={getBranch}>
                  <option value ="">Select Your Branch</option>
                  <option value="CSE">CSE</option>
                   <option value="CS">CS</option>
                   <option value="IT">IT</option>
                   <option value="AIDS">AIDS</option>
                   <option value="AIML">AIML</option>
                  </select>
                  <label>Year</label>
                <select className="form-select" value={yearValue} onChange={getYear}>
                  <option value="">Select Year</option>
                    <option value="I">I</option>
                   <option value="II">II</option>
                   <option value="III">III</option>
                   <option value="IV">IV</option>
                  </select>
                  <div>
            <h5>Gender</h5>

            <input type="radio"  checked={genderValue=="Male"} value="Male" onChange={getGender} /> Male

            <input type="radio" checked={genderValue=="Female"} value="Female" onChange={getGender}/> Female
            </div>
                <button type="submit" className="btn btn-dark" style={{marginLeft:"20px"}} onClick={submitData}>Submit</button>
            </form>
        </div>
        </div>
    );
}
export default Register;
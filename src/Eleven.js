import { useRef,useState,useEffect } from "react";

function Login(){
    const inputValueChange = (event) => {
        console.log("Input changed");
        console.log(event.target.value);
    }

    const collegeIDRef = useRef(null);//reference
    const passwordRef = useRef(null);//reference
    const [loginMessage,setMessage]=useState('');


    const formSubmitted = (event) =>{
        event.preventDefault();//prevent reload
        if(collegeIDRef.current.value == passwordRef.current.value){
            setMessage("correct😁");
        }
        else{
            setMessage("Incorrect😡..Please try again😕");
        }
        //console.log("Form Submitted!");
        //console.log(firstRef.current.value);
        //firstRef.current.value='';//clear value
    }
    return(
        <div className="card" style = {{width:'350px'}}>
            <div className="card-body">
            <form onSubmit={formSubmitted} style={{display:'flex',flexDirection:'column'}}>
                <h1>Login</h1>
                <p>Provide your details to login</p>
                <h1>College Id</h1>
                <input type="text"  onChange={inputValueChange} ref={collegeIDRef}/>
                <h1>Password</h1>
                <input type="password" onChange={inputValueChange} ref={passwordRef}/>
                <button type="submit">Submit</button>
                <p>{loginMessage}</p>
            </form>
            </div>
        </div>
    );
}
export default Login;


            
            
            
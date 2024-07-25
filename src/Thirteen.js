import { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import Navigation from "./Navigation";

function Thirteen(){
    const [isLogin,setIsLogin]=useState(true);
    const showLogin=()=>{
        setIsLogin(true)
}
const showRegister=()=>{
    setIsLogin(false)
}
    return(
        <div>
            <Navigation/>
            <div>
            <button type="button" className="btn btn-dark" onClick={showLogin}>Login</button>
            <button type="button" className="btn btn-dark" onClick={showRegister}>Register</button>
            {isLogin?
            <Login/>
            :
            <Register/>
            }
            </div>
        </div>

    );
}
export default Thirteen;
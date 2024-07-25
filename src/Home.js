import { createContext, useState } from "react";
import { Link } from "react-router-dom";
import Thirteen from "./Thirteen";
export const usecontext1 = createContext();

function Home(){
    const [isLogin,setIsLogin]=useState(false);
   return(
    <usecontext1.Provider value={[isLogin,setIsLogin]}>
    <div>
        {
            isLogin ?
            <div><h1>Welcome to V commerce</h1>
            <Link to="/productList">View Products</Link></div>:<Thirteen/>
        }

    </div>
    </usecontext1.Provider>
   )
}
export default Home;
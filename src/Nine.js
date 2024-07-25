import {useEffect,useState} from "react";
function Nine(){
    //const count=0;
    const [count,setCount]=useState(1);
    useEffect(()=>{
        //setCount(5);
        console.log("Use effect is called")
    });
   //const btnUpdateCount=()=>{
    //setCount(count+2);
   //}
   const btnDecrement=()=>{
        if(count>0)
            setCount(count-1);
    }
   const btnIncrement=()=>{
        setCount(count+1);
   }
   const btnAddToCart = () =>{
        setCount(1)
   }
    return(
        <div>
            {(count==0)?
            <button className="btn btn-outline-dark btn-sm" onClick={btnAddToCart}>Add to Cart</button>
            :
            <div style = {{display:'flex'}}>
                <button type="button" className="btn btn-light" onClick={btnDecrement}>-</button>
                <h1>{count}</h1>
                <button type="button" className="btn btn-light" onClick={btnIncrement}>+</button>
            </div>
    }
    </div>
    );
}
export default Nine;
import { useEffect, useState } from "react";
function Nine2(){
    //const count=0;
    const [count, setCount]=useState(0);
    useEffect(()=>{
        //setCount(5);
        console.log("Use effect is called");
    },[count]);
    /*const btnUpdateCount=()=>{
        setCount(count+2);
    }*/
    const btnIncrementCount=()=>{
        setCount(count+1);
    }
    const btnDecrementCount=()=>{
        setCount(count-1);
    }
    

    return (
        count==0?<button type="button" class="btn btn-success" style={{margin: '30px'}} onClick={btnIncrementCount}>Add to Cart</button> :
             <div style={{display:'flex' , margin:'30px'}}>
            
            
            <button className="btn btn-dark" style={{margin:'5px'}} onClick={btnDecrementCount}>-</button>
            <h1> {count}</h1>
            <button className="btn btn-dark" style={{margin:'5px'}} onClick={btnIncrementCount}>+</button>
            
            
            
        </div>
    );
}
export default Nine2;
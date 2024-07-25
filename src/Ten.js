import { useState } from "react";
function Ten(){
    const [review,setReview] = useState('');
    const [reviewToDisplay,setDisplay] = useState('');

    const inputValueChange = (event) => {
        //console.log("Input Changed.");
        console.log(event.target.value);
        setReview(event.target.value);
    }
    const addReview = () =>{
        console.log("Adding review...");
        setDisplay(review);
    }

    return(
        <div>
            <h1>REVIEWS</h1>
            <input type = "text" placeholder="Enter a review" onChange={inputValueChange}/>
            <button className="btn btn-outline-dark btn-sm" onClick={addReview}>Add Review</button>
            <p>{reviewToDisplay}</p>
        </div>
    );
}
export default Ten;

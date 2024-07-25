import React, { useState } from 'react';

const Product = () => {
  const [reviews, setReviews] = useState([]);
  const [reviewInput, setReviewInput] = useState("");

  const handleAddReview = () => {
    setReviews([...reviews, reviewInput]);
    setReviewInput("");
  };

  return (
    <div>
      <h1>Product Name</h1>
      <div>
        <div>
          <img src= 'download.png'alt=" " style={{ width: '10%' }} />
        </div>
        <div className="col-md-8">
          <h2>Product Name</h2>
          <p>Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description</p>
          <h3>Rs500</h3>
          <button className="btn btn-success">Add to Cart</button>
        </div>
      </div>
      <h2 >Product Specification</h2>
      <p>Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description</p>
      <h2>Reviews</h2>
      <div>
        <input 
          type="text" 
          value={reviewInput}
          onChange={(e) => setReviewInput(e.target.value)} 
          placeholder="Enter Review" 
        />
        <button className="btn btn-primary mt-2" onClick={handleAddReview}>Add Review</button>
      </div>
      <div>
        {reviews.map((review, index) => (
          <div key={index}>
            <p>{review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
import React,{useState} from 'react'
import axiosInstance from '../axios';


function NotificationRating(props) {
  let id=props.match.params.id
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  
  const confirmer=e=>{
    e.preventDefault()
    console.log(rating)
  }
  return (
    <div className="container">
    {[...Array(5)].map((star, index) => {
      index += 1;

      return (
        <button
          type="button"
          id='btnrate'
          key={index}
          className={index <= (hover || rating) ? "on" : "off"}
          onClick={() => setRating(index)}
          onMouseEnter={() => setHover(index)}
          onMouseLeave={() => setHover(rating)}
        >
          <span className="star">&#9733;</span>
        </button>
       ); })}
        <span>({rating})</span>
    <p><button disabled={rating===0} className="w3-btn w3-round-xxlarge w3-red">confirmer la note</button></p>
  </div>
  )
}

export default NotificationRating

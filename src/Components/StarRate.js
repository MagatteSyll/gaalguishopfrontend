import React,{useState} from 'react';
import {IonIcon} from '@ionic/react'
import {starOutline,starHalfOutline} from 'ionicons/icons'
import { Rating,} from '@mui/material';
import {StarIcon } from '@mui/icons';

function StarRate() {
  const [rating, setRating] = useState(4.4);
  const [hover, setHover] = useState(0);

const rate=()=>{
  for (let i = 0; i<rating; i++) {
      if ( i>0 || i<1) {
        return <IonIcon icon={starHalfOutline}/>
         }
     return <IonIcon icon={starOutline} />
         
}
}

  return (
    <div className="star-rating">
   <Rating name="half-rating" 
   value={rating} 
   readOnly
   icon={<StarIcon className='on' fontSize="inherit" />}
   emptyIcon={<StarIcon className='on' fontSize="inherit" />}
   precision={0.1} />
    </div>
  );
}

export default StarRate;

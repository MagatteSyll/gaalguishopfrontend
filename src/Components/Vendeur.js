import React,{useState,useEffect,Fragment} from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {IonCard, IonCardSubtitle, IonCardTitle, IonImg, IonLoading, IonText} from '@ionic/react'
import axiosInstance from '../axios'
import StarRatings from '../../node_modules/react-star-ratings';
import { Card,} from  '../../node_modules/react-bootstrap'
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2.5,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.5,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
function Vendeur() {
    const  [vendeur, setvendeur] = useState([])
    const  [load, setload] = useState(false)
    const [showLoading, setShowLoading] = useState(true);

    useEffect(()=>{
        axiosInstance
        .get('produit/nosvendeur/')
        .then((res=>{
          //  console.log(res.data)
            setvendeur(res.data)
            setload(true)
        }))
    },[])

    return (
        <div className='container'>
         {load?
         <Fragment>
             {vendeur.length>0?
             <div  className='mb-4 mt-5'>
        <h5 style={{color:'blue',textAlign:'center'}}>Boutiques de nos meilleurs vendeurs </h5>
        
        <Carousel
        responsive={responsive}
        containerClass="carousel-container" 
        infinite={true}
        autoPlaySpeed={1000}
        transitionDuration={500}
        >
        {vendeur.map(v=>
        <Link to={`boutique/${v.slug}/`} style={{textDecoration:'none',color:'inherit'}} key={v.id}>
         <Image  src={`https://gaalguishop.herokuapp.com${v.logo}`} alt="" roundedCircle height='100' width='100'/>
          <StarRatings
            rating={v.note_vendeur}
            starRatedColor="magenta"
            // changeRating={noter}
            numberOfStars={5}
            name='rating'
            starDimension='20px'
            />  
        </Link> 
            )}
        </Carousel>
        </div>:null}
         </Fragment>:
         <IonLoading
          cssClass='my-custom-class'
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={'Chargement...'}
          duration={5000}
        />}   
        </div>
    )
}

export default Vendeur

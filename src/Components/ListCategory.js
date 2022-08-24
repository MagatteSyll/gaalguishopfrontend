import React,{useState,useEffect, Fragment} from 'react'
import { Link } from 'react-router-dom'
import { Card,} from  'react-bootstrap'
import axios from 'axios'
import {IonLoading} from '@ionic/react'
import Carousel from "react-multi-carousel";



const responsive = {
   desktop: {
     breakpoint: { max: 3000, min: 1024 },
     items: 3,
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
function ListCategory() {
    const [category,setcategory] =useState([])
    const [showLoading, setShowLoading] = useState(true)
    const  [load, setload] = useState(false)

    useEffect(()=>{
      axiosInstance
      .get('produit/category/')
      .then(res=>{
         //console.log(res.data)
         setcategory(res.data)
         setload(true)
      })
    },[])
    return (
      <div>
      {load?
      <Fragment>
        <h3 className='centerbtn'>Par categorie</h3>
     <Carousel
     responsive={responsive}
     containerClass="carousel-container" 
     infinite={true}
     autoPlay={true}
     autoPlaySpeed={2000}
     transitionDuration={1000} >
          {category.map(cat=>
            <Fragment>
             <p>{cat.category}</p>
            <img src={`https://gaalguishop.herokuapp.com${cat.image}`} alt="" className='imgcategory'  />
             <p> <Link to={`/category/${cat.category}`}>Voir plus </Link> </p>  
             </Fragment> )}
       
        </Carousel>
        </Fragment>:null}
        </div>
    )
}

export default ListCategory

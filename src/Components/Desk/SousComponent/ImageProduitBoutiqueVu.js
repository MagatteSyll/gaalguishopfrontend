import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {IonLoading,IonText,} from '@ionic/react'
import {Card,} from  'react-bootstrap'
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import {Link} from 'react-router-dom'


function ImageProduitBoutiqueVu({produit,islog,handlecart,handleconnexion}) {
   
  return (
    <div>
    <Card.Img src={`https://gaalguishop.herokuapp.com${produit.thumbnail}`} alt="" className="imgboutiquedesk" />
    <Link className='linkpanier'  to={`/detail/${produit.slug}/${produit.nom}`}>
   <Card.Title className='centerbtn'>{produit.nom}</Card.Title>
   </Link>
     
  </div>
  )
}

export default ImageProduitBoutiqueVu
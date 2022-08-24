import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {IonLoading,} from '@ionic/react'
import {Card,} from  'react-bootstrap'
import {Link} from 'react-router-dom'

function ImageProduitVenduBoutiqueVu({produit}) {
   
  return (
    <div> 
    <Card.Img src={`https://gaalguishop.herokuapp.com${produit.thumbnail}`} alt=""className="imgboutiquemobile"/>
    <Card.Title className='centerbtn' ><Link to={`detail/${produit.slug}`} className='linkpanier'>{produit.nom}</Link></Card.Title>
    
    <Card.Text className='centerbtn '><p className='centerbtn'>{produit.prix} {produit.devise}</p> 
    <p>{produit.nbrevendu} vendu(s) X disponibles </p>
     </Card.Text>
    </div>
  )
}

export default ImageProduitVenduBoutiqueVu
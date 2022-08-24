import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {IonCard, IonCol, IonGrid, IonLoading, IonRow,IonIcon,IonText} from '@ionic/react'
import {Link} from 'react-router-dom'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { starOutline } from 'ionicons/icons'

function UnProduitCategory({produit,user,HandleAddCart,handlenonlog,islog,}) {
    
  return (
   <div>
   <IonGrid>
       <IonRow>
       <IonCol size='12'>
       <IonCard className='cartcategorymobile'>
          <IonRow>
         <IonCol size='12' className='container'>
        <img src={`https://gaalguishop.herokuapp.com${produit.thumbnail}`} alt="" className="imgcategorymobile" />
       </IonCol>
       <IonCol size='12'>
       <Link className='linkpanier' to={`/detail/${produit.slug}/${produit.nom}`}> 
       <p> 
       <strong>{produit.nom}</strong> </p>
       <p>
      {produit.description}</p>
      </Link>
     <p><strong>{produit.prix} {produit.devise}</strong></p>
       </IonCol>
        </IonRow>
        </IonCard>
        </IonCol>
        </IonRow>
       </IonGrid>
  
    </div>
  )
}

export default UnProduitCategory
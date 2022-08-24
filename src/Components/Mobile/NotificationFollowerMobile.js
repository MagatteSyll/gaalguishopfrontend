import React from 'react'
import { IonCard, IonCol, IonGrid, IonRow, IonText } from '@ionic/react'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {Link} from 'react-router-dom'

function NotificationFollowerMobile({notification,handlecart}) {
  return (
    <div className='mobile container'>
            <h3>{notification.message}</h3>
    <IonGrid>
        <IonRow>
          <IonCol size='12'>
          <IonCard> 
         <IonRow>
        
         <IonCol size='6'>
        <img src={`https://gaalguishop.herokuapp.com${notification.produit.thumbnail}`}
             alt='' className='imgajout' />
         </IonCol>
            <IonCol size='6'>  
         <Link className='linkpanier' 
            to={`/detail/${notification.produit.slug}/${notification.produit.nom}`}>
               <p> {notification.produit.nom}</p>
            <p>prix <strong> {notification.produit.prix} {notification.produit.devise.devise}
            </strong> </p>
            </Link>
            </IonCol>  
           </IonRow>
           </IonCard>
            </IonCol>   
          </IonRow>
    </IonGrid>
    </div>
  )
}

export default NotificationFollowerMobile

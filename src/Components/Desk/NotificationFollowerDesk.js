import React from 'react'
import { IonCard, IonCol, IonGrid, IonRow, IonText } from '@ionic/react'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {Link} from 'react-router-dom'

function NotificationFollowerDesk({notification,handlecart}) {
  return (
    <div className='desk container'>
         <h3>{notification.message}</h3>
    <IonGrid>
        <IonRow>
            <IonCol size='8'> 
             <IonCard>
                 <IonRow>
                     <IonCol size='5'>
                  <Link className='linkpanier'
                      to={`/detail/${notification.produit.slug}/${notification.produit.nom}`}>  
                       <p> {notification.produit.nom}</p>
                     <p>prix <strong> {notification.produit.prix} {notification.produit.devise.devise}
                     </strong> </p>
                     </Link>
                     </IonCol>
                     <IonCol size='5'>
                     <img src={`https://gaalguishop.herokuapp.com${notification.produit.thumbnail}`}
                      alt='' className='imgajout' />
                     </IonCol>
                 </IonRow>
             </IonCard>
             </IonCol>
        </IonRow>
    </IonGrid>
    </div>
  )
}

export default NotificationFollowerDesk

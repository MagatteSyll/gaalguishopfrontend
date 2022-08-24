import React from 'react'
import { IonCard, IonCol, IonGrid, IonRow, IonText } from '@ionic/react'
import {Link} from 'react-router-dom'

function NotificationVenteDesk({notification}) {
  return (
    <div className='desk'>
         <h3>{notification.message}</h3>
     <IonGrid>
    <IonRow>
    {notification.commande.produitcommande.product.variation===true?
        <IonCol size='9' className='container'>
          <IonCard>
                 <IonRow>
                     <IonCol size='5'>
                     <h4>Detail de la commande</h4>
                     <p> produit <strong>
                     {notification.commande.produitcommande.imageproduct.produit.nom} </strong></p>
                     <p> Taille <strong>
                     {notification.commande.produitcommande.imageproduct.size} </strong></p>
                      <p> Couleur <strong>
                     {notification.commande.produitcommande.imageproduct.color} </strong></p>
                      <p> Quantité commandée  <strong>
                     {notification.commande.produitcommande.quantity} </strong></p>
                     <p>Prix unitaire <strong>
                      {notification.commande.produitcommande.imageproduct.produit.prix} {notification.commande.produitcommande.imageproduct.produit.devise.devise}
                     </strong>  </p>
                     <p>Montant de la commande <strong>
                 {notification.commande.produitcommande.subtotal} {notification.commande.produitcommande.imageproduct.produit.devise.devise} 
                     </strong>   </p>
                     <p>Commission de la plateforme <strong> 
                     {notification.commande.commission} {notification.commande.produitcommande.imageproduct.produit.devise.devise}
                     </strong>  </p>
                     <p>Quantité restante de ce produit <IonText className='redstyle'>
                          {notification.commande.produitcommande.imageproduct.quantite}
                     </IonText> </p>
                     <p>Vous pouvez modifier la quantite restante de ce  produit <Link 
            to={`/modificationvarie/${notification.commande.produitcommande.imageproduct.produit.slug}/${notification.commande.produitcommande.imageproduct.produit.nom}`}> ici </Link> </p>
                     </IonCol>
                     <IonCol size='5'>
                     <img src={`https://gaalguishop.herokuapp.com${notification.commande.produitcommande.imageproduct.image}`}
                      alt='' className='imgajout' />
                     </IonCol>
                 </IonRow>
             </IonCard> 
        </IonCol>
          :<IonCol size='9' className='container'>
            <IonCard>
                 <IonRow>
                     <IonCol size='5'>
                      <h4>Detail de la commande</h4>
                     <p> Produit <strong>{notification.commande.produitcommande.product.nom}</strong></p>
                    <p> Taille <strong>{notification.commande.produitcommande.product.taille}</strong></p>
                    <p> Couleur <strong>{notification.commande.produitcommande.product.couleur}</strong></p>
                     <p>Prix unitaire <strong> {notification.commande.produitcommande.product.prix} {notification.commande.produitcommande.product.devise.devise}
                     </strong>  </p>
                     <p>Quantité commandée <strong>
                          {notification.commande.produitcommande.quantity} 
                     </strong> </p>
                     <p>Montant de la commande <strong>
                          {notification.commande.produitcommande.subtotal} {notification.commande.produitcommande.product.devise.devise} 
                     </strong> </p>
                    <p>
                    Commission de la plateforme 
                    <strong>{notification.commande.commission} {notification.commande.produitcommande.product.devise.devise}</strong> </p>
                     <p>Quantité restante de ce produit <strong>
                          {notification.commande.produitcommande.product.qte} 
                     </strong> </p>
                     <p>Vous pouvez modifier la quantite restante de ce  produit  <Link 
                     to={`/modification/${notification.commande.produitcommande.product.slug}/${notification.commande.produitcommande.product.nom}`}> ici </Link> </p>
                     </IonCol>
                     <IonCol size='5'>
                     <img src={`https://gaalguishop.herokuapp.com${notification.commande.produitcommande.product.thumbnail}`}
                      alt='' className='imgajout' />
                     </IonCol>
                 </IonRow>
             </IonCard>
          </IonCol>}
    </IonRow>
    </IonGrid>
    
    </div>
  )
}

export default NotificationVenteDesk



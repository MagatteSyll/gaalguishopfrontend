import React from 'react'
import { IonCard, IonCol, IonGrid, IonRow, IonText } from '@ionic/react'

function AnnulationVenteDesk({notification}) {
  return (
    <div className='desk'>
        <h3>{notification.message}</h3>
     <IonGrid>
        <IonRow className='container'>
        {notification.commande.produitcommande.product.variation===true?
            <IonCol size='6' className='centerbtn'>
            <h4>Commande annulée</h4>
             <IonCard className='cartcommande'> 
                 <IonRow>
                     <IonCol size='6'>
                     <p>produit <strong> {notification.commande.produitcommande.imageproduct.produit.nom}
                     </strong></p>
                     <p> Couleur <strong>{notification.commande.produitcommande.imageproduct.color}</strong></p>
                    <p> Taille <strong>{notification.commande.produitcommande.imageproduct.size}</strong></p>
                     <p> Quantite <strong>{notification.commande.produitcommande.quantity}</strong></p> 
                     <p>Prix unitaire <strong> {notification.commande.produitcommande.imageproduct.produit.prix} {notification.commande.produitcommande.imageproduct.produit.devise.devise}
                     </strong> </p>
                     <p> Total <strong>{notification.commande.produitcommande.subtotal} {notification.commande.produitcommande.imageproduct.produit.devise.devise} 
                     </strong></p>
                     </IonCol>
                     <IonCol size='6'>
                     <img src={`https://gaalguishop.herokuapp.com${notification.commande.produitcommande.imageproduct.image}`}
                      alt='' className='imgajout' />
                     </IonCol>
                 </IonRow>
             </IonCard>
            </IonCol>:
            <IonCol size='6'>
             <h4>Commande annulée</h4>
             <IonCard> 
                 <IonRow>
                     <IonCol size='6'>
                     <p>produit <strong> {notification.commande.produitcommande.product.nom}
                     </strong></p>
                     <p> Couleur <strong>{notification.commande.produitcommande.product.couleur}</strong></p>
                    <p> Taille <strong>{notification.commande.produitcommande.product.taille}</strong></p>
                     <p> Quantite <strong>{notification.commande.produitcommande.quantity}</strong></p> 
                     <p>Prix unitaire <strong> {notification.commande.produitcommande.product.prix} {notification.commande.produitcommande.product.devise.devise}
                     </strong> </p>
                     <p> Total <strong>{notification.commande.produitcommande.subtotal} {notification.commande.produitcommande.product.devise.devise} 
                     </strong></p>
                     </IonCol>
                     <IonCol size='6'>
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

export default AnnulationVenteDesk
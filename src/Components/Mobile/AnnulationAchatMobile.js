import React from 'react'
import { IonCard, IonCol, IonGrid, IonRow, IonText } from '@ionic/react'

function AnnulationAchatMobile({notification}) {
  return (
    <div className='mobile container'>
          <h3>{notification.message}</h3> 
         <IonGrid>
        {notification.commande.produitcommande.product.variation===true?
        <IonRow>
        <IonCol size='12' className='centerbtn'>
       <img src={`https://gaalguishop.herokuapp.com${notification.commande.produitcommande.imageproduct.image}`}
         alt='' className='imgannule' />
        </IonCol>
            <IonCol size='10' className='centerbtn'>
             <h4>Commande annulée</h4>
             <IonCard>   
             <p>produit <strong> {notification.commande.produitcommande.imageproduct.produit.nom}
             </strong></p>
            <p> Couleur <strong>{notification.commande.produitcommande.imageproduct.color}</strong></p>
                    <p> Taille <strong>{notification.commande.produitcommande.imageproduct.size}</strong></p>
                     <p> Quantite <strong>{notification.commande.produitcommande.quantity}</strong></p> 
                     <p>prix unitaire <strong> {notification.commande.produitcommande.imageproduct.produit.prix} {notification.commande.produitcommande.imageproduct.produit.devise.devise}
                     </strong> </p>
                     <p> Sous total <strong>{notification.commande.produitcommande.subtotal} {notification.commande.produitcommande.imageproduct.produit.devise.devise} 
                     </strong></p>
             <p>livraison<strong> {notification.commande.livraison} {notification.commande.produitcommande.imageproduct.produit.devise.devise}
             </strong></p>
            <p>Montant de la commande <strong>
         {notification.commande.total} {notification.commande.produitcommande.imageproduct.produit.devise.devise}
         </strong></p>       
             </IonCard>
             </IonCol>
        </IonRow>:
         <IonRow>
        <IonCol size='12'>
       <img src={`https://gaalguishop.herokuapp.com${notification.commande.produitcommande.product.thumbnail}`}
         alt='' className='imgannule' />
        </IonCol>
            <IonCol size='10'>
             <h4>Commande annulée</h4>
             <IonCard>   
             <p>produit <strong> {notification.commande.produitcommande.product.nom}
             </strong></p>
           <p> Couleur <strong>{notification.commande.produitcommande.product.couleur}</strong></p>
                    <p> Taille <strong>{notification.commande.produitcommande.product.taille}</strong></p>
                     <p> Quantite <strong>{notification.commande.produitcommande.quantity}</strong></p> 
                     <p>prix unitaire <strong> {notification.commande.produitcommande.product.prix} {notification.commande.produitcommande.product.devise.devise}
                     </strong> </p>
                     <p> Sous total <strong>{notification.commande.produitcommande.subtotal} {notification.commande.produitcommande.product.devise.devise} 
                     </strong></p>
             <p>livraison<strong> {notification.commande.livraison} {notification.commande.produitcommande.product.devise.devise}
             </strong> </p>
            <p>Montant de la commande <strong>
         {notification.commande.total} {notification.commande.produitcommande.product.devise.devise}
         </strong> </p>       
             </IonCard>
             </IonCol>
             </IonRow>
           }
    </IonGrid>
    </div>
  )
}

export default AnnulationAchatMobile

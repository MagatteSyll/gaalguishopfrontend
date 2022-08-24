import React from 'react'
import {IonGrid,IonCard,IonRow,IonCol,IonItem,IonText,IonIcon} from '@ionic/react'
import {callOutline,locationOutline,arrowUndoOutline,checkmarkDoneOutline,mailOutline} from 'ionicons/icons'
import {Link} from 'react-router-dom'
import logo from '../asset/logo.jpg'

function RecuCommandeDesk({commande}) {
  return (
    <div className='desk centerbtn'>
   <IonGrid>
             <IonRow>
                 <IonCol size='3'>
                 <IonItem>
                 <Link to='/monpanier'>
                 <img src={logo} className='logoimgdesk'/> </Link> 
                  </IonItem>
                  
                 </IonCol>
                 <IonCol size='6' className='coladress'>
                  <IonItem>
                      <IonText> <IonIcon icon={locationOutline}/> Dakar, rue on s en fiche</IonText>
                  </IonItem>
                  <IonItem>
                      <IonText> <IonIcon icon={callOutline}/> +(221)772059140</IonText>
                      <IonText className='texttel' > +(221)772197305</IonText></IonItem>
                     <IonItem> <IonText  className='texttel' > <IonIcon icon={mailOutline}/> www.gaalguimoney.com</IonText>
                  </IonItem>
                 </IonCol>
             </IonRow>
         </IonGrid>
         {commande.produitcommande.product.variation===true?
          <div>
        <h2 className='centerbtn'> <IonIcon icon={checkmarkDoneOutline}/>Commande effectuée</h2>
          <IonGrid>
             <IonRow> 
             <IonCol size='5' className='zeromargin'>
               <p>Date de l achat</p>
              <h4>{new Date(commande.created_at).toLocaleDateString('en-GB',
                     {hour: '2-digit', minute:'2-digit'})}</h4>
               </IonCol>
              <IonCol size='5' className='zeromargin'>
              <p>Numero de la commande</p>
              <h4>{commande.id}</h4>
            </IonCol>
            <IonCol size='5' className='zeromargin' >
             <p>Produit acheté </p>
            <h4>{commande.produitcommande.imageproduct.produit.nom}</h4>
            </IonCol>
            <IonCol size='5' className='zeromargin'>
            <p>Prix unitaire</p>
            <h4>{commande.produitcommande.imageproduct.produit.prix} {commande.produitcommande.imageproduct.produit.devise.devise}</h4>
            </IonCol> 
            <IonCol size='5' className='zeromargin'>
             <p>Quantité </p>
             <h4>{commande.produitcommande.quantity} </h4>
             </IonCol>
             <IonCol size='5' className='zeromargin' >
             <p>Frais de livraison </p>
             <h4>{commande.livraison} {commande.produitcommande.imageproduct.produit.devise.devise}</h4>
             </IonCol> 
             <IonCol size='5' className='zeromargin' >
             <p>Montant total de la commande </p>
             <h4>{commande.total} {commande.produitcommande.imageproduct.produit.devise.devise}</h4>
             </IonCol> 
             <IonCol size='5' className='zeromargin'>
             <p>Nom du client </p>
             <h4>{commande.nom_client} </h4>
             </IonCol> 
              <IonCol size='12' className='centerbtn signature'>
              <IonItem >
              Signature
              </IonItem>
              </IonCol>  
            </IonRow>
            </IonGrid>

          </div>:
        <div>
         <h2 className='centerbtn'> <IonIcon icon={checkmarkDoneOutline}/>Commande effectuée</h2>
             <IonGrid>
                 <IonRow>
                     <IonCol size='5' className='zeromargin'>
                     <p>Date de l achat</p>
                     <h4>{new Date(commande.created_at).toLocaleDateString('en-GB',
                     {hour: '2-digit', minute:'2-digit'})}</h4>
                     </IonCol>
                     <IonCol size='5' className='zeromargin'>
                     <p>Numero de la commande</p>
                     <h4>{commande.id}</h4>
                     </IonCol>
                     <IonCol size='5' className='zeromargin' >
                     <p>Produit acheté </p>
                     <h4>{commande.produitcommande.product.nom}</h4>
                      </IonCol>
                     <IonCol size='5' className='zeromargin'>
                     <p>Prix unitaire</p>
                     <h4>{commande.produitcommande.product.prix} {commande.produitcommande.product.devise.devise} </h4>
                     </IonCol>  
                     <IonCol size='5' className='zeromargin'>
                     <p>Quantité </p>
                     <h4>{commande.produitcommande.quantity} </h4>
                     </IonCol>
                     <IonCol size='5' className='zeromargin' >
                     <p>Frais de livraison </p>
                     <h4>{commande.livraison} {commande.produitcommande.product.devise.devise}</h4>
                     </IonCol> 
                     <IonCol size='5' className='zeromargin' >
                     <p>Montant total de la commande </p>
                     <h4>{commande.total} {commande.produitcommande.product.devise.devise}</h4>
                     </IonCol> 
                     <IonCol size='5' className='zeromargin'>
                     <p>Nom du client </p>
                     <h4>{commande.nom_client} </h4>
                     </IonCol> 
                     <IonCol size='12' className='centerbtn signature'>
                     <IonItem >
                    Signature
                  </IonItem>
                    </IonCol>   
                 </IonRow>
             </IonGrid>
           </div>}
    </div>
  )
}

export default RecuCommandeDesk
/*

                     
                 </IonRow>
             </IonGrid>
             */
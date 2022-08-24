import React from 'react';
import {IonGrid,IonRow,IonCol,IonCard} from '@ionic/react'
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';

function VendreDesk() {
  return (
   <div className='desk'>
     <h2>Vous voulez mettre vos produits en ligne?</h2>
     <IonGrid>
     <IonRow>
     <IonCol size='11'>
     <IonCard className='centerbtn'>
   <h3 className='textpage'> Vous etes au bon endroit.<span className='logocolor'>Gaalguishop</span> met à votre disposition une boutique en ligne ou vos produits sont vus par des milliers de personne et peuvent etre achetés en toute sécurité et cela en quelques clics de votre part.
Créez un compte si vous n en possédez pas encore .A travers votre boutique ,vous pouvez mettre vos produits en ligne et ils seront disponibles a tous nos clients .
En cas de commande de votre produit , vous le déposerez à l un de nos points d accés  qui vous est le plus proche .Nos agents se chargeront de vérifier la conformité avec ce qui a été proposé au client ,et votre argent vous sera remis (le prix du produit -2% de commission de la plateforme ) 
si tout est ok <SentimentSatisfiedIcon className='logocolor'/>
  </h3>
     </IonCard>
    </IonCol>
    <IonCol size='11'>
    Pub sur l ajout de produits
    </IonCol>
    </IonRow>
    </IonGrid>
   </div>
  );
}

export default VendreDesk;

import React from 'react';
import {IonList,IonItem, IonGrid, IonRow,IonCol,} from '@ionic/react'

function CompteDesk({user,handleclick,deconnexion}) {
  return(
  <div className='desk'>
 
     <IonGrid>
         <IonRow>
             <IonCol size='4'>
             <h2 className='centerbtn'> Donnees personnelles</h2>
             <IonList>
             <IonItem>
                {user.prenom} {user.nom}
            </IonItem>
            <IonItem>
                {user.phone}
            </IonItem>
            </IonList> 
             </IonCol>
             <IonCol size='6'>
                <p className='centerbtn'> <button class="w3-btn w3-round-xxlarge w3-purple"  onClick={handleclick}>Modifier les donnees</button></p> 
                <p className='centerbtn'> <button class="w3-btn w3-round-xxlarge w3-red" onClick={deconnexion}>Deconnexion</button></p>
             </IonCol>
         </IonRow>
    </IonGrid>  
  </div>
  );
}

export default CompteDesk;

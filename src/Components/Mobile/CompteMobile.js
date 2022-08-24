import React from 'react';
import {IonList, IonLoading,IonItem, IonGrid, IonRow,IonCol, IonButton} from '@ionic/react'

function CompteMobile({user,handleclick,deconnexion}) {
  return(
       <div className='mobile'>
    <IonGrid>
         <IonRow>
             <IonCol size='12'>
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
               </IonCol>
               <IonCol size='6'>
                <p className='centerbtn'> <button class="w3-btn w3-round-xxlarge w3-red" onClick={deconnexion}>Deconneion</button></p>
             </IonCol>
         </IonRow>
    </IonGrid>  
       </div>
  );
}

export default CompteMobile;

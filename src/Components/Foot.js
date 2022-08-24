import React from 'react'
import { IonApp, IonCol, IonFooter, IonGrid, IonRow } from '@ionic/react'

function Foot() {
    return (
        <IonFooter>
           <IonGrid>
               <IonRow className="ion-align-items-center">
                   <IonCol  size="12" className="ion-text-center">
                       <p>Gaalgui &reg; {new Date().getFullYear()}</p>
                   </IonCol>
               </IonRow>
           </IonGrid>
       </IonFooter>
    )
}

export default Foot

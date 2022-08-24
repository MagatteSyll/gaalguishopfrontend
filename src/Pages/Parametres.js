import { IonItem, IonList } from '@ionic/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Parametres() {
    return (
        <div>
         <IonList>
            <IonItem className='ion-text-center'>
                <Link>Politique de confidentialité</Link>
            </IonItem>
            <IonItem>
                <Link>Politique de confidentialité</Link>
            </IonItem> 
        </IonList>   
        </div>
    )
}

export default Parametres


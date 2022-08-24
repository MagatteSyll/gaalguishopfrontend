import { IonCard,IonGrid,IonRow,IonCol } from '@ionic/react'
import React from 'react'
import {Link} from 'react-router-dom'

function DesactivationBoutiqueMobile({notification}) {
  return (
    <div  className='mobile container'>
     <h1>{notification.message}</h1>
     <h3>
      Vous n avez des lors plus acces aux fonctionalites de vente et tous vos produits demeurent inactifs aux clients.
      Vous pouvez neanmoins continuer a utiliser les fonctionnalites d achat.
      Pour plus de detail voir <Link>la politique de confidentialite </Link>
     </h3>
    </div>
  )
}

export default DesactivationBoutiqueMobile
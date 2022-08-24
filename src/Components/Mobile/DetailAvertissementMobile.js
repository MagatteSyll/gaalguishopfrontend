import React from 'react'
import { IonCard,IonGrid,IonRow,IonCol } from '@ionic/react'
import {Link} from 'react-router-dom'

function DetailAvertissementMobile({notification}) {
  return (
    <div  className='mobile container'>
    <h3>
      {notification.message}
    </h3>
    <h4>
    Un total de quatre avertissemnts equivaut a une desactivation de votre boutique ,
    tous vos produits seront des lors inaccessibles aux clients .Pour plus de detail ,lire la <Link>politique de confidentialite.</Link>
    </h4>     
   </div> 
 
  )
}

export default DetailAvertissementMobile
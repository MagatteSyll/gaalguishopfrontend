import React from 'react'
import { IonCard, IonCol, IonGrid, IonRow } from '@ionic/react'
import {Link} from 'react-router-dom'

function DetailAvertissmentDesk({notification}) {
  return (
    <div className='desk w3-margin'>
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

export default DetailAvertissmentDesk
import React from 'react'
import {IonGrid,IonRow,IonCol} from '@ionic/react'
import {Link} from 'react-router-dom'




function ResultatSearchDesk({produit}){

return(
 <div className='desk'>
<IonGrid>
<IonRow>
{produit.map(pi=>
	<IonCol size='3'>
    <img src={pi.thumbnail} alt="" className="imgboutiquedesk"  />
     <Link className='linkpanier' to={`/detail/${pi.slug}/${pi.nom}`}>
    <p className='centerbtn'> <strong >{pi.nom}</strong> </p>
     </Link>
     <p className='centerbtn'> 
    <strong> {pi.prix} {pi.devise.devise}</strong>  
    </p>
	</IonCol>)}
</IonRow>
</IonGrid>

 </div>

)
}

export default ResultatSearchDesk;
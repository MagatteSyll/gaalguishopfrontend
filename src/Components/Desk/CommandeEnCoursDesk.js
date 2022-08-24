import { IonCard, IonCol, IonGrid, IonRow, IonText } from '@ionic/react'
import React from 'react'
import {Link} from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



function CommandeEnCoursDesk({commande,count,next,previous,handledisplay}) {
  return (
    <div className='desk m-3'>  
    <IonGrid>
    <IonRow>
   {commande.map(ach=>
    <IonCol size='6'>
    {ach.produitcommande.product.variation===true?
    <div>
    <IonCard className='cartcommande'>
    <IonRow>
     <IonCol size='6'>
    <Link className='linkpanier'
  to={`/detail/${ach.produitcommande.imageproduct.produit.slug}/${ach.produitcommande.imageproduct.produit.nom}`}>
    <p className='centerbtn'> <strong >{ach.produitcommande.imageproduct.produit.nom}</strong></p></Link>
     <p className='centerbtn'>
     Couleur <strong> 
  {ach.produitcommande.imageproduct.color}
   </strong> 
     </p> 
     <p className='centerbtn'>
     taille <strong> 
  {ach.produitcommande.imageproduct.size}
   </strong> 
    </p> 
  <p className='centerbtn'> 
 Poids <strong>
  {ach.produitcommande.product.poids} {ach.produitcommande.product.unite_mesure_poids}</strong>
  </p>
    <p className='centerbtn'>
     Quantite <strong> 
  {ach.produitcommande.quantity}
   </strong> 
     </p>
    <p className='centerbtn'>
     prix <strong> 
  {ach.produitcommande.imageproduct.produit.prix} {ach.produitcommande.imageproduct.produit.devise.devise}
   </strong> 
     </p> 
 <p className='centerbtn'>
    Sous total  <strong> 
  {ach.produitcommande.subtotal} {ach.produitcommande.imageproduct.produit.devise.devise}
   </strong> 
     </p>  
     <p className='centerbtn'>
     Livraison <strong> 
  {ach.livraison} {ach.produitcommande.imageproduct.produit.devise.devise}
   </strong> 
     </p> 
     <p className='centerbtn'>
     Total <strong> 
  {ach.total} {ach.produitcommande.imageproduct.produit.devise.devise}
   </strong> 
     </p> 
     </IonCol>
    <IonCol size='6'>
    <img src={`https://gaalguishop.herokuapp.com${ach.produitcommande.imageproduct.image}`} alt="" 
    className="imgcom" />
    <p >Etat de la commande <strong className='logocolor'>{ach.statut_commande}</strong></p>
    </IonCol>
   
     </IonRow>
     </IonCard>
    </div>:
    <div>
    <IonCard className='cartcommande'>
    <IonRow>
     <IonCol size='6'>
    <Link className='linkpanier'
  to={`/detail/${ach.produitcommande.product.slug}/${ach.produitcommande.product.nom}`}>
    <p className='centerbtn'> <strong >{ach.produitcommande.product.nom}</strong></p></Link>
    <p className='centerbtn'> 
    Poids <strong>
    {ach.produitcommande.product.poids} {ach.produitcommande.product.unite_mesure_poids}</strong>
     </p>
     <p className='centerbtn'>
     Taille <strong> 
  {ach.produitcommande.product.taille} 
   </strong> 
     </p> 
     <p className='centerbtn'>
     Couleur <strong> 
     {ach.produitcommande.product.couleur} 
   </strong> 
     </p>
 <p className='centerbtn'>
     Quantite
     <strong>  {ach.produitcommande.quantity} 
   </strong> 
     </p>
     <p className='centerbtn'>
     Prix <strong> 
  {ach.produitcommande.product.prix} {ach.produitcommande.product.devise.devise}
   </strong> 
     </p>
     <p className='centerbtn'>
     Sous total <strong> 
  {ach.produitcommande.subtotal} {ach.produitcommande.product.devise.devise} 
   </strong> 
     </p>
 <p className='centerbtn'>
     Livraison <strong> 
  {ach.livraison} {ach.produitcommande.product.devise.devise} 
   </strong> 
     </p>
 <p className='centerbtn'>
     Total <strong> 
  {ach.total} {ach.produitcommande.product.devise.devise}  
   </strong> 
     </p>

  </IonCol> 
    <IonCol size='6'>
   <img src={`https://gaalguishop.herokuapp.com${ach.produitcommande.product.thumbnail}`} alt="" 
    className="imgcom"/>
  <p >Etat de la commande <strong className='logocolor'>{ach.statut_commande}</strong></p>
   </IonCol >
  
    </IonRow>
    </IonCard>

    </div>}
    </IonCol>
    )}
   </IonRow>
  </IonGrid>
  <div className='divpagination'>
  {count>1?
 <ReactPaginate
  breakLabel="..."
  nextLabel={next!=null && count>4?<ArrowForwardIcon className='logocolor'/>:null}
  marginPagesDisplayed={2}
  containerClassName={"pagination"}
  pageClassName={"page-item paginationsuivant "}
  pageLinkClassName={"page-link"}
  nextClassName={' paginationsuivant'}
  previousClassName={ 'paginationsuivant '}
  breakClassName={'page-item'}
  breakClassNameLink={'page-link'}
  onPageChange={handledisplay}
  pageRangeDisplayed={2}
  pageCount={count}
  previousLabel={previous!=null && count>4?<ArrowBackIcon className='logocolor'/>:null}
  renderOnZeroPageCount={null}
   />:null}
   </div>
  </div>
  )
}

export default CommandeEnCoursDesk
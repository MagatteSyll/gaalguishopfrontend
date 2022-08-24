import React from 'react'
import { IonCard, IonCol, IonGrid, IonRow, IonText } from '@ionic/react'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function AchatMobile({achat,count,next,previous,handledisplay}) {
  return (
    <div className='mobile container'>
  <IonGrid>
   <IonRow>
   {achat.map(ach=>
    <IonCol size='6'>
    {ach.produitcommande.product.variation===true?
    <div>
    <img src={`https://gaalguishop.herokuapp.com${ach.produitcommande.imageproduct.image}`} alt="" 
    className="imgboutiquemobile"/>
    <Link className='linkpanier'
  to={`/detail/${ach.produitcommande.imageproduct.produit.slug}/${ach.produitcommande.imageproduct.produit.nom}`}>
    <p className='centerbtn'> <strong >{ach.produitcommande.imageproduct.produit.nom}</strong></p></Link>
     <p className='centerbtn'>
     <strong> 
  {ach.produitcommande.imageproduct.produit.prix} {ach.produitcommande.imageproduct.produit.devise.devise}
   </strong> 
     </p> 
    </div>:
    <div>
   <img src={`https://gaalguishop.herokuapp.com${ach.produitcommande.product.thumbnail}`} alt="" 
    className="imgboutiquemobile"/>
    <Link className='linkpanier'
  to={`/detail/${ach.produitcommande.product.slug}/${ach.produitcommande.product.nom}`}>
    <p className='centerbtn'> <strong >{ach.produitcommande.product.nom}</strong></p></Link>
     <p className='centerbtn'>
     <strong> 
  {ach.produitcommande.product.prix} {ach.produitcommande.product.devise.devise}
   </strong> 
     </p> 

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

export default AchatMobile
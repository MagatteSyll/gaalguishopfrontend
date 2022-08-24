import React from 'react'
import {Container} from  'react-bootstrap'
import { Link } from 'react-router-dom';
import { IonRow,IonGrid,IonCol, } from '@ionic/react'
import ReactPaginate from 'react-paginate';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';






function ProduitUneCategorieDesk({ produit,itemdisp,next,previous,handledisplay}){ 
   
  return(
    <div className='desk'>
    <Container>
    <IonGrid>
    <IonRow> 
     {produit.length>0 ? produit.map(pi=>   
       <IonCol size='4'>
      <IonRow>
         <IonCol size='6'>
        <img src={pi.thumbnail} alt="" className="imgcategory" />
        <p>    
       <Link className='linkpanier' 
         to={`/boutique/${pi.boutique.id}/${pi.vendeur.prenom+""+pi.vendeur.nom}`}>
        voir la boutique du vendeur</Link></p>
       </IonCol>
       <IonCol size='6'>
       <Link className='linkpanier' to={`/detail/${pi.slug}/${pi.nom}`}> 
       <p> 
       <strong>{pi.nom}</strong> </p>
       <p>
      {pi.description}</p>
    </Link>
    <p> 
       <strong>{pi.prix} {pi.devise.devise}</strong> </p>
       </IonCol>
        </IonRow>
    </IonCol>):<h1 className='centerbtn redstyle'>Oups aucun produit dans cette categorie</h1>}
  </IonRow> </IonGrid>
  </Container>
  <div className='divpagination'>
  {itemdisp>1?
  <ReactPaginate
        breakLabel="..."
        nextLabel={next!=null && itemdisp>4?<ArrowForwardIcon className='logocolor'/>:null}
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
        pageCount={itemdisp}
        previousLabel={previous!=null && itemdisp>4?<ArrowBackIcon className='logocolor'/>:null}
        renderOnZeroPageCount={null}
      />:null}
  </div>
  </div>
  
    );
}

export default ProduitUneCategorieDesk;


//itemdisp>range+marginPagesDisplayed
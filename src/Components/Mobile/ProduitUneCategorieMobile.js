import React,{useState} from 'react'
import {Container} from  'react-bootstrap'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { IonRow,IonGrid,IonCol, IonText,IonIcon,IonCard} from '@ionic/react'
import 'react-toastify/dist/ReactToastify.css';
import ReactPaginate from 'react-paginate';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function ProduitUneCategorieMobile({produit,itemdisp,next,previous,handledisplay}) {
 
 
  return (
    <div className='mobile' >  
   <Container>
   <IonGrid>
    <IonRow> 
     { produit.length>0 ? 
    produit.map(pi=>   
  <IonCol size='11'>
    <IonCard className='cartcategorymobile'>
    <IonRow>
    <IonCol size='12' className='container'>
    <img src={pi.thumbnail} alt="" className="imgcategorymobile" />
    </IonCol>
    <IonCol size='12'>
     <Link className='linkpanier centerbtn' to={`/detail/${pi.slug}/${pi.nom}`}> 
      <p> 
       <strong>{pi.nom}</strong> </p>
       <p>
      {pi.description}</p>
     </Link>
     <p className='centerbtn'><strong>{pi.prix} {pi.devise.devise}</strong></p>
    </IonCol>
    </IonRow>
    </IonCard>
  </IonCol>):<h1 className='centerbtn redstyle'>Oups aucun produit dans cette categorie</h1>
    }
    </IonRow>
   </IonGrid>
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
  </Container>
   </div>
   
  );
}
  

export default ProduitUneCategorieMobile;


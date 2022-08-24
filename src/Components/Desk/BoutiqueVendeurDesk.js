import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Form ,} from  'react-bootstrap'
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import Image from 'react-bootstrap/Image'
import CreateIcon from '@material-ui/icons/Create';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import { Fragment } from 'react';
import { IonGrid,IonCol,IonRow,IonButton, IonSegment,IonLoading,
 IonSegmentButton, IonLabel, IonIcon,IonCard,IonText} from '@ionic/react';
import { Rating,} from '@mui/material';
import { ellipsisHorizontalOutline } from 'ionicons/icons'
import ReactPaginate from 'react-paginate';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ShopIcon from '@mui/icons-material/Shop';
import Button from '@mui/material/Button';

 
 
function BoutiqueVendeurDesk({produit,botique,iref,handleprofil,count,next,previous,
  truncateString,handleajout,handlopen,handledisplay,handlemodif, handleopeneditmoney}) {
 
  return( 
    <div className='desk boutiquevendeur' >
      {botique.active ? 
      <>
      {botique.comptegaalguimoney!==null?
      <IonButton  
       onClick={handleajout} 
      className="ion-float-end">
          Ajouter un produit
       </IonButton>
      :<IonButton  
      onClick={handleopeneditmoney} 
      className="ion-float-end">
      Lier un compte GaalguiMoney
       </IonButton>}
       </>:
       <p className='redstyle'>Boutique inactive!</p>}
    <IonGrid>
    <IonRow>
     <IonCol size='5'>     
     <Image 
    src={`https://gaalguishop.herokuapp.com${botique.logo}`} 
    roundedCircle
    className='picprofil'/>
    <Button
   className='btndrop'
   component="label">
   <CameraAltIcon />
  <input
  type="file"
  accept="image/*"
  hidden
  onChange={handleprofil}
 />
</Button>

    </IonCol>
     <IonCol size='7'> 
      <IonRow>
      <IonCol size='3'>
      <p><Rating name="half-rating" 
      value={botique.note_vendeur} 
      readOnly
      precision={0.1}
      sx={{
    "& .MuiRating-iconFilled": {
      color: "#C16A39 "
    },}} />
      ({botique.note_vendeur})
      </p>
      <p><span className='logocolor'>{botique.nbrefollower}</span> abonné(s)</p>
       </IonCol>
      <IonCol size='9'>
       <p>{botique.description}<button className='btndrop' 
       onClick={handlopen}
       >
    <CreateIcon className='logocolor'/></button></p>
      </IonCol>
    </IonRow>
    </IonCol>
    </IonRow>
    </IonGrid>
     <div className='margseg'>
  <IonGrid>
  { produit.length>0 ? <div>
    <h4><ShopIcon className='logocolor icondetail'/></h4>
    <IonRow>
   {produit.map(pi=>
    <IonCol size='3' key={pi.id}>
    <IonCard>
    <img
     //src={`https://gaalguishop.herokuapp.com${pi.thumbnail}`}
     src={`http://127.0.0.1:8001${pi.thumbnail}`}
     src={pi.thumbnail}
     alt="" className="imgboutiquedesk"  />
     <Link className='linkpanier' to={`/detail/${pi.slug}/${pi.nom}`}>
    <p className=' logocolor'> <strong >{truncateString(pi.nom,30)}</strong> </p>
      </Link>
      {pi.active?
    <p className='centerbtn'> 
    <strong> {pi.prix} {pi.devise.devise}</strong>  
    </p>:<p className='redstyle'>Inactif!</p> } 
    <button className='btndrop' onClick={()=>handlemodif(pi.slug,pi.nom,pi.variation)}>
     <CreateIcon className='logocolor'/>
    </button> 
    </IonCard>  
    </IonCol>)}
    </IonRow>
    </div>
      :<h1 className='centerbtn logocolor'>Aucun produit a afficher </h1>}
</IonGrid>
</div>      
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
    

   </div>       ) 
}

export default BoutiqueVendeurDesk;



import React,{useState,Fragment} from 'react'
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import {Card,} from  'react-bootstrap'
import Image from 'react-bootstrap/Image'
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { IonGrid,IonCol,IonRow, IonText, IonSegment, 
  IonSegmentButton, IonLabel,IonCard,IonIcon } from '@ionic/react';
import ImageProduitBoutiqueVu from './SousComponent/ImageProduitBoutiqueVu';
import ImageProduitVenduBoutiue from './SousComponent/ImageProduitVenduBoutiue';
import { Rating,} from '@mui/material';
import ReactPaginate from 'react-paginate';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ShopIcon from '@mui/icons-material/Shop';
import {addOutline,checkmarkDoneOutline} from 'ionicons/icons'


 
function BoutiqueVueDesk({profil,produit,islog, handlecart,handleconnexion,handledetail,
  user,getboutique,isStaf,handlavertir,handlactivation,count,previous,next, handledisplay,
  truncateString,isabonned,addfollower,removefollover,handldesactivation}) {
  return( 
    <div className='desk boutiquevendeur'>  
      <IonGrid>
      <IonRow>
      <IonCol size='4'> 
      <IonRow>
      <IonCol size='8'>
      <Image
      src={`https://gaalguishop.herokuapp.com${profil.logo}`} 
      //  src={`http://127.0.0.1:8001${profil.logo}`}
      roundedCircle  className='picprofil'/>
      </IonCol>
      <IonCol size='4'>
       <p>
      <strong> {profil.user.prenom} {profil.user.nom}</strong>
      </p> 
      </IonCol>
      </IonRow>  
      </IonCol>
     <IonCol size='4'> 
      <IonRow>
      <IonCol size='6'>
      <p> <span className='logocolor'>{profil.nbrefollower}</span> abonné(s)</p> 
      </IonCol>
      <IonCol size='6'>
      <p><Rating name="half-rating" 
      value={profil.note_vendeur} 
       readOnly
      precision={0.1}
      sx={{
    "& .MuiRating-iconFilled": {
      color: "#C16A39 "
    },}} />
     ({profil.note_vendeur})
      </p>
     
      </IonCol>
        <IonCol size='4'>
          {islog?
          <span>
            {user.isbureaucrate?
            <span>
          {profil.avertissement} avertissement(s)<br/>
          {profil.nbredesactivation} desactivation(s)<br/>
          {profil.active?
          <span>
          <button className="w3-button  w3-orange" onClick={handlavertir} >
          Avertir le vendeur</button>
          <p>(Un total de 4 avertissements entraine directement
           la  désactivation de la boutique)</p></span>
          :
          <button className="w3-button  w3-green" onClick={handlactivation}>Reactiver la boutique</button>
           }
          
          </span>:
          
        <span >
      {isabonned?
        <button className="w3-button  w3-green" onClick={()=>removefollover()} isabonned={isabonned}>
      <IonIcon icon={checkmarkDoneOutline} className='iconfollower'/>abonné</button>
    :<button className="w3-button  w3-red" onClick={()=>addfollower()}>
     <IonIcon icon={addOutline} className='iconfollower'/>s abonner</button>}
     </span>
      }</span>:null}
      <br/><br/>
      </IonCol>
     
   </IonRow>
   </IonCol>
    <IonCol size='4'>
    <p>{profil.description}</p>
     {islog?
      <>
      {user.isbureaucrate?
      <span>
    {profil.active?
     <p>
     <button className="w3-button  w3-red" onClick={handldesactivation}>Desactiver la boutique</button>
     </p>:
     <p className='redstyle'>Boutique non active!</p>}
      </span>:null}
      </>:null}
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
     src={pi.thumbnail}
     alt="" className="imgboutiquedesk"  />
     <Link className='linkpanier' to={`/detail/${pi.slug}/${pi.nom}`}>
    <p className='centerbtn logocolor'> <strong >{truncateString(pi.nom,30)}</strong> </p>
      </Link>
      {pi.active?
    <p className='centerbtn'> 
    <strong> {pi.prix} {pi.devise.devise}</strong>  
    </p>:<p className='redstyle'>Inactif!</p> }   
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

</div>
   
      
)
} 





export default BoutiqueVueDesk;



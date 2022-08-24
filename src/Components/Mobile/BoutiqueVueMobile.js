import React from 'react'
import Image from 'react-bootstrap/Image'
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';
import { IonGrid,IonCol,IonRow,  IonSegment, 
  IonSegmentButton, IonLabel,IonCard,IonIcon} from '@ionic/react';
import ImageProduitButique from './SousComponent/ImageProduitButique';
import ImageProduitVenduBoutiqueVu from './SousComponent/ImageProduitVenduBoutiqueVu';
import { Rating,} from '@mui/material'; 
import {Link} from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ShopIcon from '@mui/icons-material/Shop';
import {addOutline,checkmarkDoneOutline} from 'ionicons/icons'


function BoutiqueVueMobile({profil,produit,islog, handlecart,handleconnexion,handledetail,
  user,getboutique,isStaf,handlavertir,handlactivation,count,previous,next, handledisplay,truncateString,isabonned,
  addfollower,removefollover,handldesactivation}) {
  return(
    <div className='mobile'>
    <IonGrid>  
      <IonRow>
        <IonCol size='4'>
        <Image  src={`https://gaalguishop.herokuapp.com${profil.logo}`} roundedCircle  className='picprofilmobile'/>
        </IonCol>
    <IonCol size='4'> 
     <p>
    <strong> {profil.user.prenom} {profil.user.nom}</strong>
      </p>
    <p> <p><Rating name="half-rating" 
     value={profil.note_vendeur} 
     readOnly
      precision={0.1} />
     ({profil.note_vendeur})
    </p></p>
    </IonCol>
    <IonCol size='4'>
     <p className='logocolor'> {profil.nbrefollower} abonné(s) </p>  
    </IonCol>
    <IonCol size='10'>
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
     <p>(Un total de 4 avertissements entraine directement la  désactivation de la boutique)</p>
     </span>
     :
     <button className="w3-button  w3-green" onClick={handlactivation}>Reactiver la boutique</button>
     }
    </span>:
    <span className='margbtnfollow'>
    {isabonned?
    <button className="w3-button  w3-green" onClick={()=>removefollover()} isabonned={isabonned}>
    <IonIcon icon={checkmarkDoneOutline} className='iconfollower'/>abonné</button>
    :<button className="w3-button  w3-red" onClick={()=>addfollower()}>
     <IonIcon icon={addOutline} className='iconfollower'/>s abonner</button>}  
    </span>}</span>:null}
    <br/><br/>
    </IonCol>
    <IonCol size='12'> 
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
<div className='mt-4'>
   <IonGrid>
   {produit.length>0 ?
   <div>
   <h4><ShopIcon className='logocolor icondetail'/></h4>
    <IonRow> 
   { produit.map(pi=>
    <IonCol size='6' key={pi.id}> 
    <IonCard>
    <div className='singleproduit'> 
    <img src={pi.thumbnail} alt="" className="imgboutiquemobile"  />
    <p> <Link className='linkpanier' to={`/detail/${pi.slug}/${pi.nom}`}>
    <strong className='logocolor' >{truncateString(pi.nom,15)}</strong>
    </Link> </p>
    {pi.active?
     <strong> {pi.prix} {pi.devise.devise} </strong> :
     <span className='redstyle'>Inactif!</span>}
     </div>
     </IonCard> 
      </IonCol>
      )}
      </IonRow>
      </div>:<h1 className='centerbtn logocolor'>Aucun produit a afficher </h1>}
    
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




export default BoutiqueVueMobile;

/*
<div className='margseg'>
   <IonGrid>
   <IonRow>
   { produit.length>0 ? produit.map(pi=>
    <IonCol size='4' key={pi.id}> 
       <div className='singleproduit' > 
      <img src={`https://gaalguishop.herokuapp.com${pi.thumbnail}`} alt="" className="imgboutiquemobile"  />
     <p >  <Link className='linkpanier' to={`/detail/${pi.slug}/${pi.nom}`}>
       <strong >{pi.nom}</strong>
      </Link> </p>
      {pi.active?
     <strong> {pi.prix} {pi.devise.devise} </strong> :
     <span className='redstyle'>Inactif!</span>}
     </div>
      </IonCol>
      ):<h1 className='centerbtn'>Aucun produit actif </h1>}
    </IonRow>
   </IonGrid> 
    </div>
 {islog?
       <span>
      {user.isbureaucrate?
       <span>
      {profil.avertissement} avertissement(s)<br/>
      {profil.nbredesactivation} desactivation(s)<br/>
      {profil.active?
      <button className="w3-button  w3-red" onClick={handlavertir} >
     Avertir le vendeur</button>:
     <button className="w3-button  w3-red" onClick={handlactivation}>Reactiver la boutique</button>
     }
    </span>:
    <>
    <FoolowBoutiquevu  user_id={user.id} boutique_id={profil.id} getboutique={getboutique}/>
    </>}</span>:null}
    <br/><br/>


    */
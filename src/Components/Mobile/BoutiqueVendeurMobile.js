import React from 'react';
import { IonGrid,IonCol,IonRow, IonCard,IonLabel,IonIcon,IonButton} from '@ionic/react';
import {Form } from  'react-bootstrap'
import {pencilOutline} from 'ionicons/icons'
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import Image from 'react-bootstrap/Image'
import { Rating,} from '@mui/material';
import { ellipsisHorizontalOutline } from 'ionicons/icons'
import {Link} from 'react-router-dom'
import CreateIcon from '@material-ui/icons/Create';
import ReactPaginate from 'react-paginate';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ShopIcon from '@mui/icons-material/Shop';
import Button from '@mui/material/Button';


 
function BoutiqueVendeurMobile({produit,botique,iref,handleprofil,count,next,previous,
 handleajout,handlopen,handledisplay,handlemodif,truncateString,handleopeneditmoney}) {
    
  return (
  <div className='mobile'>
   <IonGrid>
       <IonRow> 
        <IonCol size='4' >
        <Image  src={`https://gaalguishop.herokuapp.com${botique.logo}`} roundedCircle className='imgprofile'/>
         <Button
        className='btndrop'
        component="label">
        <CameraAltIcon />
         <input
        type="file"
        accept="image/*"
        hidden
        onChange={handleprofil}/>
        </Button>
        </IonCol>
        <IonCol size='4'>
        <p><Rating name="half-rating" 
            value={botique.note_vendeur} 
            readOnly
           precision={0.1}
          sx={{
         "& .MuiRating-iconFilled": {
         color: "#C16A39 "
         },}}
            />
           </p>
           <p>
           note  ({botique.note_vendeur})
           </p>
          </IonCol>
          <IonCol size='4'>
        <p className='centerbtn logocolor'>{botique.nbrefollower} </p>  
        <p className='centerbtn'>abonné(s)</p>
        </IonCol>
        <p className='centerbtn'>
        {botique.active? 
      <>
      botique.comptegaalguimoney!==null?
      <button  
       onClick={handleajout} 
      className="w3-button w3-blue">
          Ajouter un produit
       </button>:
        <button  
      onClick={handleopeneditmoney}  
      className="w3-button w3-blue">
      Lier un compte GaalguiMoney
       </button>
       </>:
      <p className='redstyle'>Boutique inactive!</p>}
        </p>
      <IonCol size='12'>
       <p>{botique.description}<button className='btndrop' onClick={handlopen}>
      <CreateIcon className='logocolor'/></button></p>
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
    <div className='singleproduit' > 
    <img src={pi.thumbnail} alt="" className="imgboutiquemobile"  />
    <p> <Link className='linkpanier' to={`/detail/${pi.slug}/${pi.nom}`}>
    <strong >{truncateString(pi.nom,15)}</strong>
    </Link> </p>
    {pi.active?
     <strong> {pi.prix} {pi.devise.devise} </strong> :
     <span className='redstyle'>Inactif!</span>}
     <button className='btndrop' onClick={()=>handlemodif(pi.slug,pi.nom,pi.variation)}>
     <CreateIcon className='logocolor'/>
    </button> 
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
  );
}

  

export default BoutiqueVendeurMobile;


/*
 <IonCol size='12'>
        <IonSegment value= {seg} className='segboutiquevendeur'>
       <IonSegmentButton className='segbtnboutique' onClick={handleproduitactif} value='prodactif'>
        <IonLabel>Produits actifs</IonLabel>
           </IonSegmentButton>
        <IonSegmentButton className='segbtnboutique' onClick={handlevendu} value='prodvendu'>
        <IonLabel>Produits vendus</IonLabel>  
        </IonSegmentButton>
            </IonSegment>
            </IonCol>
          </IonRow>
      </IonGrid> 
   
   <div>
  {prodactif?
  <div className='margseg'>
   <IonGrid>
   <IonRow>
   { produit.length>0 ? produit.map(pi=>
    <IonCol size='4' key={pi.id}> 
       <div className='singleproduit' > 
      <button className=' btndrop ' onClick={()=>handlepopen(pi.id,pi.nom,pi.slug)}> 
        <IonIcon icon={ellipsisHorizontalOutline} className='zoomicon'/></button>
      <img src={`https://gaalguishop.herokuapp.com${pi.thumbnail}`} alt="" className="imgboutiquemobile"  />
     <p >  <Link className='linkpanier' to={`/detail/${pi.slug}/${pi.nom}`}>
       <strong >{pi.nom}</strong>
      </Link> </p>
      {pi.active?
     <strong> {pi.prix} {pi.devise.devise} </strong> 
     :<span className='redstyle'>Inactif!</span>}
     </div>
      </IonCol>
      ):<h1 className='centerbtn'>Aucun produit actif </h1>}
    </IonRow>
   </IonGrid> 
    </div>
   :null}
  {prodvendu?
    <div>
    <IonGrid>
    <IonRow>
    {produitvendu.length>0 ? produitvendu.map(pi=>
    <IonCol size='4' key={pi.id}>
      <div className='singleproduit'>
      <img src={`https://gaalguishop.herokuapp.com${pi.thumbnail}`} alt="" className="imgboutiquemobile"  />
      <Link className='linkpanier' to={`/detail/${pi.slug}/${pi.nom}`}>
       <p className='centerbtn'> <strong >{pi.nom}</strong></p></Link>
       <p>
       <strong> {pi.prix} {pi.devise.devise} </strong><br/>  
        <span className='redstyle'>{pi.vendu_qte} vendu(s)</span>       
       </p> 
 
       </div>
      </IonCol>
      ):<h1 className='centerbtn'>Aucun produit vendu </h1>}
     </IonRow>
   </IonGrid>
    </div>
  
  :null}
  </div>*/
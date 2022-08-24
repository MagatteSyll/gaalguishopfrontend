import React from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';
import {Button} from  'react-bootstrap'
import {IonCard, IonGrid, IonCol,IonRow,IonText} from '@ionic/react'
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
 

function PanierDesk({cartproduit, handleplus, handleminus,handleremove,truncateString,
  handlecommande,handleplunique,count,next,previous,handledisplay}) {
  return (
   <div className='desk'>
    {cartproduit.length>0?
    <div>
    <IonGrid>
    <IonRow>
    {cartproduit.map(cart=>
      <IonCol size='6' key={cart.id}>
    {cart.product.variation===true?
     <IonCard className='cartpanierdesk'>
      <IonRow>
      <IonCol size='4'> 
     <Link className='linkpanier' 
     to={`detail/${cart.imageproduct.produit.slug}/${cart.imageproduct.produit.nom}`}>
      <p><strong>{truncateString(cart.imageproduct.produit.nom,30)}{ }</strong></p>
      </Link>
        <p> couleur <strong>{cart.imageproduct.color}</strong></p>
        <p> taille <strong>{cart.imageproduct.size}</strong></p>
        <p>poids  <strong> {cart.product.poids} {cart.product.unite_mesure_poids}</strong></p>
       <p>quantite <strong>{cart.quantity}</strong></p>
       <p>prix unitaire <strong>{cart.imageproduct.produit.prix}  {cart.imageproduct.produit.devise.devise} </strong></p>
      <p>sous total <IonText className='redstyle'> {cart.subtotal} {cart.imageproduct.produit.devise.devise} 
       </IonText> </p>
      <p className='mt-3'>
      {cart.imageproduct.active?
      <span>
      {cart.imageproduct.quantite>=cart.quantity?
      <Button variant="outline-warning"
       onClick={()=>handleplus(cart.imageproduct.produit.slug,cart.imageproduct.id)}><AddCircleIcon/>
       </Button>:null}
      <Button variant="outline-info" onClick={()=>handleminus(cart.id)} ><RemoveIcon/></Button>
      </span>:null}
      <Button  variant="outline-danger" edge='end' onClick={()=>handleremove(cart.id)} ><DeleteIcon/></Button>
      </p>
      </IonCol>
       <IonCol size='4'>
      <img src={`https://gaalguishop.herokuapp.com${cart.imageproduct.image}`} alt='' className='imgpanierdesk' />
      </IonCol>
      <IonCol size='4'>
      {cart.imageproduct.active?
       <p>
       {cart.imageproduct.quantite>=cart.quantity?
       <span>
       <Button  variant="dark" edge='start'
        onClick={()=>handlecommande(cart.id ,cart.imageproduct.produit.nom,cart.imageproduct.produit.slug)}>
        Commander</Button><br/>
        </span>:<span> <IonText >
         Diminuez la quantite pour pouvoir  commander  ce produit
        </IonText></span>}
        <br/><br/>
       <IonText className='redstyle'>{cart.imageproduct.quantite} disponible(s)</IonText></p>:
       <IonText className='redstyle'>Produit inactif!</IonText>}
      </IonCol>
     </IonRow>
     </IonCard>:
     <IonCard>
     <IonRow>
   <IonCol size='4'>
    <Link className='linkpanier' 
     to={`detail/${cart.product.slug}/${cart.product.nom}`}>
      <p><strong>{truncateString(cart.product.nom,30)}</strong></p>
      </Link>
        <p> couleur <strong>{cart.product.couleur}</strong></p>
        <p> taille <strong>{cart.product.taille}</strong></p>
        <p>poids  <strong> {cart.product.poids} {cart.product.unite_mesure_poids}</strong></p>
       <p>quantite <strong>{cart.quantity}</strong></p>
       <p>prix unitaire <strong>{cart.product.prix}  {cart.product.devise.devise} </strong></p>
      <p>sous total <IonText className='redstyle'> {cart.subtotal} {cart.product.devise.devise} 
      </IonText> </p>
      <p className='mt-3'>
      {cart.product.active?
      <span>
      {cart.product.qte>=cart.quantity?
      <Button variant="outline-warning" onClick={()=>handleplunique(cart.product.slug)}>
      <AddCircleIcon/></Button>:null}
      <Button variant="outline-info" onClick={()=>handleminus(cart.id)} ><RemoveIcon/></Button>
      </span>:null}
      <Button  variant="outline-danger" edge='end' onClick={()=>handleremove(cart.id)} ><DeleteIcon/></Button>
      </p>
   </IonCol>
    <IonCol size='4'>
    <img src={`https://gaalguishop.herokuapp.com${cart.product.thumbnail}`} alt='' className='imgpanierdesk' />
    </IonCol>
    <IonCol size='4'>
     {cart.product.active?
       <p>
       {cart.product.qte>=cart.quantity?
       <span>
       <Button  variant="dark" edge='start' 
       onClick={()=>handlecommande(cart.id ,cart.product.nom,cart.product.slug)}>Commander</Button><br/>
       </span>:<span>
       <IonText > 
       Diminuez la quantite pour pouvoir  commande  ce produit</IonText>
       </span>}
        <br/><br/>
       <IonText className='redstyle'>{cart.product.qte} disponible(s)</IonText></p>:
       <IonText className='redstyle'>Produit inactif!</IonText>}
      </IonCol>
      </IonRow>
     </IonCard>}
      </IonCol>)}
    </IonRow>
    </IonGrid>
    </div>
      :<h1>Oups votre panier est vide <Link to='/' className='w3-purple'> Commencez vos Shoppings</Link></h1>}
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

export default PanierDesk;



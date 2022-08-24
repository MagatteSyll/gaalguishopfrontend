import React,{useState,useEffect,} from 'react'
import axiosInstance from '../axios'
import { Link } from 'react-router-dom';
import Modal from 'react-modal'
import {toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { useHistory } from 'react-router';
import Carousel from 'react-bootstrap/esm/Carousel'
import {IonCol, IonGrid, IonLoading, IonRow, IonText,IonItem,IonIcon,IonSegment,IonAlert} from '@ionic/react'
import {arrowUndoOutline,} from 'ionicons/icons'
import {Form ,Col,Button} from  'react-bootstrap'
import Image from 'react-bootstrap/Image'



function RechercheCommande(props) {
 const [commande,setcommande]=useState([])
 let id =props.match.params.id
 const user=props.user
 const [loaded,setloaded]=useState(false)
 const  [data, setdata] = useState()
 const [showLoading, setShowLoading] = useState(true);
 const [etat,setetat]=useState("")

 const history=useHistory()
  const notify = () => toast.success("Commande annulée !",{
    position:toast.POSITION.TOP_CENTER,
    autoClose:false
  });
  const erreur = () => toast.error("Erreur d annulation!Verifiez les credentiels entrés!",{
    position:toast.POSITION.TOP_CENTER,
    autoClose:false
  });


  const trou = () => toast.error("Commande non trouvee !",
{
  position:toast.POSITION.TOP_CENTER,
  autoClose:false
});
    useEffect(()=>{
        
        handlecomande()
    },[id])

const handlecomande=()=>{
 axiosInstance
        .post('staff/commande/',{id:id}) 
        .then(res=>{
          //  console.log(res.data)
            setcommande(res.data)
           setloaded(true)
        })
        .catch(()=>{
          history.push('/accueil')
          trou()
        })
}

  const handlecommandepot=id_commande=>{
     axiosInstance
     .post('staff/depotcommande/',{id:id_commande})
     .then(res=>{
       handlecomande()

     })
  }
const handlecommanderetrait=id_commande=>{
     axiosInstance
     .post('staff/retraitcommande/',{id:id_commande})
     .then(res=>{
       handlecomande()

     })
  }
const handletat=e=>{
  setetat(e.target.value)
}

const changement=()=>{
   if(etat!=="")
   {
  axiosInstance
  .post('staff/modificationcommande/',{id:id,etat:etat})
  .then(()=>{
    handlecomande()
  })
   }
  return;
} 


const handlennulation=()=>{
  history.push(`/annulationcommande/${id}`)
}


 return (
   <div>
    {loaded?
   <div className=" container row -3">
   <IonGrid>
  {commande.produitcommande.product.variation===true?
   <div>
  <IonRow>
 <IonCol size='6'>
  {commande.statut_commande==="produit en attente de livraison "?
    <h3> ****Commande en attente d etre déposée par le vendeur</h3>:
     commande.statut_commande==="produit en cours de livraison "?
     <h3>***Produit en attente d etre livré au client</h3>:
      commande.statut_commande==="produit livré"?
    <h4> Produit déja livré au client!</h4>:null}
 <p> Commande numero <strong> {commande.id}</strong>  </p>
 <p> produit <strong> {commande.produitcommande.imageproduct.produit.nom}</strong></p>
   <p>taille <strong>{commande.produitcommande.imageproduct.size}</strong> </p>
   <p>couleur  <strong> {commande.produitcommande.imageproduct.color}</strong></p>
   <p>  date de la commande : <strong>{new Date(commande.created_at).toLocaleDateString()} 
  </strong></p>
   <p> prix unitaire du produit <strong> {commande.produitcommande.imageproduct.produit.prix}
   </strong> {commande.produitcommande.imageproduct.produit.devise.devise}</p>
    <p>Quantité <strong>{commande.produitcommande.quantity}</strong></p>
      <p>Frais de livraison <strong>{commande.livraison} </strong>
     {commande.produitcommande.product.devise.devise}</p>
   <p>Montant de la commande <strong>{commande.total}
    </strong> {commande.produitcommande.imageproduct.produit.devise.devise}</p> 
     <p> status de la commande <strong> 
    {commande.statut_commande} </strong></p>
    <p> adresse de livraison <strong> 
   {commande.adress.region.region},{commande.adress.adress} </strong></p>
   {commande.statut_commande==="produit en attente de livraison "?
   <>
   <p> commission de la plateforme <strong>{commande.commission}
   </strong> {commande.produitcommande.imageproduct.produit.devise.devise}</p>
   <p>Montant a remettre au vendeur <IonText className='redstyle'>
   {commande.montant_vendeur} {commande.produitcommande.imageproduct.produit.devise.devise}
  </IonText></p>
  </>:null}
  {user.isbureaucrate?
      <>
      {commande.statut_commande==="produit en attente de livraison "? 
   <>  <button className="w3-btn w3-round-xxlarge w3-green"
    onClick={()=>handlecommandepot(commande.id)}>Confirmer le depot du produit</button>
    <br/><br/> <br/><br/> <br/><br/>
      <span>
   <p><Link to={`/boutique/${commande.produitcommande.product.boutique.id}/${commande.produitcommande.product.vendeur.prenom+""+commande.produitcommande.product.vendeur.nom}`}>
    Voir le  vendeur </Link></p></span>
    <p > <button className="w3-btn w3-round-xxlarge w3-red" 
     onClick={handlennulation}>Annulation de la commande </button></p>
    </>
    :
    commande.statut_commande==="produit en cours de livraison "?
     <button className="w3-btn w3-round-xxlarge w3-green" 
     onClick={()=>handlecommanderetrait(commande.id)}>Confirmer la livraison au client</button>:
      commande.statut_commande==="produit livré"?
    <> 
   
   <IonRow>
    <IonCol size='8' className='centerbtn'>
     <select
     onChange={handletat}
     className="w3-select">
      <option value="" disabled selected>Modifier le status de la commande</option>
      <option value="produit en attente de livraison " >produit en attente de livraison </option>
      <option value="produit en cours de livraison " >produit en cours de livraison</option>
      <option value="produit livré" >produit livré</option>
      </select>
       </IonCol>
       <IonCol size='4'>
       <button disabled={etat===""} className="w3-btn w3-round-xlarge w3-green" 
       onClick={changement}>Changer</button>
        </IonCol>
       </IonRow>
    </>:null}
    </>:null}
 </IonCol>
  <IonCol size='6'>
   <h4 className='centerbtn'><Link  className='linkpanier'
   to={`/detail/${commande.produitcommande.product.slug}/${commande.produitcommande.product.slug}`}>{commande.produitcommande.product.nom}</Link></h4>
    <Image className='imgdetail' 
    src={`https://gaalguishopbackend.herokuapp${commande.produitcommande.product.thumbnail}`} />

    </IonCol>
 </IonRow>
   </div>:
   <div>
      <IonRow>
      
    <IonCol size='6'>
    <IonItem>
   <Link to='/'><IonIcon icon={arrowUndoOutline} className='zoomicon retour'/></Link> 
    </IonItem>
     {commande.statut_commande==="produit en attente de livraison "?
    <h3> ****Commande en attente d etre déposée par le vendeur</h3>:
     commande.statut_commande==="produit en cours de livraison "?
     <h3>***Produit en attente d etre livré au client</h3>:
      commande.statut_commande==="produit livré"?
    <h4> Produit déja livré au client!</h4>:null}
     <p> Commande numero <strong> {commande.id}</strong>  </p>
     <p> produit <strong> {commande.produitcommande.product.nom}</strong></p>
     <p>taille <strong>{commande.produitcommande.product.taille}</strong> </p>
    <p>couleur  <strong> {commande.produitcommande.product.couleur}</strong></p>
      <p>  date de la commande : <strong>{new Date(commande.created_at).toLocaleDateString()} 
     </strong></p>
    <p> prix unitaire du produit <strong> {commande.produitcommande.product.prix}
     </strong> {commande.produitcommande.product.devise.devise}</p>
    <p>Quantité <strong>{commande.produitcommande.quantity}</strong></p>
    <p>Frais de livraison <strong>{commande.livraison}</strong>
     {commande.produitcommande.product.devise.devise}</p>
    <p>Montant de la commande <strong>{commande.total}
     </strong> {commande.produitcommande.product.devise.devise}</p> 
     <p> status de la commande <strong> 
     {commande.statut_commande} </strong></p>
     <p> adresse de livraison <strong> 
     {commande.adress.region.region},{commande.adress.adress} </strong></p>
    {commande.statut_commande==="produit en attente de livraison "?
    <> <p> commission de la plateforme <strong>{commande.commission}
     </strong> {commande.produitcommande.product.devise.devise}</p>
      <p>Montant a remettre au vendeur <IonText className='redstyle'>
     {commande.montant_vendeur} {commande.produitcommande.product.devise.devise}</IonText></p></>:null}
      {user.isbureaucrate?
      <>
      {commande.statut_commande==="produit en attente de livraison "? 
   <>  <button className="w3-btn w3-round-xxlarge w3-green"
    onClick={()=>handlecommandepot(commande.id)}>Confirmer le depot du produit</button>
    <br/><br/> <br/><br/> <br/><br/>
      <span>
   <p><Link to={`/boutique/${commande.produitcommande.product.boutique.id}/${commande.produitcommande.product.vendeur.prenom+""+commande.produitcommande.product.vendeur.nom}`}>
    Voir le  vendeur </Link></p></span>
    <p > <button className="w3-btn w3-round-xxlarge w3-red" 
     onClick={handlennulation}>Annulation de la commande </button></p>
    </>
    :
    commande.statut_commande==="produit en cours de livraison "?
     <button className="w3-btn w3-round-xxlarge w3-green" 
     onClick={()=>handlecommanderetrait(commande.id)}>Confirmer la livraison au client</button>:
      commande.statut_commande==="produit livré"?
    <> 
     <span>
   <p><Link to={`/boutique/${commande.produitcommande.product.boutique.id}/${commande.produitcommande.product.vendeur.prenom+""+commande.produitcommande.product.vendeur.nom}`}>
    Voir le  vendeur </Link></p></span>
   <IonRow>
    <IonCol size='8' className='centerbtn'>
     <select
     onChange={handletat}
     className="w3-select">
      <option value="" disabled selected>Modifier le status de la commande</option>
      <option value="produit en attente de livraison " >produit en attente de livraison </option>
      <option value="produit en cours de livraison " >produit en cours de livraison</option>
      <option value="produit livré" >produit livré</option>
      </select>
       </IonCol>
       <IonCol size='4'>
       <button disabled={etat===""} className="w3-btn w3-round-xlarge w3-green" 
       onClick={changement}>Changer</button>
        </IonCol>
       </IonRow>
    </>:null}
    </>:null}
    </IonCol>
    <IonCol size='6'>
    <h4 className='centerbtn'><Link  className='linkpanier'
    to={`/detail/${commande.produitcommande.product.slug}/${commande.produitcommande.product.slug}`}>{commande.produitcommande.product.nom}</Link></h4>
   <Image className='imgdetail' 
    src={`https://gaalguishopbackend.herokuapp${commande.produitcommande.product.thumbnail}`} />
      </IonCol>
      </IonRow>
      </div>}  
  </IonGrid>
  </div>:null} 
  
     </div>
    )
}

export default RechercheCommande




{
  /*
  {commande.statut_commande==="produit en attente de livraison "?
          {/*  <IonCol size='6' className='mt-3'>
             <IonItem>
           <Link to='/'><IonIcon icon={arrowUndoOutline} className='zoomicon retour'/></Link> 
            </IonItem>
            <h3> ****Commande en attente d etre déposée par le vendeur</h3>
            <p> Commande numero <strong> {commande.id}</strong>  </p>
            <p> produit <strong> {commande.produitcommande.product.nom}</strong></p>
             <p>taille <strong>{commande.produitcommande.product.taille}</strong> </p>
             <p>couleur  <strong> {commande.produitcommande.product.couleur}</strong></p>
             <p>  date de la commande : <strong>{new Date(commande.created_at).toLocaleDateString()} 
             </strong></p>
            <p> prix unitaire du produit <strong> {commande.produitcommande.product.prix}
            </strong> {commande.produitcommande.product.devise.devise}</p>
             <p>Quantité <strong>{commande.produitcommande.quantity}</strong></p>
            <p>Montant de la commande <strong>{commande.produitcommande.subtotal}
            </strong> {commande.produitcommande.product.devise.devise}</p> 
            <p> status de la commande <strong> 
            {commande.statut_commande} </strong></p>
            <p> adresse de livraison <strong> 
            {commande.adress.region.region},{commande.adress.adress} </strong></p>
            <p> commission de la plateforme <strong>{commande.commission}
            </strong> {commande.produitcommande.product.devise.devise}</p>
            <p>Montant a remettre au vendeur <IonText className='redstyle'>
             {commande.montant_vendeur} {commande.produitcommande.product.devise.devise}</IonText></p>
              {user.isbureaucrate?null:
             <button className="w3-btn w3-round-xxlarge w3-green"
              onClick={()=>handlecommandepot(commande.id)}>Confirmer le depot du produit</button>}
            </IonCol>: 
            commande.statut_commande==="produit en cours de livraison "?
            <IonCol size='6'>
             <IonItem>
           <Link to='/'><IonIcon icon={arrowUndoOutline} className='zoomicon retour'/></Link> 
             </IonItem>
            <h3>***Produit en attente d etre livré au client</h3>
            <p> Commande numero <strong> {commande.id}</strong>  </p>
            <p> produit <strong> {commande.produitcommande.product.nom}</strong></p>
             <p>taille <strong>{commande.produitcommande.product.taille}</strong> </p>
             <p>couleur  <strong> {commande.produitcommande.product.couleur}</strong></p>
              <p>  date de la commande  <strong>{new Date(commande.created_at).toLocaleDateString()} 
             </strong></p>
              <p> prix unitaire du produit <strong> {commande.produitcommande.product.prix} 
            </strong> {commande.produitcommande.product.devise.devise}
            </p>
            <p>Quantité <strong>{commande.produitcommande.quantity}</strong></p>
             <p>Montant de la commande <strong>{commande.produitcommande.subtotal}
            </strong> {commande.produitcommande.product.devise.devise}</p> 
            <p> status de la commande <strong> 
            {commande.statut_commande}</strong></p>
            <p> adresse de livraison  <strong> 
            {commande.adress.region.region},{commande.adress.adress} </strong></p>
            {user.isbureaucrate?null:
             <button className="w3-btn w3-round-xxlarge w3-green" 
             onClick={()=>handlecommanderetrait(commande.id)}>Confirmer la livraison au client</button>}
            </IonCol>:
            commande.statut_commande==="produit livré"?
            <IonCol size='6'>
            <IonItem>
           <Link to='/'><IonIcon icon={arrowUndoOutline} className='zoomicon retour'/></Link> 
             </IonItem>
            <h4> Produit déja livré au client!</h4>
             <p> Commande numero <strong> {commande.id}</strong>  </p>
            <p> produit <strong> {commande.produitcommande.product.nom}</strong></p>
             <p>taille  <strong>{commande.produitcommande.product.taille}</strong> </p>
             <p>couleur   <strong> {commande.produitcommande.product.couleur}</strong></p>
             <p>  date de la commande  <strong>{new Date(commande.created_at).toLocaleDateString()}
              </strong></p>
            <p> prix unitaire du produit <strong> {commande.produitcommande.product.prix}
            </strong>  {commande.produitcommande.product.devise.devise}</p>
            <p>Quantité <strong>{commande.produitcommande.quantity}</strong></p>
             <p>Montant de la commande <strong>{commande.produitcommande.subtotal}
            </strong> {commande.produitcommande.product.devise.devise}</p> 
            <p> status de la commande <strong> 
            {commande.statut_commande}</strong></p>
            <p> adresse de livraison  <strong> 
            {commande.adress.region.region},{commande.adress.adress} </strong></p>
            </IonCol>:null}

  {user.isbureaucrate?
           <IonCol size='12'>
            <span>
            <p><Link to={`/boutique/${commande.produitcommande.product.boutique.id}/${commande.produitcommande.product.vendeur.prenom+""+commande.produitcommande.product.vendeur.nom}`}>
           Voir le  vendeur </Link></p></span>
           <IonRow>
           <IonCol size='8' className='centerbtn'>
           <select
          onChange={handletat}
          className="w3-select">
            <option value="" disabled selected>Modifier le status de la commande</option>
            <option value="produit en attente de livraison " >produit en attente de livraison </option>
            <option value="produit en cours de livraison " >produit en cours de livraison</option>
            <option value="produit livré" >produit livré</option>
            </select>
           </IonCol>
           <IonCol size='4'>
           <button disabled={etat===""} className="w3-btn w3-round-xlarge w3-green" 
           onClick={changement}>Changer</button>
           </IonCol>
           </IonRow>
           <br/>
          {commande.statut_commande==="produit en attente de livraison "?
            <p className='centerbtn'> <button className="w3-btn w3-round-xxlarge w3-red" 
             onClick={handlennulation}>Annulation de la commande </button></p>:null}
           </IonCol>:null}



  {/*   {commande.statut_commande==="produit en attente de livraison "?
            <IonCol size='6' className='mt-3'>
             <IonItem>
           <Link to='/'><IonIcon icon={arrowUndoOutline} className='zoomicon retour'/></Link> 
            </IonItem>
            <h3> ****Commande en attente d etre déposée par le vendeur</h3>
            <p> Commande numero <strong> {commande.id}</strong>  </p>
            <p> produit <strong> {commande.produitcommande.imageproduct.produit.nom}</strong></p>
             <p>taille <strong>{commande.produitcommande.imageproduct.size}</strong> </p>
             <p>couleur  <strong> {commande.produitcommande.imageproduct.color}</strong></p>
             <p>  date de la commande : <strong>{new Date(commande.created_at).toLocaleDateString()} 
             </strong></p>
            <p> prix unitaire du produit <strong> {commande.produitcommande.imageproduct.produit.prix}
            </strong> {commande.produitcommande.imageproduct.produit.devise.devise}</p>
             <p>Quantité <strong>{commande.produitcommande.quantity}</strong></p>
            <p>Montant de la commande <strong>{commande.produitcommande.subtotal}
            </strong> {commande.produitcommande.imageproduct.produit.devise.devise}</p> 
            <p> status de la commande <strong> 
            {commande.statut_commande} </strong></p>
            <p> adresse de livraison <strong> 
            {commande.adress.region.region},{commande.adress.adress} </strong></p>
            <p> commission de la plateforme <strong>{commande.commission}
            </strong> {commande.produitcommande.imageproduct.produit.devise.devise}</p>
            <p>Montant a remettre au vendeur <IonText className='redstyle'>
             {commande.montant_vendeur} {commande.produitcommande.imageproduct.produit.devise.devise}
             </IonText></p>
             {user.isbureaucrate?null:
             <button className="w3-btn w3-round-xxlarge w3-green"
              onClick={()=>handlecommandepot(commande.id)}>Confirmer le depot du produit</button>}
            </IonCol>: 
            commande.statut_commande==="produit en cours de livraison "?
            <IonCol size='6'>
             <IonItem>
           <Link to='/'><IonIcon icon={arrowUndoOutline} className='zoomicon retour'/></Link> 
             </IonItem>
            <h3>***Produit en attente d etre livré au client</h3>
            <p> Commande numero <strong> {commande.id}</strong>  </p>
            <p> produit <strong> {commande.produitcommande.imageproduct.produit.nom}</strong></p>
             <p>taille <strong>{commande.produitcommande.imageproduct.size}</strong> </p>
             <p>couleur  <strong> {commande.produitcommande.imageproduct.color}</strong></p>
             <p>  date de la commande : <strong>{new Date(commande.created_at).toLocaleDateString()} 
             </strong></p>
            <p> prix unitaire du produit <strong> {commande.produitcommande.imageproduct.produit.prix}
            </strong> {commande.produitcommande.imageproduct.produit.devise.devise}</p>
             <p>Quantité <strong>{commande.produitcommande.quantity}</strong></p>
            <p>Montant de la commande <strong>{commande.produitcommande.subtotal}
            </strong> {commande.produitcommande.imageproduct.produit.devise.devise}</p> 
            <p> status de la commande <strong> 
            {commande.statut_commande} </strong></p>
            <p> adresse de livraison <strong> 
            {commande.adress.region.region},{commande.adress.adress} </strong></p>
             {user.isbureaucrate?null:
            <button className="w3-btn w3-round-xxlarge w3-green" 
             onClick={()=>handlecommanderetrait(commande.id)}>Confirmer la livraison au client</button>}
            </IonCol>:
            commande.statut_commande==="produit livré"?
            <IonCol size='6'>
            <IonItem>
           <Link to='/'><IonIcon icon={arrowUndoOutline} className='zoomicon retour'/></Link> 
             </IonItem>
            <h4> Produit déja livré au client!</h4>
             <p> Commande numero <strong> {commande.id}</strong>  </p>
            <p> produit <strong> {commande.produitcommande.imageproduct.produit.nom}</strong></p>
             <p>taille  <strong>{commande.produitcommande.imageproduct.size}</strong> </p>
             <p>couleur   <strong> {commande.produitcommande.imageproduct.color}</strong></p>
             <p>  date de la commande  <strong>{new Date(commande.created_at).toLocaleDateString()}
              </strong></p>
            <p> prix unitaire du produit <strong> {commande.produitcommande.imageproduct.produit.prix}
            </strong>  {commande.produitcommande.imageproduct.produit.devise.devise}</p>
            <p>Quantité <strong>{commande.produitcommande.quantity}</strong></p>
             <p>Montant de la commande <strong>{commande.produitcommande.subtotal}
            </strong> {commande.produitcommande.imageproduct.produit.devise.devise}</p> 
            <p> status de la commande <strong> 
            {commande.statut_commande}</strong></p>
            <p> adresse de livraison  <strong> 
            {commande.adress.region.region},{commande.adress.adress} </strong></p>
            </IonCol>:null}*/}
       {/*     <IonCol size='6'>
            <h4 className='centerbtn'><Link  className='linkpanier'
            to={`/detail/${commande.produitcommande.imageproduct.produit.slug}/${commande.produitcommande.imageproduct.produit.nom}`}>
            {commande.produitcommande.imageproduct.produit.nom}</Link></h4>
            <Image className='imgdetail' 
            src={`https://gaalguishopbackend.herokuapp${commande.produitcommande.imageproduct.image}`} />
            </IonCol>

           {user.isbureaucrate?
           <IonCol size='12'>
            <span>
            <p><Link 
            to={`/boutique/${commande.produitcommande.imageproduct.produit.boutique.id}/${commande.produitcommande.imageproduct.produit.vendeur.prenom+""+commande.produitcommande.imageproduct.produit.vendeur.nom}`}>
            Voir le  vendeur </Link></p></span>
           <IonRow>
           <IonCol size='8' className='centerbtn'>
           <select
          onChange={handletat}
          className="w3-select">
            <option value="" disabled selected>Modifier le status de la commande</option>
            <option value="produit en attente de livraison " >produit en attente de livraison </option>
            <option value="produit en cours de livraison " >produit en cours de livraison</option>
            <option value="produit livré" >produit livré</option>
            </select>
           </IonCol>
           <IonCol size='4'>
           <button disabled={etat===""} className="w3-btn w3-round-xlarge w3-green" 
           onClick={changement}>Changer</button>
           </IonCol>
           </IonRow><br/>
             {commande.statut_commande==="produit en attente de livraison "?
            <p className='centerbtn'> <button className="w3-btn w3-round-xxlarge w3-red" 
             onClick={handlennulation}>Annulation de la commande </button></p>:null}
           </IonCol>:null}
           </IonRow>
            </div>
            :<div>
            <IonRow> 
            <IonCol size='6'>
            <h4 className='centerbtn'><Link  className='linkpanier'
            to={`/detail/${commande.produitcommande.product.slug}/${commande.produitcommande.product.slug}`}>{commande.produitcommande.product.nom}</Link></h4>
            <Image className='imgdetail' 
            src={`https://gaalguishopbackend.herokuapp${commande.produitcommande.product.thumbnail}`} />
            </IonCol>
          {commande.statut_commande==="produit en attente de livraison "?
            <IonCol size='6' className='mt-3'>
             <IonItem>
           <Link to='/'><IonIcon icon={arrowUndoOutline} className='zoomicon retour'/></Link> 
            </IonItem>
            <h3> ****Commande en attente d etre déposée par le vendeur</h3>
            <p> Commande numero <strong> {commande.id}</strong>  </p>
            <p> produit <strong> {commande.produitcommande.product.nom}</strong></p>
             <p>taille <strong>{commande.produitcommande.product.taille}</strong> </p>
             <p>couleur  <strong> {commande.produitcommande.product.couleur}</strong></p>
             <p>  date de la commande : <strong>{new Date(commande.created_at).toLocaleDateString()} 
             </strong></p>
            <p> prix unitaire du produit <strong> {commande.produitcommande.product.prix}
            </strong> {commande.produitcommande.product.devise.devise}</p>
             <p>Quantité <strong>{commande.produitcommande.quantity}</strong></p>
            <p>Montant de la commande <strong>{commande.produitcommande.subtotal}
            </strong> {commande.produitcommande.product.devise.devise}</p> 
            <p> status de la commande <strong> 
            {commande.statut_commande} </strong></p>
            <p> adresse de livraison <strong> 
            {commande.adress.region.region},{commande.adress.adress} </strong></p>
            <p> commission de la plateforme <strong>{commande.commission}
            </strong> {commande.produitcommande.product.devise.devise}</p>
            <p>Montant a remettre au vendeur <IonText className='redstyle'>
             {commande.montant_vendeur} {commande.produitcommande.product.devise.devise}</IonText></p>
              {user.isbureaucrate?null:
             <button className="w3-btn w3-round-xxlarge w3-green"
              onClick={()=>handlecommandepot(commande.id)}>Confirmer le depot du produit</button>
            </IonCol>: null}
          
            </IonRow>
            </div>}
          </IonGrid> </div>:<IonLoading
          cssClass='my-custom-class'
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={'Chargement...'}
          duration={5000}
        />}





         */}
         







          


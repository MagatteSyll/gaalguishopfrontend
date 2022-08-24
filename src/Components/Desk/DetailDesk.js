import {starOutline} from 'ionicons/icons'
import {IonCol,  IonRow,IonGrid, IonSegment, IonText, IonIcon, } from '@ionic/react'
import Image from 'react-bootstrap/Image'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Carousel from "react-multi-carousel";
import ProduitImageDisplay from './SousComponent/ProduitImageDisplay';






function DetailDesk({produit, islog, handlecart,user,handlenonlog,produitimage,handlecartunique}) {
  return( 
    <div className='desk detaildesk'>
    <ProduitImageDisplay produitimage={produitimage} produit={produit}
    user={user} islog={islog} handlecartunique={handlecartunique} handlecart={handlecart}/>
    </div>
     ); 
}  


export default DetailDesk; 


import React,{ Fragment} from 'react';
import BarSearch from '../BarSearch';
import { NavDropdown,} from 'react-bootstrap'
import {IonIcon, IonSegment,
   IonPopover, IonText,IonListHeader, IonGrid, IonRow,
   IonList, IonCol, IonCard,IonBadge, IonItem,IonSearchbar,IonLabel} from '@ionic/react'
import {cartOutline,notificationsOutline,pricetagOutline,cashOutline,cardOutline,
  shirtOutline,walletOutline,searchOutline,
personCircleOutline,settingsOutline,caretDownOutline} from 'ionicons/icons'
import {Link} from 'react-router-dom'
import logo from '../asset/logo.jpg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications'; 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SearchIcon from '@mui/icons-material/Search';



function NavDesk({islog,handlevendre,handlenotify,handlaide,handleachat, handleboutique,
   handlecommande, handlevente,handleconnexion, handleinscription,
   handlepanier,badgecart,handlecompte,user,badgenotify,notifications,truncateString,
   handlerecherche,gosearch }) { 
      
    return (
      <div className='desk'> 
      <div className='navdesk'>
     <IonGrid>
       <IonRow>
         <IonCol size='4' className='logocol'>
          <h3>
          <img src={logo} className='logoimgdesk'/> 
         <Link to='/' className='linklogo'> GaalguiShop.com</Link>
          </h3>
           </IonCol>
           {!islog?
           <IonCol size='2'>
            <button className='buttonsegment greenstyle soulignetext' onClick={handleconnexion}>
              Connexion
            </button> 
            <button className='buttonsegment bluestyle soulignetext' onClick={handleinscription}>
              Inscription
            </button>
            </IonCol>:
            <IonCol size='2'><button className='btndrop' onClick={handlecompte}>{user.prenom}<AccountCircleIcon className='greenstyle '/> </button></IonCol>}
             <IonCol size='1'>
             <button className='btndrop' onClick={handlenotify}>
             <Badge badgeContent={badgenotify} color="error">
             <NotificationsIcon className='shopicon logocolor'/>
             </Badge>
           </button>
          </IonCol>
         <IonCol size='3' className='memarg'>
        <Me handleachat={handleachat} handleboutique={handleboutique} handlecommande={handlecommande}
        handlevente={handlevente} handleconnexion={handleconnexion} handleinscription={handleinscription} 
          handlecompte={handlecompte} islog={islog}/>
        </IonCol>
           <IonCol size='1'>
           {!islog?
            <button className=' btncart' onClick={handlepanier}>
              <ShoppingCartIcon className='shopicon logocolor'/>
            </button>:
            <button className=' btncart' onClick={handlepanier}>
            <Badge badgeContent={badgecart} color="error">
            <ShoppingCartIcon className='shopicon logocolor'/>
            </Badge>
            </button>}
            </IonCol> 
         <IonCol size='3'>
         <button className='nostylebtn' onClick={handlaide}> 
         Besoin d aide ?</button> 
        </IonCol>
        <IonCol size='3'>
        <IonSegment>  
        <button className='nostylebtn' onClick={handlevendre}> 
         <CreditCardIcon/> Vendre sur GaalguiShop</button>
        </IonSegment>
        </IonCol>
        <IonCol size='6'>
        <IonRow>
        <IonCol size='10'>
        <IonSearchbar
        onIonChange={(handlerecherche)}
        placeholder='rechercher un produit'
        onKeyPress={(e) => e.key === 'Enter' && gosearch()}
        className='searchbar blackstyle'/> 
        </IonCol>
        <IonCol size='2'>
        <button className='btndrop iconmargin ' 
        onClick={gosearch}> <SearchIcon className='shopicon logocolor'/></button>
        </IonCol>
        </IonRow>
     
        </IonCol>
       </IonRow>
     </IonGrid>
    </div>
    </div>
    )
}
function Me({handleachat, handleboutique,
  handlecommande,handlevente,handleconnexion, handleinscription
  ,handlecompte,islog}) {
  return (
    <Fragment>
    <NavDropdown
    id="nav-dropdown-dark-example"
    title={<IonText  className='dropicon'>GaalguiShop & moi <IonIcon icon={caretDownOutline}/> </IonText>}
    variant="secondary"
    className='dropdown'>
    <div >
    <NavDropdown.Item ><button onClick={handleboutique} className='btndrop'> <IonIcon icon={pricetagOutline}/> Ma boutique </button></NavDropdown.Item>
    <NavDropdown.Item ><button onClick={handleachat}  className='btndrop'> <IonIcon icon={cardOutline}/> Mes achats </button></NavDropdown.Item>
    <NavDropdown.Item > <button  onClick={handlecommande}  className='btndrop'><IonIcon icon={shirtOutline}/> Mes commandes </button> </NavDropdown.Item>
    <NavDropdown.Item ><button className='btndrop'> <IonIcon icon={walletOutline}/> Moyen de payement </button></NavDropdown.Item>
    {islog?
    <NavDropdown.Item > <button className='btndrop' onClick={handlecompte}><IonIcon icon={personCircleOutline}/>Mon compte 
    </button></NavDropdown.Item>:null}
    </div>
  </NavDropdown>
  </Fragment>
  );
}





export default NavDesk


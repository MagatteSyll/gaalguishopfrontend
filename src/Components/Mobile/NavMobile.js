import { IonCard, IonCol, IonGrid, IonRow,IonText,
  IonIcon,IonListHeader,IonPopover,IonBadge, IonSegment, IonSegmentButton,IonSearchbar} from '@ionic/react'
import React,{Fragment} from 'react'
import {pricetagOutline,notificationsOutline,cardOutline,shirtOutline,walletOutline,
  personCircleOutline,caretDownOutline,cartOutline,searchOutline} from 'ionicons/icons'
import { Link } from 'react-router-dom';
import { NavDropdown} from 'react-bootstrap'
import logo from '../asset/logo.jpg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreditCardIcon from '@mui/icons-material/CreditCard';




function NavMobile({islog,handlevendre,handlenotify,handlaide,  handleachat, handleboutique,
  handlecommande, handlevente,handleconnexion, handleinscription,
  handlepanier,badgecart,handlecompte,user,badgenotify,notifications,
  truncateString,handlerecherche,gosearch}) {
   
    return (
        <div className='mobile'>
           <IonGrid>
             <IonRow>
             <IonCol size='5'>
             <img src={logo} className='logoimgmobile'/> 
             <Link to='/' className='linklogo'> GaalguiShop.com</Link>
             </IonCol>
               <IonCol size='2' className='iconmargin'>
                  {islog?
                <button className='btndrop buttonsegment' onClick={handlecompte}><AccountCircleIcon className='greenstyle'/></button>   
             :<button className='buttonsegment' onClick={handlecompte}>
                <AccountCircleIcon/> 
                </button>}
                 </IonCol>
              <IonCol size='2' className='iconmargin'>  
                {!islog?
            <button className=' btncart buttonsegment' onClick={handlepanier}>
              <ShoppingCartIcon className='logocolor'/>
            </button>:
            <button className='btncart buttonsegment' onClick={handlepanier}>
            <Badge badgeContent={badgecart} color="error">
            <ShoppingCartIcon className=' logocolor'/>
            </Badge>
            </button>}
            </IonCol>
             <IonCol size='3'>  
             <button className='btndrop' onClick={handlenotify}>
            <Badge badgeContent={badgenotify} color="error">
             <NotificationsIcon className='logocolor'/>
             </Badge>
            </button>
             </IonCol>     
           <IonCol size='3'>
            <EtMe
            handleachat={handleachat} handleboutique={handleboutique} handlecommande={handlecommande}
            handlevente={handlevente} handleconnexion={handleconnexion} handleinscription={handleinscription}
             handlecompte={handlecompte} islog={islog}
            />
          </IonCol>
           <IonCol size='9'>
          <IonSearchbar
          className='blackcolor'
          onIonChange={(handlerecherche)}
         placeholder='recherche produit'
         onKeyPress={(e) => e.key === 'Enter' && gosearch()}
          /> 
          </IonCol>
          </IonRow>  
         </IonGrid> 
        </div>
    )
}
function EtMe({handleachat, handleboutique,
  handlecommande,handlevente,handleconnexion, handleinscription,handlecompte,islog}) {
  return (
    <Fragment> 
    <NavDropdown
    id="nav-dropdown-dark-example"
    title={<IonText  className='dropicon'>& moi <IonIcon icon={caretDownOutline}/> </IonText>}
    className='dropdown'>
    <div>
    <NavDropdown.Item ><button  onClick={handleboutique} className='btndrop'> <IonIcon icon={pricetagOutline}/> Ma boutique </button></NavDropdown.Item>
    <NavDropdown.Item ><button  onClick={handleachat} className='btndrop'> <IonIcon icon={cardOutline}/> Mes achats </button></NavDropdown.Item>
    <NavDropdown.Item > <button  onClick={handlecommande} className='btndrop'><IonIcon icon={shirtOutline}/> Mes commandes </button> </NavDropdown.Item>
    <NavDropdown.Item ><button className='btndrop'> <IonIcon icon={walletOutline}/> Moyen de payement </button>
    </NavDropdown.Item>
    {islog?
    <NavDropdown.Item > <button className='btndrop' onClick={handlecompte}><IonIcon 
    icon={personCircleOutline}/> Mon compte </button></NavDropdown.Item>:null}
    </div>
  </NavDropdown>
  </Fragment>
  );
}


export default NavMobile

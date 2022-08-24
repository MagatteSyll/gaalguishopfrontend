import { IonCard, IonCol, IonGrid, IonIcon, IonRow, IonSegment,
 IonText,IonSearchbar,IonBadge } from '@ionic/react'
import React,{useState,Fragment} from 'react'
import { useHistory } from 'react-router-dom'
import {personCircleOutline,searchOutline,notificationsOutline} from 'ionicons/icons'
import {NavDropdown} from 'react-bootstrap'
import axiosInstance from '../../axios';
import {Link} from  'react-router-dom'
import logo from '../../Components/asset/logo.jpg'





function NavStaff({user,notifications,badgenotify,handlenotify,truncateString}) {
  const history=useHistory()

  const deconnexion=()=>{
    localStorage.removeItem('__jdkm__');
    localStorage.removeItem('__jvqm__');
    axiosInstance.defaults.headers['Authorization'] = null;
    history.push('/')
    window.location.reload()
  
   }
  
    return (
    <div className='desk navdesk'>
    <IonGrid>
      <IonRow>
       <IonCol size='4' className='logocol'>
        <h3>
        <img src={logo} className='logoimgdesk'/> 
        <Link to='/' className='linklogo'> GaalguiShop.com</Link>
          </h3>
        </IonCol>
        <IonCol size='2'>
        <Me deconnexion={deconnexion} user={user}/>
        </IonCol>
        <IonCol size='7'>
          <BarSearch/>
        </IonCol>
        <IonCol size='3'>
         <IonSegment>
         {user.isbureaucrate?null:
         <button className='nostylebtn'> Aide technique</button>}
         </IonSegment> 
         <button></button>  
        </IonCol>
        {user.istechnique?
        <IonCol size='3'>
         <Notify notifications={notifications} truncateString={truncateString}
         handlenotify={handlenotify} badgenotify={badgenotify}/>
        </IonCol>:null}
      </IonRow>
    </IonGrid>
    </div>
    )
}
function BarSearch() {
  const history = useHistory();
  const  [data, setData] = useState({
      search:''
    })
       const gosearch=e=>{
        if(data.search!=="")
        {
          history.push({
          pathname: `/recherchecommande/${data.search}`
      })
    }
    return;
     
  }

  return (
      <div className=' container mb-3'>
    <IonGrid>
    <IonRow>
    <IonCol size='9'>
     <IonSearchbar
    value={data.search}
    onIonChange={e=>setData({search:e.target.value})}
    inputmode="numeric"
    type='number'
    onKeyPress={(e) => e.key === 'Enter' && gosearch()}
   placeholder='Numero de la commande '
   /> 
    </IonCol>
    <IonCol size='1'> 
    <button className='btndrop' onClick={gosearch}>
   <IonIcon icon={searchOutline} className='iconsearch'/>
   </button>  
    </IonCol>
    </IonRow>
    </IonGrid>
   </div>
    )
}

function Me({user,deconnexion}){
  return(
    <NavDropdown
    id="nav-dropdown-dark-example"
    title={<IonText> <IonIcon icon={personCircleOutline} className='iconuser' />
    <IonText className='usernom' >{user.prenom}</IonText></IonText>}
    variant="secondary">
    <div>
    <NavDropdown.Item ><button onClick={deconnexion} className='btndrop'> 
    deconnexion </button></NavDropdown.Item>     
    </div>
  </NavDropdown>
  )
}

function Notify({notifications,truncateString,handlenotify,badgenotify}) {
  return(
    <Fragment>
   <NavDropdown
    id="nav-dropdown-dark-example"
    className='dropdown'
    onClick={handlenotify}
    title={<IonText className='dropicon'><IonIcon icon={notificationsOutline} className='zoomicon'/>
  {badgenotify <1?null:
   <IonBadge color="danger" className='notifybadgestaf'>{badgenotify}</IonBadge>}
    </IonText>}>
  <Fragment>
    {notifications.length>0?
    <div>
    {notifications.map(notify=>
      <NavDropdown.Item>
      {notify.nature_notification==='probleme technique'?
      <IonText> <Link to={`/detailprobleme/${notify.id}`} className='link'> 
     {truncateString(notify.message,30)} </Link></IonText>:null}
      </NavDropdown.Item>)}
    </div>:
    <p>hello</p>}
  </Fragment>
  </NavDropdown>
  </Fragment>
  );
}

export default NavStaff


/*
  
    <div className='dropit'> 
    {notifications.map(notify=>
    <NavDropdown.Item key={notify.id}>
      ?
     <IonText> <Link to={`/detailprobleme/${notify.id}`} className='link'> 
     {truncateString(notify.message,30)} </Link></IonText>:null}
     </NavDropdown.Item>)}
     </div>
     :<NavDropdown.Item>Aucune notification technique</NavDropdown.Item>}
    </Fragment>

    */
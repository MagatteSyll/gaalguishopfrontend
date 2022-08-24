import React,{useState,useEffect,Fragment} from 'react'
import NavDesk from './Desk/NavDesk';
import NavMobile from './Mobile/NavMobile';
import {useHistory} from 'react-router-dom'
import {IonPopover} from '@ionic/react'
import {IonLoading,} from '@ionic/react'
import NavStaff from '../PageStaff/SousComp/NavStaff'
import axiosInstance from '../axios';
import axios from 'axios'
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import {Link} from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ReactPaginate from 'react-paginate';



 function NavBar({islog,handlebadge,badgecart,isStaf,truncateString,user}) {
   const history=useHistory()
   const  [popboutik, setpopboutik] = useState(false);
   const  [popvente, setpopvente] = useState(false);
   const  [popachat, setpopachat] = useState(false);
   const  [popcommande, setpopcommande] = useState(false);
   const  [showLoading, setShowLoading] = useState(true);
   const  [popanier, setpopanier] = useState(false);
   const  [notify, setnotify] = useState(false)
   const  [notifications, setnotifications] = useState([]) 
   const  [badgenotify, setbadgenotify] = useState()
   const  [result,setresult]=useState([]) 
   const  [atrouve,setatrouve]=useState("") 
   const  [opendialog,setopendialog]=useState(false)
   const  [badgeload,setbadgeload]=useState(false)
   const  [count,setcount]=useState()
   const  [previous,setprevious]=useState()
   const  [next,setnext]=useState()
  
  


  useEffect(()=>{
    handlebadge()
   // 
    setbadgeload(true)
  },[])
  useEffect(()=>{
     getnotification()

  },[])

useEffect(()=>{
  getbadge()
},[])

  const getnotification=()=>{
    if(islog){
    axiosInstance
    .get('utilisateur/getnotification/')
   //axios
   //.get('http://127.0.0.1:8000/api/utilisateur/getnotification/',
 // {headers:{
  //  'Authorization': `JWT ${localStorage.getItem('__jdkm__')}` 
  //}})
    .then(res=>{
    //  console.log(res.data)
      setnotifications(res.data.results)
      setcount((res.data.count)/10)
      setprevious(res.data.previous)
      setnotify(true)
      setnext(res.data.next)
    
    })
  }
  else{
    setnotify(true)
  }
  }
const getbadge=()=>{
   if(islog){
    axiosInstance
   .get('utilisateur/getbadge/')
   //axios
  // .get('http://127.0.0.1:8000/api/utilisateur/getbadge/',
 // {headers:{
 //   'Authorization': `JWT ${localStorage.getItem('__jdkm__')}` 
 // }})
    .then(res=>{
      //console.log(res.data)
      setbadgenotify(res.data.badge)
      setbadgeload(true)
    
    })
  }
  else{
    setbadgenotify(0)
    setbadgeload(true)
  }
}
   const handlevendre=()=>{
    history.push('/vendresurgaalguishop')
  }
  const handlesuivi=()=>{
    history.push('/suiviproduit')
  }
  const handlaide=()=>{
    history.push('/aide')
  }
  const handleboutique=()=>{
    if(islog){
      history.push('/maboutique')
    }
    else{
     history.push('/connexion') 
    }
  }
 const handlenotify=()=>{
   if(badgenotify>0){
   axiosInstance
   .put('utilisateur/handlenotify/handlenotif/')
   .then(res=>{
     console.log(res.data)
     getnotification()
     setopendialog(true)
   })}
   else{
   setopendialog(true)
   }
 }
  const handleachat=()=>{
    if(islog){

      history.push('/historiquesdachat')
    }
    else{
      history.push('/connexion')
    }
  }
  const handlecommande=()=>{
    if(islog){
      history.push('/mescommandes')
    }
    else{
     history.push('/connexion')
    }
  }
  const handlepanier=()=>{
    if(islog){
      history.push('/monpanier')
    }
    else{
      history.push('/connexion')
    }
  }
  const handleconnexion=()=>{
    history.push('/connexion')
  }
  const handleinscription=()=>{
    history.push('/inscription')
    
    
  }
  const handlecompte=()=>{
    if(islog){
    history.push('/compte')
  }
  else{
    history.push('/connexion')
  }
  }

 
const handlerecherche=e=>{
  setatrouve(e.target.value)
}

  
const gosearch=e=>{
  if(atrouve===""|| atrouve===null||atrouve===undefined || atrouve.match(/^ *$/) !== null){
    return;
  }
  history.push({
  pathname: `/resultatrechercheproduit`,
  search: '?search=' + atrouve,
  })
  window.location.reload();
    }   

const handledisplay=(data)=>{
  const  page=data.selected+1
  axiosInstance
  .get(`utilisateur/getnotification/?page=${page}`)
  .then(res=>{
  setnotifications(res.data.results)
  setnext(res.data.next)
  setprevious(res.data.previous)
  setcount((res.data.count)/10)
   })
}
const handlenotifvente=(id)=>{
  history.push(`/notificationdevente/${id}`)
  setopendialog(false)
}
const handlenotifetatcommande=(id)=>{
  history.push(`/etatcommande/${id}`)
  setopendialog(false)
}
const handlenotifannulationachat=(id)=>{
  history.push(`/annulationachat/${id}}`)
  setopendialog(false)
}
const handlenotifannulationvente=(id)=>{
  history.push(`/annulationdevente/${id}`)
  setopendialog(false)
}
const handlenotifreactivation=(id)=>{
  history.push(`/boutiquereactivation/${id}`)
  setopendialog(false)
}
const handlenotifdesactivation=(id)=>{
  console.log(id)
  history.push(`/boutiquedesactivation/${id}`)
  setopendialog(false)
}
const handlenotifavertissement=(id)=>{
  history.push(`/avertissement/${id}`)
  setopendialog(false)
}
const handlenotifnotevendeur=(id)=>{
  history.push(`/noterlevendeur/${id}`)
  setopendialog(false)
}
const handlenotiffollower=(id,slug)=>{
  history.push(`/nouveauproduit/${id}/${slug}`)
  setopendialog(false)
}
   return (
    <div>
      {isStaf?<NavStaff user={user} notifications={notifications} handlenotify={handlenotify}
       badgenotify={badgenotify} truncateString={truncateString} />:
    <Fragment>
    { badgeload && notify && badgeload ?
    <Fragment>
    <NavDesk islog={islog} handlevendre={handlevendre} handlesuivi={handlesuivi} handlaide={handlaide}
     handleachat={handleachat} handleboutique={handleboutique} handlecommande={handlecommande} popachat={popachat}
      popboutik={popboutik} popcommande={popcommande} popvente={popvente} handlecompte={handlecompte}
      handleconnexion={handleconnexion} handleinscription={handleinscription} handlepanier={handlepanier} 
       badgecart={badgecart} popanier={popanier} setpopanier={setpopanier} handlecompte={handlecompte} user={user}
        badgenotify={badgenotify} notifications={notifications} truncateString={truncateString}
         handlenotify={handlenotify} result={result} handlerecherche={handlerecherche} gosearch={gosearch}/>
    <NavMobile islog={islog} handlevendre={handlevendre} handlesuivi={handlesuivi} handlaide={handlaide}
      handleachat={handleachat} handleboutique={handleboutique} handlecommande={handlecommande}
       popachat={popachat} popboutik={popboutik} popcommande={popcommande} popvente={popvente}
         handleconnexion={handleconnexion} handleinscription={handleinscription} 
        handlepanier={handlepanier} badgecart={badgecart} popanier={popanier} setpopanier={setpopanier} handlecompte={handlecompte}
        user={user} badgenotify={badgenotify} notifications={notifications} truncateString={truncateString}
        handlenotify={handlenotify} result={result} handlerecherche={handlerecherche} 
         gosearch={gosearch}/>
        <Dialog onClose={()=>setopendialog(false)} open={opendialog}>
        {islog?
        <>
       <DialogTitle>Notifications</DialogTitle> 
        {notifications.length>0?
    <div className='dropit'> 
    {notifications.map(notify=>
    <p className='margedialog'>
      {notify.nature_notification==='avertissement'?
     <button className='btndrop' onClick={()=>handlenotifavertissement(notify.id)}>  
     {truncateString(notify.message,45)} </button> 
     :
     notify.nature_notification==='etat commande'?
     <button className='btndrop' onClick={()=>handlenotifetatcommande(notify.id)}>
      {truncateString(notify.message,45)} </button> 
     :
     notify.nature_notification==='vente'?
     <button className='btndrop' onClick={()=>handlenotifvente(notify.id)}> 
      {truncateString(notify.message,45)}</button> 
     :
     notify.nature_notification==='annulation d achat'?
     <button className='btndrop' onClick={()=>handlenotifannulationachat(notify.id)}> 
     {truncateString(notify.message,45)} </button> 
     :notify.nature_notification==="annulation de vente"?
      <button className='btndrop' onClick={()=>handlenotifannulationvente(notify.id)}>  
     {truncateString(notify.message,45)}</button> 
    :notify.nature_notification==='pour follower'?
     <button className='btndrop' onClick={()=>handlenotiffollower(notify.id,notify.produit.slug)}> 
       {truncateString(notify.message,45)}
     </button>:
     notify.nature_notification==='reactivation boutique'?
     <button className='btndrop' onClick={()=>handlenotifreactivation(notify.id)}> 
     {truncateString(notify.message,45)} </button> 
      :notify.nature_notification==='note vendeur'?
      <button className='btndrop' onClick={()=>handlenotifnotevendeur(notify.id)}> 
       {truncateString(notify.message,45)} 
     </button>:notify.nature_notification==="desactivation boutique"?
     <button className='btndrop' onClick={()=>handlenotifdesactivation(notify.id)}>{truncateString(notify.message,45)} 
     </button>
     :null}
    </p>)} 
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
     
    </div>:<p className='margedialog'>
      Oups!Vous n avez aucune notification 
    </p>}
       </>:
       <p className='margedialog'>
       <Link to='/connexion'>Se connecter </Link> ou <Link to='/inscription'> s inscrire </Link>
       </p>
}
       </Dialog>
        </Fragment>:<IonLoading
          cssClass='my-custom-class'
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={'Chargement...'}
          duration={5000}
        />}
         </Fragment>}
      
    </div>
  );
}

export default NavBar;


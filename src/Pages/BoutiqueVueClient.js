import React,{useState,useEffect,Fragment} from 'react'
import BoutiqueVueDesk from '../Components/Desk/BoutiqueVueDesk';
import BoutiqueVueMobile from '../Components/Mobile/BoutiqueVueMobile';
import {  useHistory, } from 'react-router-dom';
import axiosInstance from '../axios'
import {IonPopover} from '@ionic/react'
import axios from 'axios'

 
 

 
function BoutiqueVueClient(props) {
    let id=props.match.params.id
    let nom=props.match.params.nom
    const isStaf=props.isStaf
    const handlebadge=props.handlebadge
    const  [produit, setproduit] = useState([])
    const  [profil, setprofil] = useState({})
    const [profiload, setprofiload] = useState(false)
    const  [load, setload] = useState(false)
    const [count,setcount]=useState()
    const [previous,setprevious] =useState()
    const [next,setnext]=useState()
    const islog =props.islog
    const user=props.user
    const history=useHistory()
    const truncateString=props.truncateString
    const [isabonned, setisabonned] = useState()
    const [popen,setpopen]=useState(false)      
  
   
     useEffect(()=>{
      getproduit()
     },[])

   useEffect(()=>{
     getboutique()
   },[])


  const openPopover = () => {
    setpopen(true);
  };      
    
const getproduit=()=>{
  axiosInstance
    .get(`produit/produitduneboutique/${id}/`)
    .then(res=>{
   // console.log(res.data)
    setproduit(res.data.results)  
    setcount(res.data.count/4)
    setprevious(res.data.previous)
    setnext(res.data.next)
    setload(true)
     })}
 
const getboutique=()=>{
  axiosInstance
   .post('produit/profilboutiquevuclient/',{id:id})
  .then(res=>{
   // console.log(res.data)
    setprofil(res.data.boutique)
    setisabonned(res.data.isabonned)
    setprofiload(true)
  })}
const handledisplay=(data)=>{
  const  page=data.selected+1
  axiosInstance
  .get(`produit/produitduneboutique/${id}/?page=${page}`)
  .then(res=>{
  setproduit(res.data.results)
  setnext(res.data.next)
  setprevious(res.data.previous)
  setcount((res.data.count)/4)
        })
}
  const addfollower=()=>{
    axiosInstance
    .post('produit/addfollower/',{id_boutique:id})
    .then(res=>{
     // console.log(res.data)
    getboutique() 
   }) }
  const removefollover=()=>{
   axiosInstance
   .delete(`produit/follower/removefollower/${id}`)
    .then(res=>{
    // console.log(res.data)
    getboutique()
         })
     }

const handlavertir=()=>{
   history.push(`/avertirlevendeur/${id}/${profil.user.prenom+""+profil.user.nom}`)
}
const handldesactivation=()=>{
   history.push(`/desactivationboutique/${id}/${profil.user.prenom+""+profil.user.nom}`)
}
const handlactivation=()=>{
history.push(`/reactivationboutique/${id}/${profil.user.prenom+""+profil.user.nom}`)
}


    return (
      <div>
        {profiload && load  && nom===profil.user.prenom+""+profil.user.nom?
        <div>
          {user.id===profil.user.id? history.push('/maboutique'):
          <Fragment>
        <BoutiqueVueDesk profil={profil} 
         produit={produit}   isStaf={isStaf} islog={islog}  user={user} handlavertir={handlavertir}
         handlactivation={handlactivation} count={count} previous={previous} next={next} isabonned={isabonned}
         handledisplay={handledisplay}  truncateString={truncateString} addfollower={addfollower}
         removefollover={removefollover} handldesactivation={handldesactivation} />
         <BoutiqueVueMobile  profil={profil} produit={produit}  handledisplay={handledisplay}
         isStaf={isStaf} islog={islog}  user={user} handlavertir={handlavertir} truncateString={truncateString}
        handlactivation={handlactivation} count={count} previous={previous} next={next} isabonned={isabonned}
        addfollower={addfollower} removefollover={removefollover} handldesactivation={handldesactivation} />
       </Fragment>}
       </div>:null}
         
        </div>  
          
    ) 
} 



  

export default BoutiqueVueClient



import React,{useState,useEffect,Fragment} from 'react'
import axiosInstance from '../axios'
import { IonCol,IonModal, IonRow,IonGrid, } from '@ionic/react'
import { useHistory } from 'react-router-dom'
import CompteDesk from '../Components/Desk/CompteDesk'
import CompteMobile from '../Components/Mobile/CompteMobile'

function Compte({user,load,getuser}) {
    const history=useHistory()
    const  [modal, setmodal] = useState(false)
    const  [data, setdata] = useState({
        prenom:"",
        nom:"",
        tel:""
    })

  
 const handleclick=()=>{
 setmodal(true)
 }
 const handledata=e=>{
    setdata({
        ...data,[e.target.name]:e.target.value.trim()
    })
 }
 const handlesubmit=e=>{
     e.preventDefault()
     let formdata=new FormData()
     if(data.nom===""){
        formdata.append('nom',user.nom)
      }
      else{
        formdata.append('nom',data.nom)
      }
    if(data.prenom===""){
        formdata.append('prenom',user.prenom)
      }
      else{
        formdata.append('prenom',data.prenom)
      }
      if(data.tel===""){
        formdata.append('phone',user.phone)
      }
      else{
        formdata.append('phone',data.tel)
      }
    axiosInstance
    .put('utilisateur/modifcred/modif/',formdata)
    .then((res=>{
       // console.log(res.data)
       getuser()
       setmodal(false)

    }))
    
 }
 const deconnexion=()=>{
  localStorage.removeItem('__jdkm__');
  localStorage.removeItem('__jvqm__');
  axiosInstance.defaults.headers['Authorization'] = null;
  history.push('/')
  window.location.reload()

 }

    return (
        
        <div >
       {load?
      
      <Fragment>
     <CompteDesk user={user} handleclick={handleclick} deconnexion={deconnexion}/>
     <CompteMobile user={user} handleclick={handleclick} deconnexion={deconnexion}/>
     </Fragment>
      : null}
      <IonModal
        isOpen={modal}>

      <div className='container mt-5'>
      <form onSubmit={handlesubmit}>

         <IonGrid>
           <IonRow>
             <IonCol size='12'>
            <label>Prenom</label>
            <input type="text" className="w3-input w3-border" placeholder="prenom"
             onChange={handledata} name='prenom' required defaultValue={user.prenom} />
             </IonCol>
            <IonCol size='12'>
            <label>Nom</label>
            <input type="text" placeholder="nom" onChange={handledata} name='nom' className="w3-input w3-border"
             required defaultValue={user.nom} />
            </IonCol>
            <IonCol size='12'>
            <input className="w3-input w3-border"
            type="tel" defaultValue={user.phone} onChange={handledata} name='tel' required /><br/>
            </IonCol>
            <IonCol size='5' className='centerbtn'>
            <button class="w3-btn w3-round-xxlarge w3-green centerbtn" type='submit'>Modifier</button>
            </IonCol>
            <IonCol size='5' className='centerbtn'>
            <button class="w3-btn w3-round-xxlarge w3-blue centerbtn" onClick={()=>setmodal(false)} >Annuler</button>
            </IonCol>
           </IonRow>
         </IonGrid>  
    </form>
    </div>
     </IonModal> 
        </div>
    )
}

export default Compte

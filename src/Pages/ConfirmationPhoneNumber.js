import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {IonText,IonGrid,IonRow,IonCol}from '@ionic/react'
import {useHistory} from 'react-router-dom'
import axiosInstance from'../axios'
import {toast } from 'react-toastify'





function ConfirmationPhoneNumber(props){
    let id=props.match.params.id
    let nom=props.match.params.nom
    let code_id=props.match.params.code_id
    const [user,setuser]=useState([])
    const [load,setload]=useState(false)
    const [code,setcode]=useState("")
    const history=useHistory()
    const [minute,setminute]=useState({mn:0})
    const [second,setsecond]=useState({sc:0})

  
    useEffect(()=>{
        getuser()
    },[])
    const getuser=()=>{
      axiosInstance
      .post('utilisateur/getnewuser/',{id:id})
      .then(res=>{
        setuser(res.data)
        setload(true)
      })
    }
const erreurmdp = () => toast.success("Inscription reussie",{
    position:toast.POSITION.TOP_CENTER,
    autoClose:false
    });
const verifier = () => toast.error("Code invalide!",{
    position:toast.POSITION.TOP_CENTER, 
    autoClose:false
    });
 const  handlecode=e=>{
    setcode(e.target.value)
  }
  const handleconfir=e=>{
    e.preventDefault()
   // console.log(code)
   axiosInstance
   .post('utilisateur/phonecodeconfirmation/',{code:code,code_id:code_id,id:id})
   //.post('http://127.0.0.1:8001/api/utilisateur/phonecodeconfirmation/',{code:code,code_id:code_id,id:id})
    .then((res) => {
               
          history.push('/connexion')
        
            })
   .catch(()=>{
      verifier()
      return;
   })
  }

return(
  <div>
   {load && nom===user.prenom+""+user.nom && user.conform_phone==false ?
    <div>
      <IonGrid>
       <IonRow>
       <IonCol size='12'>
       <form className='formmodal' onSubmit={handleconfir}>
          <IonRow>
            <IonCol size='8'>
            <p className='centerbtn' ><label ><b>Code de verification  du numero de telephone 
         <IonText className='asterix'>*</IonText> </b></label></p>
          </IonCol>
         <IonCol size='8'>
         <p className='centerbtn'>
         <input
         className="w3-input w3-border w3-margin"
         required
          type='number'
        onChange={handlecode}
          />
          </p>    
            </IonCol>
            <IonCol size='8'>
            </IonCol>
              <IonCol size='10' className='centerbtn'>
                  <IonRow>
                <IonCol size='12'  >
                <button className="w3-btn w3-round-xlarge w3-black" type="submit">Confirmer</button>
                </IonCol>
                </IonRow>
                </IonCol>
            </IonRow>
            
        </form>
        </IonCol>
           </IonRow>
            </IonGrid>
    </div>:null}
  </div>


)
}


export default ConfirmationPhoneNumber;
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import axiosInstance from '../axios'
import {IonLoading,IonModal,IonText,IonIcon,IonCol,IonRow,IonGrid} from '@ionic/react'
import CommandeDesk from '../Components/Desk/CommandeDesk';
import {toast } from 'react-toastify'
import {backspaceOutline} from 'ionicons/icons'




function ConfirmationPayement(props){
	let nom=props.match.params.nom
	let id=props.match.params.id
	let code_id=props.match.params.code
	const [commande,setcommande]=useState([])
	const [load,setload]=useState(false)
  const [showLoading,setShowLoading]=useState(false)
	const history=useHistory()
	const [dta,setdta]=useState({
		code:''
	})

   useEffect(()=>{
   	getcommande()
   },[])

    const nocommande = () => toast.error("Commande annulée ",{
    position:toast.POSITION.TOP_CENTER,
    autoClose:false
  });
   const handlecode=e=>{
   setdta({...dta,code:e.target.value})
    }

	const payer=e=>{
		e.preventDefault();
    setShowLoading(true)
    if (dta.code=="") { 
      setShowLoading(false)
      return;
    }
  else{
    let formdata=new FormData()
    formdata.append('code',dta.code)
    formdata.append('phone',commande.phone_gaalguiMoney)
    formdata.append('id',code_id)
    formdata.append('total',commande.total)
    formdata.append('commission',commande.commission)
    formdata.append('livraison',commande.livraison)
      axios
      .post('https://gaalguimoney.herokuapp.com/api/client/payementgaalguishop/',formdata)
      .then(res=>{
        console.log(res.data)
        axiosInstance
        .post('produit/confirmationpaycommande/',{id:id},)
        .then((response)=>{
         console.log(response.data)
         history.push(`/recucommande/${id}/${nom}`)  
           })
        .catch((err)=>{
          setShowLoading(false)
          console.log(err) 
        })
       
       })
      .catch((err)=>{
          setShowLoading(false)
          console.log(err)
        })
    }
		
        
	}
  const getcommande=()=>{
  	axiosInstance
  	.post('produit/commandepay/',{id:id})
  	.then(res=>{
      console.log(res.data)
  		setcommande(res.data)
  		setload(true)
  	})
  }
  const annulation=()=>{
      axiosInstance
      .put(`produit/actioncommande/suppressioncommandeuser/`,{id:id})
      .then(()=>{
      axios
      .put('http://127.0.0.1:8000/api/client/managecode/coderemove/',{id:code_id})
      .then(()=>{
       history.push('/monpanier')
      	nocommande()	
      })
      	
      })

  }


	return(
      <div>
      {load?
      	<div>
        {!showLoading?
        <>
      	 <IonGrid>
       <IonRow>
       <IonCol size='8'>
     <form  onSubmit={payer}  className='formmodal'>
      <IonRow>
      <IonCol size='8'>
       <p ><label ><b>Code de verification  du numero de telephone GaalguiMoney
				 <IonText className='asterix'>*</IonText> </b></label></p>
         </IonCol>
         <IonCol size='8'>
				<p className='centerbtn'>
				<input
				className="w3-input w3-border w3-margin"
				required
				id="flecheinput"
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
		  <IonCol size='4' className='btnskip' style={{marginTop:'150px'}}>
          <button className="w3-btn w3-round-xlarge w3-pink" onClick={annulation} > <IonIcon icon={backspaceOutline}/>Annuler</button>
           </IonCol>
           </IonRow>
            </IonGrid>
         </>:
         <IonLoading
          cssClass='my-custom-class'
         isOpen={showLoading}
         onDidDismiss={() => setShowLoading(false)}
         message={'Chargement...'}
         duration={5000} />}
		  </div>:null}
      </div>

		);
}
export default ConfirmationPayement;
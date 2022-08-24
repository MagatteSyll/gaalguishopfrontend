import React,{useState} from 'react'
import InscriptionDesk from '../Components/Desk/InscriptionDesk'
import InscriptionMobile from '../Components/Mobile/InscriptionMobile'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import {toast } from 'react-toastify'
import axiosInstance from '../axios'
import ReactModal from 'react-modal';
import {IonText} from '@ionic/react'

function Inscription({getuser}) {
	const history=useHistory()
    const  [showpassword, setshowpassword] = useState(false)
    const  [modal, setmodal] = useState(false)
	const  [modalmobile, setmodalmobile] = useState(false)
    const  [showpasswordcon, setshowpasswordcon] = useState(false)
    const initialFormData = Object.freeze({
		phone: '',
		prenom: '',
    nom:'',
		password: '',
    passwordcon:'',
	});
    const [formData, updateFormData] = useState(initialFormData);

    const erreurmdp = () => toast.error("Erreur!Les mots de passe ne sont pas conformes ",{
		position:toast.POSITION.TOP_CENTER,
		autoClose:false
	  });
      const erreurlg = () => toast.error("Erreur!Le mot de passe ne doit pas etre inferieur a 8 caracteres",{
		position:toast.POSITION.TOP_CENTER,
		autoClose:false
	  });
	  const erreurvide = () => toast.error("Veuillez remplir tous les champs! ",{
		position:toast.POSITION.TOP_CENTER,
		autoClose:false
	  });
	  const incorect = () => toast.error("Erreur!Numero de telephone invalide!",{
		position:toast.POSITION.TOP_CENTER,
		autoClose:false
	  });
	  const nocode = () => toast.error("Code de verification obligatoire!",{
		position:toast.POSITION.TOP_CENTER,
		autoClose:false
	  });

	const handleChange = e => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
			
		});
	};

    
     const handleSubmit = (e) => {
            e.preventDefault();
        if(formData.password !==formData.passwordcon){
		erreurmdp()
		
		return;
	}
    if(formData.password.length <8 ||formData.passwordcon.length<8){
		erreurlg()
		
		return;
	}
	if(formData.nom===""|| formData.nom===null|| 
	formData.nom===undefined || formData.nom.match(/^ *$/)!== null||
	formData.prenom===""||formData.prenom===null|| 
	formData.prenom===undefined || formData.prenom.match(/^ *$/)!== null ||formData.phone===""
	 || formData.phone===null|| 
	formData.phone===undefined || formData.phone.match(/^ *$/)!== null
	||formData.password==="" ||formData.password===null|| 
	formData.password===undefined || formData.password.match(/^ *$/) !== null||
	formData.passwordcon==="" ||formData.passwordcon===null|| 
	formData.passwordcon===undefined || formData.passwordcon.match(/^ *$/) !== null){
		erreurvide()
		return;
	}

      // axiosInstance
         axios
            .post('http://127.0.0.1:8000/api/utilisateur/registration/', {
            //  .post('utilisateur/registration/',{
                phone: formData.phone,
                prenom: formData.prenom,
                nom: formData.nom,
                password:formData.password,
            })
    
            .then((res) => {
             history.push(`/confirmationphonenumber/${res.data.code_id}/${res.data.user_id}/${res.data.prenom+""+res.data.nom}`)
            });
         
             
           
        };

   const handlephone=e=>{
   	updateFormData({
   	...formData,
   	phone:e
   	})
   }      
	return (
		<div>
	<InscriptionDesk  handleChange={handleChange} showpassword={showpassword}
	setshowpassword={setshowpassword} showpasswordcon={showpasswordcon} 
   setshowpasswordcon={setshowpasswordcon} 
   handleSubmit={handleSubmit} data={initialFormData} handlephone={handlephone} />
<InscriptionMobile handleChange={handleChange}showpassword={showpassword}
 setshowpassword={setshowpassword} showpasswordcon={showpasswordcon} 
 setshowpasswordcon={setshowpasswordcon} handleSubmit={handleSubmit} data={initialFormData} 
 handlephone={handlephone} />

 	
		</div>
	)
}

export default Inscription

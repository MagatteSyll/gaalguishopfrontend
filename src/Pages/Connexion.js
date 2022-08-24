import React,{useState} from 'react'
import ConnexionDesk from '../Components/Desk/ConnexionDesk'
import ConnexionMobile from '../Components/Mobile/ConnexionMobile'
import {useHistory} from 'react-router-dom'
import axios from 'axios';
import axiosInstance from '../axios';
import {toast } from 'react-toastify'
import {requestForToken,} from  '../FireBase'

function Connexion({getuser}) { 
	const history = useHistory();
	const  [showpassword, setshowpassword] = useState(false)
	const initialFormData = Object.freeze({
		phone: '',
		password: '',  
	});
	const [token,setoken]=useState("") 



	const erreurvide = () => toast.error("Veuillez remplir tous les champs! ",{
		position:toast.POSITION.TOP_CENTER,
		autoClose:false
	  });
	const erreurvalide = () => toast.error("Verifiez la validité des donnees entrees ",{
		position:toast.POSITION.TOP_CENTER,
		autoClose:false
	  });
	const [formData, updateFormData] = useState(initialFormData);

	const handlechange = (e) => {
		
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};
   const handlephone=e=>{
   	updateFormData({
   	...formData,
   	phone:e
   	})
   }

 const getok=()=>{
requestForToken().then((tok)=>{
    setoken(tok)
     // console.log(tok)
    })
}

	const handleSubmit = (e) => {
		e.preventDefault();
		if(formData.phone===""||formData.password===""){
			erreurvide()
			return;
		}
        else{
		axiosInstance
		//.post('https://gaalguishopbackend.herokuapp.com/api/utilisateur/connexion/',{
		.post('utilisateur/connexion/', {
				phone: formData.phone,
				password: formData.password,
			})
			.then((res) => {
				localStorage.setItem('__jdkm__', res.data.access);
				localStorage.setItem('__jvqm__', res.data.refresh);
				axiosInstance.defaults.headers['Authorization'] =
					'JWT ' + localStorage.getItem('__jdkm__');
				 getok()
				 axiosInstance
				 .post()
				 let forma=new FormData()
				 forma.append('registration_id',token)
				 forma.append('type','web')
				 axiosInstance
				 .post('utilisateur/getdeviceapp/',forma,)
				 .then(res=>{
				 	console.log(res.data)
				 })
				history.push('/');
				getuser()
				window.location.reload()
				//console.log(res);
				//console.log(res.data);
			})
		   .catch(()=>{
		   	erreurvalide()
		   	return;
		   })
		}
	};
	
	return (
		<div>
		<ConnexionDesk handleSubmit={handleSubmit} handlechange={handlechange} showpassword={showpassword}
	 setshowpassword={setshowpassword} handlephone={handlephone} data={initialFormData}/>
	<ConnexionMobile  handleSubmit={handleSubmit} handlechange={handlechange} showpassword={showpassword}
	setshowpassword={setshowpassword} handlephone={handlephone} data={initialFormData}/>
		</div>
	)
}

export default Connexion

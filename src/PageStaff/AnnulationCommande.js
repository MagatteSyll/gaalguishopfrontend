import React,{useState,useEffect} from 'react'
import axiosInstance from '../axios'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {toast } from 'react-toastify'
import {IonLoading} from '@ionic/react'






function AnnulationCommande(props) {
       let id=props.match.params.id
       const [commande,setcommande]=useState([])
       const [load,setload]=useState(false)
       const [motif,setmotif]=useState()
       const history=useHistory()
       const [showLoading,setShowLoading]=useState(false)
 
      useEffect(()=>{
           getcommande()
      },[])
 const notify = () => toast.success("Commande annulée avec succes!",{
  position:toast.POSITION.TOP_CENTER,
 autoClose:false
  });

const err = () => toast.error("Erreur!Echec de la requete.",{
    position:toast.POSITION.TOP_CENTER,
    autoClose:false
  });
       const getcommande=()=>{
       	axiosInstance
       	.post('staff/commande/',{id:id})
       	.then(res=>{
       		setcommande(res.data)
       		setload(true)
       	})
       }
  const handlemotif=e=>{
  	setmotif(e.target.value)
  }
  const handlennulation=e=>{
  	e.preventDefault();
    setShowLoading(true)
  	if(motif==="")
  	{
  		return;
  	}

   /* axiosInstance
  .post('http://127.0.0.1:8000/api/staff/annulationcommande/',{id:id,motif:motif},
    {headers:{
    'Authorization': `JWT ${localStorage.getItem('__jdkm__')}` 
    }})*/
  axiosInstance
 .post('staff/annulationcommande/',{id:id,motif:motif})
  .then(res=>{
  //  console.log(res.data)
    let formdata=new FormData()
    formdata.append('phone',res.data.phone_gaalguiMoney)
    formdata.append('montant',res.data.total)
    formdata.append('commission',res.data.commission) 
    formdata.append('livraison',res.data.livraison)
    formdata.append('nom',res.data.produitcommande.product.nom)
    axios
    .post('https://gaalguimoney.herokuapp.com/api/client/annulationcommandegaalguishop/',formdata)
    .then(res=>{
      // console.log(res.data)
       history.push('/')
       notify()
    })
   .catch(()=>{
    setShowLoading(false)
    err()
    return
   })
  })
 .catch(()=>{
  setShowLoading(false)
   err()
 })
}
	return(
	   <div>
        {load?
        <div >
        {!showLoading?
        <>
        <h1 className='redstyle centerbtn'>Annulation de la commande numero {commande.id}</h1>
        <form onSubmit={handlennulation} className='centerbtn'> 
        <p>Precisez le motif de l annulation</p>
        <textarea
        required onChange={handlemotif}
        rows="4" cols="40" name='description'
        />
        <p >
        <button type='submit' className="w3-btn w3-round-xxlarge w3-red"> Confirmer l annulation</button>
        </p>
        </form> 
        </>:<IonLoading
        cssClass='my-custom-class'
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={'Chargement...'}
        duration={5000} />}
       </div>:null}
      </div>


		);
	
}

export default AnnulationCommande;
import React,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import axiosInstance from '../axios'
import {toast } from 'react-toastify'
import axios from 'axios'



function AvertirLeVendeur(props){
	let id=props.match.params.id
	let nom=props.match.params.nom
	const [motif,setmotif]=useState()
    const history=useHistory()
    const [boutique,setboutique]=useState([])
    const [load,setload]=useState(false)

  useEffect(()=>{
     getbotique()
  },[])

  const getbotique=()=>{
  	axiosInstance
  	.post('staff/getboutique/',{id:id})
  	.then(res=>{
  		setboutique(res.data)
  		setload(true)
  	})
  }
  const handlemotif=e=>{
  setmotif(e.target.value)
  }
   const notify = () => toast.success("Avertissement  envoyé  avec succes!",{
 position:toast.POSITION.TOP_CENTER,
   autoClose:false
  });

  const handlesubmit=e=>{
   e.preventDefault();
  	if(motif==="")
  	{
  		return;
  	}

  // axios
  //.post('http://192.168.0.50:8000/api/staff/avertissement/',{id:id,motif:motif},
// {headers:{
  //'Authorization': `JWT ${localStorage.getItem('__jdkm__')}` 
 // }})
   axiosInstance
   .post('staff/avertissement/',{id:id,motif:motif})
   .then(res=>{
      history.push(`/boutique/${id}/${nom}`)
      notify()

   })
  }

	return(
      <div>
      {load && nom===boutique.user.prenom+""+boutique.user.nom?
       <form className='centerbtn' onSubmit={handlesubmit}> 
        <p>Precisez le motif de l avertissement</p>
        <textarea
        required onChange={handlemotif}
        rows="4" cols="40" name='description'
        />
        <p >
        <button type='submit'className="w3-btn w3-round-xxlarge w3-red"> Confirmer</button>
        </p>
        </form>:null}
      </div>



		);
}

export default AvertirLeVendeur;
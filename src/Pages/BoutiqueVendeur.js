import React,{useState,useEffect,useRef,Fragment} from 'react';
import BoutiqueVendeurDesk from '../Components/Desk/BoutiqueVendeurDesk';
import BoutiqueVendeurMobile from '../Components/Mobile/BoutiqueVendeurMobile';
import axiosInstance from '../axios'
import {IonModal,IonPopover,IonAlert,IonGrid,IonRow,IonCol} from '@ionic/react'
import {useHistory} from 'react-router-dom'
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@mui/material/Dialog';
import PhoneInput from 'react-phone-number-input'
import axios from 'axios'
import {toast } from 'react-toastify'



function BoutiqueVendeur({truncateString,user}) { 
  const  [produit, setproduit] = useState([])
  const  [produitvendu, setproduitvendu] = useState([])
  const  [botique, setbotique] = useState({}) 
  const  [loading, setloading] = useState(true)
  const  [produitload, setproduitload] = useState(false)
  const  [open, setopen] = useState(false);
  const [openeditmoney,setopeneditmoney]=useState(false)
  const  [description, setdescription] = useState("");
  const [count,setcount]=useState()
  const [next,setnext]=useState()
  const [previous,setprevious]=useState()
  const iref= useRef()
  const history=useHistory() 
  const  [aler, setaler] = useState(false);
  const [phonemoney,setphonemoney]=useState() 

  useEffect(()=>{
    getbotique()

  },[])
  useEffect(()=>{
    getproduit()
  },[])
 
  const successedit = () => toast.success("Données bien éditées  ",{
    position:toast.POSITION.TOP_CENTER,
    autoClose:false
    });
  const getbotique=()=>{
    axiosInstance.get('produit/maboutique/')
    .then(res=>{
      //console.log(res.data)
      setbotique(res.data)
      setloading(true)
    })
  }

 const getproduit=()=>{
   axiosInstance
   .get('produit/produitboutiqueparlevendeur/')
   .then(res=>{

     setproduit(res.data.results)
     setcount((res.data.count)/4)
     setprevious(res.data.previous)
     setproduitload(true)
 }) 
 }
 const handleajout=()=>{
   history.push('/ajoutproduit')
 }
 const handleprofil=e=>{ 
    let file= e.target.files[0]
    if (file.type==='image/jpg'||file.type==='image/jpeg'|| file.type==='image/png'||file.type==='image/JPG'
   ||file.type==='image/JPEG'||file.type==="image/PNG") {
      let forimage=new FormData()
    forimage.append('logo',file)
    //console.log(img)
    axiosInstance
    .post('produit/editboutiquepic/', forimage,{headers: 
      {'content-type': 'multipart/form-data'}
    })
    .then(res=>{
      //console.log(res.data)
      getbotique()
   }) }
 }

const handleclick=()=>{
    iref.current.click();
  }
const handlopen=(id,nom,slug)=>{
 // setpid({...pid,id:id,nom:nom,slug:slug})
  setopen(true)
  }
const handleclose=()=>{
  setopen(false)
}
const handledes=e=>{  
     setdescription(e.target.value)
   }
const handledescription=e=>{
  e.preventDefault()
 // console.log(description)
     if(description !==""||description.length>200){
    axiosInstance
    .post('produit/editboutiquedes/',{description:description})
    .then(res=>{
     // console.log(res.data)
      getbotique()
      setopen(false)
      
    })
  }
  else{
    setopen(false)
    return;
  }

   }
const handlemodif=(slug,nom,variation)=>{
    if(variation===true){
      history.push(`/modificationvarie/${slug}/${nom}`)
    }
    else{
      history.push(`/modification/${slug}/${nom}`)
    }

     
}
const handledisplay=(data)=>{
  const  page=data.selected+1
  axiosInstance
  .get(`produit/produitboutiqueparlevendeur/?page=${page}`)
  .then(res=>{
  setproduit(res.data.results)
  setnext(res.data.next)
  setprevious(res.data.previous)
  setcount((res.data.count)/4)
   })
}
const handleditmoney=e=>{
 e.preventDefault()
 let formdata=new FormData()
 formdata.append('phone',phonemoney)
 axios
 .post('https://gaalguimoney.herokuapp.com/api/client/verificationphonepourgaalguishop/',formdata)
 .then(res=>{
 // console.log(res.data)
  axiosInstance
  .post('produit/liersoncomptegaalguimoney/',formdata)
  .then(res=>{
   // console.log(res.data)
   setopeneditmoney(false)
   getbotique()
   successedit()
  })
 })
}
const handlephone=e=>{
  setphonemoney(e)
}
const handleopeneditmoney=()=>{
  setopeneditmoney(true)
}
  return(
     <div>
       {loading && produitload ? 
      <Fragment>
       <BoutiqueVendeurDesk produit={produit} 
      botique={botique} count={count} next={next} previous={previous} truncateString={truncateString}
       handleajout={handleajout} handleprofil={handleprofil} handleclick={handleclick} iref={iref}
       handlopen={handlopen}  handlemodif={handlemodif} handledisplay={handledisplay} handleopeneditmoney={handleopeneditmoney}
      />
     <BoutiqueVendeurMobile produit={produit}  botique={botique}
     count={count} next={next} previous={previous} truncateString={truncateString} 
     handleajout={handleajout} handleprofil={handleprofil} handleclick={handleclick} iref={iref} 
     handlopen={handlopen}   handlemodif={handlemodif} handledisplay={handledisplay} 
     handleopeneditmoney={handleopeneditmoney} />
   </Fragment>:null}
    <Dialog onClose={handleclose} open={open} >
     <div className='container'>
     <h5 className='logocolor'>Description de votre boutique(200 characteres au maximum)</h5>
     <form onSubmit={handledescription}>
    <p className='centerbtn'> <textarea
    onChange={handledes}
    maxLength="200"
    rows="4" 
    cols="40"
     /> </p>
   <p className='centerbtn'> <button className='w3-button w3-green' type='submit'>
    Confirmer
    </button></p>
    </form>
    </div>
    </Dialog> 
    <Dialog onClose={handleclose} open={openeditmoney} >
     <div className='container'>
     <form onSubmit={handleditmoney} className='formargin'>
    <h5 className='logocolor'>Numero de telephone de votre compte GaalguiMoney</h5>
    <p className='centerbtn'> 
    <PhoneInput
      countries={["SN"]}
      style={{width:'90%'}}
       defaultCountry="SN"
       addInternationalOption={false}
       className="w3-input w3-border w3-margin"
       value={phonemoney}
      name='phone'
      onChange={handlephone}/>
     </p>
   <p className='centerbtn'> <button className='w3-button w3-green' type='submit'>
    Confirmer
    </button></p>
    </form>
    </div>
    </Dialog>
  
     </div>
  );
}

export default BoutiqueVendeur;




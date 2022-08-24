import React,{useState,useEffect,useRef,Fragment} from 'react'
import axiosInstance from '../axios';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { IonLoading,IonToast} from  '@ionic/react'
import {toast} from 'react-toastify'
import ModificationDesk from '../Components/Desk/ModificationDesk';
import ModificationMobile from '../Components/Mobile/ModificationMobile';





function ModificationProduit(props) {
    let slug=props.match.params.slug
    const history=useHistory()
    const [produit,setproduit]=useState([])
    const [load,setload]=useState(false)
    const [loaded,setloaded]=useState(false)
    const [showLoading,setShowLoading]=useState(false)
    const [category,setcategory]=useState([]) 
    const [location,setlocation]=useState([])
    const [images,setimages]=useState([])
    const [devise,setdevise]=useState([])
    const [data,setdata]=useState({
      nom:"",
      description:"",
      prix:"",
      categorie:"",
      region:"",
      devise:1,
      taille:"",
      qte:"",
      couleur:"",
      poids:"",
      mesure:""
    })
 

useEffect(()=>{
   getdeviselocation()
},[])

  useEffect(()=>{
    getproduit()
   },[])


  const getproduit=()=>{
    axiosInstance
    .post('produit/getproduitandimage/',{slug:slug})
    .then((res=>{
     // console.log(res.data)
      setproduit(res.data.produit)
      setimages(res.data.image)
      setdata({...data,
       nom:res.data.produit.nom,
       description:res.data.produit.description,
       prix:res.data.produit.prix,
       taille:res.data.produit.taille,
       couleur:res.data.produit.couleur,
       qte:res.data.produit.qte,
       categorie:res.data.produit.category.id,
       devise:res.data.produit.devise.id,
       region:res.data.produit.region.id
      })
      setload(true)
    }))
  }
const getdeviselocation=()=>{
   axiosInstance
   .get('produit/deviselocationcategory/')
   .then((res)=>{
      setdevise(res.data.devise)
      setlocation(res.data.location)
      setcategory(res.data.category)
      setloaded(true)
   })
}
const erreurvide= () => toast.error("Tous les champs sont obligatoires  ",{
    position:toast.POSITION.TOP_CENTER,
    autoClose:false
    });
const erreurimgdelete= () => toast.error("Echec de la requete",{
    position:toast.POSITION.TOP_CENTER,
    autoClose:false
    });
const erreurzero= () => toast.error("Entrez un nombre valide",{
    position:toast.POSITION.TOP_CENTER,
    autoClose:false
    });
const erreurupload= () => toast.error("Echec de la modification ,verifiez la validité des données ",{
    position:toast.POSITION.TOP_CENTER,
    autoClose:false
    });
const erreursuppression= () => toast.error("Echec de la suppression",{
    position:toast.POSITION.TOP_CENTER,
    autoClose:false
    });
const successmodif= () => toast.success("Details bien édités ",{
    position:toast.POSITION.TOP_CENTER,
    autoClose:false
    });
const succesup= () => toast.success("Produit bien supprimé ",{
    position:toast.POSITION.TOP_CENTER,
    autoClose:false
    });
const handledata=e=>{
   setdata({...data,
  [e.target.name]: e.target.value.trim(),})
}

 
 const handlekeypress=e=>{
   if (e.key ==="-"||e.key==="+"||e.key==="e"||e.key==="E") {
        e.preventDefault()
        return false
}
}
const handlepaste=e=>{
  const clipboardData = e.clipboardData || window.clipboardData;
  const pastedData = parseFloat(clipboardData.getData('text'));
  const data=clipboardData.getData('text')

    if (pastedData < 0||data==="e"||data==="E"||data==="-"||data==="+"||/^[^a-z]+$/) {
        e.preventDefault();
        return false
    }
  }

const handlesubmit=e=>{
  e.preventDefault()
  setShowLoading(true)
 if(data.nom===""||data.description===""||data.prix===""||data.qte===""||
  data.taille===""||data.couleur===""||data.location===""||data.devise===""||data.qte===""){
  setShowLoading(false)
   erreurvide()
   return;
 }
if(data.qte<=0||data.prix<=0){
   erreurzero()
   return;
}
else{
  let formdata=new FormData()
  formdata.append('nom',data.nom)
  formdata.append('description',data.description)
  formdata.append('prix',data.prix)
  formdata.append('taille',data.taille)
  formdata.append('couleur',data.couleur)
  formdata.append('qte',data.qte)
  formdata.append('region_id',data.region)
  formdata.append('devise_id',data.devise)
  formdata.append('poids',data.poids)
  formdata.append('unite_mesure_poids',data.mesure)
  formdata.append('cat_id',data.categorie)
  formdata.append('variation',false)
  axiosInstance
  .put(`produit/produitmanage/modifproduit/${slug}/`,formdata,)
  .then((res=>{
    getproduit()
   // console.log(res.data)
    setShowLoading(false)
    successmodif()
}))
.catch(()=>{
  setShowLoading(false)
  erreurupload()
  return;  
})
}
} 
const modifimgunique=(e,id)=>{
   setShowLoading(true)
   let file=e.target.files[0]
   if(file.type==='image/jpg'||file.type==='image/jpeg'|| file.type==='image/png'||file.type==='image/JPG'
   ||file.type==='image/JPEG'||file.type==="image/PNG"){
   let formdata=new FormData()
   formdata.append('image',file)
  axiosInstance
  .put(`produit/produitmanage/modifimageproduit/${id}/`,formdata,)
  .then((res=>{
    getproduit()
    setShowLoading(false)
   }))
 .catch(()=>{
  setShowLoading(false)
  erreurupload()
  return;
})
}
else{
  setShowLoading(false)
  return;
}


} 
const suppressionimg=(id)=>{
  setShowLoading(true)
  //console.log(id)
  /*axios
   .put(`http://127.0.0.1:8000/api/produit/produitmanage/suppression/${id}/`)
   .then((res)=>{
    console.log(res.data)
   })*/

  axiosInstance
  .put(`produit/produitmanage/suppression/${id}/`,)
  .then((res=>{
    getproduit()
    setShowLoading(false)

}))
 .catch(()=>{
  setShowLoading(false)
  erreurupload()
  return;
})

}

const suppressionproduit=()=>{
  setShowLoading(true)
  axiosInstance
  .put(`produit/produitmanage/supprimer/${slug}/`)
  .then((res)=>{
    setShowLoading(false)
    succesup()
    history.goBack()

  })
.catch(()=>{
  setShowLoading(false)
  erreursuppression()
  return;
})
}
const handleback=()=>{
  history.goBack()
  }
  return (
      <div>
      {load && loaded?
      <>
      {!showLoading?
      <>
      <ModificationDesk produit={produit}  devise={devise} location={location} 
      category={category} handledata={handledata} handlekeypress={handlekeypress} handlepaste={handlepaste}
       handlesubmit={handlesubmit} modifimgunique={modifimgunique} suppressionimg={suppressionimg}
       suppressionproduit={suppressionproduit} images={images} handleback={handleback}/>
      <ModificationMobile 
      produit={produit}  devise={devise} location={location} 
      category={category} handledata={handledata} handlekeypress={handlekeypress} handlepaste={handlepaste}
       handlesubmit={handlesubmit} modifimgunique={modifimgunique} suppressionimg={suppressionimg}
       suppressionproduit={suppressionproduit} images={images} handleback={handleback}/>
     </>:
     <IonLoading
      cssClass='my-custom-class'
      isOpen={showLoading}
      onDidDismiss={() => setShowLoading(false)}
      message={'Chargement...'}
      duration={5000}
     />}
      </>:null}
       </div>
    
        
    )
}


export default ModificationProduit

import React,{useState,useEffect} from 'react'
import axiosInstance from '../axios';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { IonLoading,IonToast} from  '@ionic/react'
import {toast} from 'react-toastify'
import ModificationVarieDesk from '../Components/Desk/ModificationVarieDesk';
import ModificationVarieMobile from '../Components/Mobile/ModificationVarieMobile';




class Imageproduitvarie {
  constructor(size,color,quantite,image,index) {
      this.size= size;
      this.color=color;
      this.quantite=quantite;
      this.image=image;
      this.index=index
 }
}
function ModificationProduitVarie(props){

 let slug=props.match.params.slug
    const history=useHistory()
    const [produit,setproduit]=useState([])
    const [produitimg,setproduitimg]=useState([])
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
      devise:"",
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
      setproduit(res.data.produit)
      setimages(res.data.image)
      setdata({...data,
       nom:res.data.produit.nom,
       description:res.data.produit.description,
       prix:res.data.produit.prix,
       categorie:res.data.produit.category.id,
       devise:res.data.produit.devise.id,
       region:res.data.produit.region.id
      })
     for (var i = 0;i<res.data.image.length ; i++) {
       const imageproduit=new Imageproduitvarie()
       imageproduit.image = res.data.image[i]['image'];
       imageproduit.size = res.data.image[i]['size'];
       imageproduit.color = res.data.image[i]['color'];
       imageproduit.quantite = res.data.image[i]['quantite'];
       imageproduit.index = res.data.image[i]['id'];
       setproduitimg((prev)=>([...prev,imageproduit]))
     }
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
     // setloaded(true)
   })
}
const erreurvide= () => toast.error("Tous les champs sont obligatoires  ",{
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

const modifimgvarie=(e,index)=>{
  setShowLoading(true)
 let file=e.target.files[0]
   if(file.type==='image/jpg'||file.type==='image/jpeg'|| file.type==='image/png'||file.type==='image/JPG'
   ||file.type==='image/JPEG'||file.type==="image/PNG"){
   let formdata=new FormData()
   formdata.append('image',file)
   let ident=produitimg[index]['index']
   axiosInstance
  .put(`produit/produitmanage/modifimageproduit/${ident}/`,formdata,)
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

const handlemodifvarie=(e,index,name)=>{
  const updatedataimg = [...produitimg];
  updatedataimg[index][name] = e.target.value;
  setproduitimg(updatedataimg);
  //console.log(dataimgwith)   
}
const handlesubmitmodifvarie=(index)=>{ 
  setShowLoading(true)
 const qte=  produitimg[index]['quantite']
  if (qte<=0) {
  setShowLoading(false)
  erreurzero()
   return;
  }
  else{
    let formdata=new FormData()
  //formdata.append('image',produitimg[index]['image'])
  formdata.append('size',produitimg[index]['size'])
  formdata.append('color',produitimg[index]['color'])
  formdata.append('quantite',produitimg[index]['quantite'])
  let ident=produitimg[index]['index']
 /* axios
  .put(`http://127.0.0.1:8000/api/produit/produitmanage/modificationdetailimgproduit/${ident}/`,formdata)
  .then((res)=>{
  console.log(res.data)
   })*/
  axiosInstance
  .put(`produit/produitmanage/modifimageproduit/${ident}/`,formdata,)
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
  
}
const suppressionimgvarie=(index)=>{
  setShowLoading(true)
  let id =produitimg[index]['index']
  axiosInstance
  .put(`produit/produitmanage/suppression/${id}/`)
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
const handlesubmitdatavarie=e=>{
  e.preventDefault()
 setShowLoading(true)
 if(data.nom===""||data.description===""||data.prix===""||data.location===""||data.devise===""||data.categorie===""){
  setShowLoading(false)
   erreurvide()
   return;
 }
 if(data.prix<=0){
   erreurzero()
   return;
}
else{
  let formdata=new FormData()
  formdata.append('nom',data.nom)
  formdata.append('description',data.description)
  formdata.append('prix',data.prix)
  formdata.append('region_id',data.region)
  formdata.append('devise_id',data.devise)
  formdata.append('cat_id',data.categorie)
   formdata.append('poids',data.poids)
  formdata.append('unite_mesure_poids',data.mesure)
  formdata.append('variation',true)
  axiosInstance
  .put(`produit/produitmanage/modifproduit/${slug}/`,formdata,)
  .then((res=>{
    getproduit()
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

return(
 <div className='colajout'>
 {load?
 <>
 {!showLoading?
 <>
 <ModificationVarieDesk produit={produit} produitimg={produitimg} location ={location}
 category={category} devise ={devise} handlesubmitmodifvarie={handlesubmitmodifvarie}
handlemodifvarie={handlemodifvarie} handledata={handledata} suppressionimgvarie={suppressionimgvarie}
images={images} handlesubmitdatavarie={handlesubmitdatavarie} handlekeypress={handlekeypress} handleback={handleback}
handlepaste={handlepaste} suppressionproduit={suppressionproduit} modifimgvarie={modifimgvarie}/>
<ModificationVarieMobile  produit={produit} produitimg={produitimg} location ={location}
 category={category} devise ={devise} handlesubmitmodifvarie={handlesubmitmodifvarie}
handlemodifvarie={handlemodifvarie} handledata={handledata} suppressionimgvarie={suppressionimgvarie}
images={images} handlesubmitdatavarie={handlesubmitdatavarie} handlekeypress={handlekeypress}
handlepaste={handlepaste} suppressionproduit={suppressionproduit} modifimgvarie={modifimgvarie}
handleback={handleback}/>
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
export default ModificationProduitVarie
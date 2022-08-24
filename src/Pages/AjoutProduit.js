import React,{useState,useEffect,useRef,Fragment,useCallback} from 'react'
import {  IonButton,IonIcon, 
  IonToast,IonLoading} from '@ionic/react'
import {Form ,Container,Row,Col,Card,} from  'react-bootstrap'
import {  camera } from 'ionicons/icons'
import axiosInstance from '../axios';
import axios from 'axios'
import { useHistory } from 'react-router';
import {toast} from 'react-toastify'
import AjoutDesk from '../Components/Desk/AjoutDesk';
import AjoutMobile from '../Components/Mobile/AjoutMobile';



class Imageproduitvarie {
  constructor(size,color,quantite,image,index) {
      this.size= size;
      this.color=color;
      this.quantite=quantite;
      this.image=image;
      this.index=index
 }
}

export default function AjoutProduit() {
  const history=useHistory() 
  const  [imagewith, setimagewith] = useState([]) 
  const [imagewithout,setimagewithout]=useState([])
  const [imagedatawith,setimagedatawith]=useState([])
  const [devise,setdevise]=useState([])
  const [location,setlocation]=useState([])
  const [filewithout,setfilewithout]=useState([])
  const [load,setload]=useState(false)
  const [filewith,setfilewith]=useState([])
  const [variation,setvariation]=useState(false)
  const [showLoading, setShowLoading] = useState(true);
  const [sansvariation,setsansvariation]=useState(true)
  const [category,setcategory]=useState([])
  const [imagedatawithout,setimagedatawithout]=useState([])
  const [dataimgwith,setdataimgwith]=useState([])
  const [datawithout,setdatawithout]=useState({
    nom:"",
    description:"",
    prix:"",
    couleur:"",
    taille:"",
    qte:"",
    region:"",
    devise:1,
    categorie:"",
    poids:"",
    mesure:""

})
const [datawith,setdatawith]=useState({
   nom:"",
   description:"",
   prix:"",
   region:"",
   devise:1,
   categorie:"",
    poids:"",
    mesure:""
  
})
useEffect(()=>{
   getdeviselocation()
},[])
const getdeviselocation=()=>{
  axiosInstance
  .get('produit/deviselocationcategory/')
  //axios
  //.get('http://127.0.0.1:8000/api/produit/deviselocationcategory/',
  // {headers:{
  //  'Authorization': `JWT ${localStorage.getItem('__jdkm__')}` 
  //  }})
   .then((res)=>{
      //console.log(res.data)
      setdevise(res.data.devise)
      setlocation(res.data.location)
      setcategory(res.data.category)
      setload(true)
   })
}
const erreurplusfile = () => toast.error("Il faut une image au minimum et 10 au maximum ! ",{
    position:toast.POSITION.TOP_CENTER,
    autoClose:false
    });
const erreurzero= () => toast.error("Entrez un nombre valide",{
    position:toast.POSITION.TOP_CENTER,
    autoClose:false
    });
const successproduit = () => toast.success("image bien ajouteee",{
    position:toast.POSITION.TOP_CENTER,
    autoClose:false
    });
const erreurmax = () => toast.error("Maximum d images autorisees atteint! ",{
    position:toast.POSITION.TOP_CENTER,
    autoClose:false
    });
const erreurextension = () => toast.error("Veuillez choisir des images valides ! ",{
    position:toast.POSITION.TOP_CENTER,
    autoClose:false
    });
const erreurvide= () => toast.error("Tous les champs sont obligatoires  ",{
    position:toast.POSITION.TOP_CENTER,
    autoClose:false
    });
const handlevariation=e=>{
  if(e.target.value==="sansvaria"){
    setsansvariation(true)
    setvariation(false)
  }
if(e.target.value==="avecvari"){
  setvariation(true)
  setsansvariation(false)
}
else{
  return;
}
}
//SANS VARIATION
const handledatawithout=e=>{
 // console.log(e.target.value)
  setdatawithout({...datawithout,
  [e.target.name]: e.target.value.trim(),})
}
const handlecatwithout=e=>{
  setdatawithout({...datawithout,category})
}
const handleimgwithout=e=>{
  const nbrefile=e.target.files.length+imagewithout.length
  //console.log(nbrefile)
  if(e.target.files.length>10 ||nbrefile>10){
    erreurplusfile()
    return;
  }
    
  else
  {
  for(let i=0;i<e.target.files.length;i++){
    if(imagewithout.length<10||filewithout.length<10){
      let file=e.target.files[i]
      if(file.type==='image/jpg'||file.type==='image/jpeg'|| file.type==='image/png'||file.type==='image/JPG'
       ||file.type==='image/JPEG'||file.type==="image/PNG")
         {
       setimagewithout(prev=>([...prev,URL.createObjectURL(file)]))
       setfilewithout((prev)=>([...prev,file]))
     }
  else{
    erreurextension()
     return;
     }
      
  }
else{
  erreurmax()
 return; 
}
 }
}
}
const notiffollower=id=>{
  axiosInstance
.post('http://192.168.0.50:8000/api/produit/notifytofollower/',{'id':id},
  {headers:{
  'Authorization': `JWT ${localStorage.getItem('__jdkm__')}` 
  }})
 // axiosInstance
 // .post('produit/notifytofollower/',{'id':id})
  .then((res)=>{
    console.log(res.data)
  })
}
const handlesubmitunique=e=>{
  e.preventDefault()
  setShowLoading(true)
// console.log(datawithout)
  if(filewithout.length===0||filewithout.length>10){
    setShowLoading(false)
    erreurplusfile()
    return;
  }
 if(datawithout.nom===""||datawithout.description===""||datawithout.prix===""||datawithout.qte===""||
  datawithout.taille===""||datawithout.couleur===""||datawithout.location===""||datawithout.devise===""){
  setShowLoading(false)
   erreurvide()
   return;
 }
 if(datawithout.qte<=0||datawithout.prix<=0){
  setShowLoading(false)
  erreurzero()
  return;
 }
else{ 
  let formdata=new FormData()
  //files=filewithout.slice()
  //console.log(files)
  formdata.append('nom',datawithout.nom)
  formdata.append('description',datawithout.description)
  formdata.append('prix',datawithout.prix)
  formdata.append('taille',datawithout.taille)
  formdata.append('couleur',datawithout.couleur)
  formdata.append('qte',datawithout.qte)
  formdata.append('region_id',datawithout.region)
  formdata.append('devise_id',datawithout.devise)
  formdata.append('cat_id',datawithout.categorie)
  formdata.append('poids',datawithout.poids)
  formdata.append('unite_mesure_poids',datawithout.mesure)
  formdata.append('thumbnail',filewithout[0])
  formdata.append('variation',false)
  //formdata.append('images',filewithout)
  axiosInstance
  .post('produit/ajoutdetailproduit/',formdata,)
  .then((res=>{
    let id=res.data.id
    for (var i = 0;i<filewithout.length;i++) {
      let data=new FormData()
      data.append('image',filewithout[i])
      data.append('id',res.data.id)
      axiosInstance
      .post('produit/ajoutimageproduit/',data)
      .then((res)=>{
       // console.log(res.data)
      })
    }
    notiffollower(id)
    history.goBack()


  }))
}
}
//AVEC VARIATION 
const erreurtwovariation = () => toast.error("Il faut au minimum 2 variations du produit",{
    position:toast.POSITION.TOP_CENTER,
    autoClose:false
    });
const handledatawith=e=>{
   setdatawith({...datawith,
  [e.target.name]: e.target.value.trim(),})
}
const handleimgwith=e=>{
  for(let i=0;i<e.target.files.length;i++){
    let file=e.target.files[i]
    if(file.type==='image/jpg'||file.type==='image/jpeg'|| file.type==='image/png'||file.type==='image/JPG'
      ||file.type==='image/JPEG'||file.type==="image/PNG")
         {
       const imageproduit=new Imageproduitvarie()
       imageproduit.image = file;
       setdataimgwith((prev)=>([...prev,imageproduit]))
       setimagewith(prev=>([...prev,URL.createObjectURL(file)]))
       setfilewith((prev)=>([...prev,file]))
     }
    else{
      erreurextension()
      return;
    }
  
}
}
const handlevariationwithsize=(e,index)=>{
  const updatedataimg = [...dataimgwith];
  updatedataimg[index]['size'] = e.target.value;
  setdataimgwith(updatedataimg);
  //console.log(dataimgwith)
   
}
const handlevariationwithcolor=(e,index)=>{
  const updatedataimg = [...dataimgwith];
  updatedataimg[index]['color'] = e.target.value;
  setdataimgwith(updatedataimg);
   
}
const handlevariationwithquantite=(e,index)=>{
   const updatedataimg = [...dataimgwith];
  updatedataimg[index]['quantite'] = e.target.value;
  setdataimgwith(updatedataimg);
   
}
const handlesubmitvariation=e=>{
  e.preventDefault()
  setShowLoading(true)
  if(dataimgwith.length<2){
    setShowLoading(false)
    erreurtwovariation()
    return;
  } 
if(datawith.nom===""||datawith.description===""||datawith.prix===""||
 datawith.location===""||datawith.devise===""){
  setShowLoading(false)
   erreurvide()
   return;}
if(datawith.prix<=0){
  setShowLoading(false)
  erreurzero()
  return;
}
else{
  let formdata=new FormData()
  formdata.append('nom',datawith.nom)
  formdata.append('description',datawith.description)
  formdata.append('prix',datawith.prix)
  formdata.append('region_id',datawith.region)
  formdata.append('devise_id',datawith.devise)
  formdata.append('cat_id',datawith.categorie)
  formdata.append('poids',datawith.poids)
  formdata.append('unite_mesure_poids',datawith.mesure)
  formdata.append('thumbnail',filewith[0])
  formdata.append('variation',true)
  axiosInstance
  .post('produit/ajoutdetailproduit/',formdata)
  .then(res=>{
    let id=res.data.id
    for (var i = 0;i<dataimgwith.length;i++) {
      const qte =dataimgwith[i]['quantite']
      if(qte<=0){
        setShowLoading(true)
        erreurzero()
        return;
    }
    else{
     let data=new FormData()
      data.append('image',dataimgwith[i]['image'])
      data.append('size',dataimgwith[i]['size'])
      data.append('color',dataimgwith[i]['color'])
      data.append('quantite',dataimgwith[i]['quantite'])
      data.append('id',res.data.id)
      axiosInstance
      .post('produit/ajoutimageproduit/',data)
      .then((res)=>{
        console.log(res.data)
      })
    }

     
    }
    notiffollower(id)
     history.goBack()
  })
}
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

  return (
  <div>
  {load?
  <>
  {!showLoading?
  <>
  <AjoutDesk handleimgwithout={handleimgwithout} imagewithout={imagewithout}
   handledatawithout={handledatawithout} handlesubmitunique={handlesubmitunique}
  devise={devise} location={location} category={category} handlevariation={handlevariation}
  variation={variation} sansvariation={sansvariation} handledatawith={handledatawith}
  handleimgwith={handleimgwith} imagewith={imagewith} handlevariationwithsize={handlevariationwithsize}
  handlevariationwithcolor={handlevariationwithcolor} handlevariationwithquantite={handlevariationwithquantite}
  handlesubmitvariation={handlesubmitvariation} handlekeypress={handlekeypress} handlepaste={handlepaste}
 />
  <AjoutMobile handleimgwithout={handleimgwithout} imagewithout={imagewithout}
   handledatawithout={handledatawithout} handlesubmitunique={handlesubmitunique}
  devise={devise} location={location} category={category} handlevariation={handlevariation}
  variation={variation} sansvariation={sansvariation} handledatawith={handledatawith}
  handleimgwith={handleimgwith} imagewith={imagewith} handlevariationwithsize={handlevariationwithsize}
  handlevariationwithcolor={handlevariationwithcolor} handlevariationwithquantite={handlevariationwithquantite}
  handlesubmitvariation={handlesubmitvariation} handlekeypress={handlekeypress} handlepaste={handlepaste}/> 
  </>:
 <IonLoading
    cssClass='my-custom-class'
    isOpen={showLoading}
    onDidDismiss={() => setShowLoading(false)}
    message={'Chargement...'}
    duration={5000} />}
  </>:null} 
  
   
  </div>
   
 )
}






import { IonCol, IonGrid,IonRow,IonIcon} from '@ionic/react'
import React,{useState,useRef} from 'react'
import {  camera,trashOutline } from 'ionicons/icons'
import axiosInstance from '../../../axios'


function ModifUnProdit({produitimage,produit,pi,getproduitimg}) {
    const imgref=useRef(null) 
    const [data, setdata] = useState([{
        image:"",
        imagedisp:"",
        color:"",
        size:"",
        imgload:false,
        qte:""

    }])
   const handledata=e=>{
       setdata({...data,[e.target.name]:e.target.value.trim()
       })
   }
  
const handleimg=e=>{
    let file=e.target.files[0]
    setdata({...data,
       imagedisp:URL.createObjectURL(file),image:file,imgload:true})
   
}

const handlebtnimg=()=>{
    imgref.current.click()
}

const handledelete=id=>{
    axiosInstance
    .delete(`produit/produitimgmanage/suppression/${id}`)
    .then(res=>{
       getproduitimg()
    })
    .catch(()=>{
        return;
    })
}
const handledeleteimg=()=>{
    setdata({...data,imagedisp:"",image:"",imgload:false})
}


const modification=e=>{
   e.preventDefault()
    let formdata=new FormData()
    if(data.image!==undefined){
       formdata.append("image",data.image)
   }
    if(data.color!==undefined){
       formdata.append("color",data.color)
   }
   if(data.size!==undefined){
      formdata.append("size",data.size)
  }
  if(data.color!==undefined){
      formdata.append("quantite",data.qte)
  }
  axiosInstance
  .put(`produit/produitimgmanage/modifprodimg/${pi.id}/`,formdata)
  .then((res)=>{
      console.log(res.data)
      getproduitimg()
  })
}
  return (
    <div>
       <input  type='file'  accept='image/*'  ref={imgref} onChange={handleimg}
   className='filimg' />
   
    {produit.variation?<span>
     {produitimage.length<2?<p className='redstyle'>Il faut au minimum deux variations du produit </p>:null}
    </span>:<span>
    {produitimage.length<3?<p className='redstyle'>Il faut au minimum trois images </p>:null}  
        </span>}
    <IonGrid>
    <IonRow>
    {!data.imgload?
    produit.variation?
    <IonCol size='5'>      
   <img alt='' src={`https://gaalguishop.herokuapp.com${pi.image}`} className='imgmodifmobile'/>
   <p> <button className='btndrop' onClick={()=>handledelete(pi.id)}>
   <IonIcon  className='redstyle' icon={trashOutline}/>
   </button>
   <button className='btndrop' onClick={handlebtnimg}>
  <IonIcon icon={camera}/>
  </button></p>
  </IonCol>: <IonCol size='12'>      
   <img alt='' src={`https://gaalguishop.herokuapp.com${pi.image}`} className='imgmodifmobilebig'/>
   <p> <button className='btndrop' onClick={()=>handledelete(pi.id)}>
   <IonIcon  className='redstyle' icon={trashOutline}/>
   </button>
   <button className='btndrop' onClick={handlebtnimg}>
  <IonIcon icon={camera}/>
  </button></p>
  </IonCol>
  
  
  :<IonCol size='12'>
     <img alt='' src={data.imagedisp} className='imgmodifmobile'/>
     <p> <button className='btndrop' onClick={handledeleteimg}>
     <IonIcon  className='redstyle' icon={trashOutline}/>
     </button>
     <button className='btndrop' onClick={handlebtnimg}>
     <IonIcon icon={camera}/>
     </button></p>
     </IonCol>}
   <IonCol size='7'>
    {produit.variation?
   <form onSubmit={modification}>
    <IonRow>
        <IonCol size='9'>
            <p>Taille <strong>{pi.size}</strong></p>
       <input type='text' onChange={handledata} placeholder='taille' name='size' required/>
        </IonCol>
        <IonCol size='9'>
            <p>Couleur <strong>{pi.color}</strong></p>
       <input type='text' onChange={handledata} placeholder='couleur'  name='color' required />
        </IonCol>
        <IonCol size='9'>
            <p>Quantité <strong>{pi.quantite}</strong> </p>
       <input type='number'  onChange={handledata} placeholder='quantité' name='qte' required/>
        </IonCol>
        <IonCol size='9'>
        <button className="w3-button w3-round-large w3-purple" type='submit'>Modifier</button>
        </IonCol>
    </IonRow>
  </form>:null}
  </IonCol>
   </IonRow>
   </IonGrid>
    </div>
  )
}

export default ModifUnProdit
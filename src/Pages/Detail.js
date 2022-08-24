import React,{useState,useEffect} from 'react'
import DetailDesk from '../Components/Desk/DetailDesk';
import DetailMobile from '../Components/Mobile/DetailMobile';
import axiosInstance from '../axios';
import { useHistory } from 'react-router';
import {IonLoading} from '@ionic/react'
import axios from 'axios'


function Detail(props) {
    const [produit, setproduit] = useState({})
    let slug=props.match.params.slug
   // console.log(props.match.params.slug)
    const islog=props.islog
    const user=props.user
    const handlebadge=props.handlebadge
    const history=useHistory()
    const [showLoading, setShowLoading] = useState(true)
    const [produitimage, setproduitimage] = useState([])
    const [prodimgload, setprodimgload] = useState(false)
    const [load, setload] = useState(false)
    const  [aler, setaler] = useState(false);
    const  [pid, setpid] = useState({
      id:'',
      nom:''
    })

    //const handlebadge=props.handlebadge
    


 
    useEffect(()=>{
     getproduit()
    },[])
   

  const getproduit=()=>{
    axiosInstance
      .post('produit/getproduitdetail/',{slug:slug})
      .then(res=>{
         // console.log(res.data)
          setproduit(res.data.produit)
          setproduitimage(res.data.produitimage)
          setload(true)
    })}
   
  
    const  handlecart = id =>{
      axiosInstance
    .post("produit/addcart/",{slug:slug,prodimg:id})
     .then(res=>{
      //console.log(res.data)
      handlebadge()
     
  })
}
const handlecartunique=()=>{
   axiosInstance
    .post("produit/addcart/",{slug:slug})
     .then(res=>{
      //console.log(res.data)
      handlebadge()
     
  })

}
const handledelete=id=>{
  axiosInstance
  .delete(`produit/produitmanage/supprimer/${id}/`)
  .then(res=>{
     // console.log(res.data)
  
     history.push('/maboutique')
  })
}
const handlepid=(id,nom)=>{
  setpid({...pid,id:id,nom:nom})
  setaler(true)
 }

const handlenonlog=()=>{
  history.push('/connexion')
}
const handlemodif=(slug,nom)=>{
  history.push(`/modification/${slug}/${nom}`)
}

    return (
    <div>
      {load ?
      <div>
     <DetailDesk produit={produit} 
     handledelete={handledelete} 
     islog={islog} handlecart={handlecart} user={user}  handlemodif={handlemodif}
      produitimage={produitimage}  handlecartunique={handlecartunique}/>
     <DetailMobile produit={produit}  handledelete={handledelete} islog={islog}
      handlecart={handlecart} user={user} produitimage={produitimage}
     handlepid={handlepid}  handlemodif={handlemodif} handlecartunique={handlecartunique}/>
      </div>:
      <IonLoading
      cssClass='my-custom-class'
      isOpen={showLoading}
      onDidDismiss={() => setShowLoading(false)}
      message={'Chargement...'}
      duration={5000} />}
      
       
        </div>




        
    )
}


export default Detail

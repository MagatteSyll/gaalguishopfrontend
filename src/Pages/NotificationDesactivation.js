import React,{useState,useEffect} from 'react'
import {IonLoading} from '@ionic/react'
import axiosInstance from '../axios'
import {Link} from 'react-router-dom'
import axios from 'axios'



function NotificationDesactivation(props){
	let id=props.match.params.id
    const  [notification, setnotification] = useState([])
    const  [load, setload] = useState(false)
    const [showLoading, setShowLoading] = useState(true);
    //console.log(id)

    useEffect(()=>{
      axiosInstance
      .post('produit/getnotification/',{id:id})
    // axios
     //.post('http://127.0.0.1:8000/api/produit/getnotification/',
     // {headers:{
     // 'Authorization': `JWT ${localStorage.getItem('__jdkm__')}` 
    //   }})
      .then(res=>{
       // console.log(res.data)
        setnotification(res.data)
        setload(true)
      })
    },[id])

return(
 <div>
 {load && notification.nature_notification==="desactivation boutique"?
 <div className='w3-margin'>
 <h2 className='redstyle'>{notification.message}</h2>
 <h3>Des lors vous ne pourrez plus ajouter de produits sur la plateforme(<Link>voir la politique de confidentialite pour plus de detail</Link>).
 La desactivation ne concerne que les fonctionnalités de vente,
 vous pouvez toujours commander  des produits en vente.
 </h3>

 
 </div>:null}

 </div>

);
}

export default NotificationDesactivation;
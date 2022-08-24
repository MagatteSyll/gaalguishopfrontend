import React,{useState,useEffect} from 'react'
import {IonLoading} from '@ionic/react'
import axiosInstance from '../axios'
import NotificationVenteDesk from '../Components/Desk/NotificationVenteDesk'
import NotificationVenteMobile from '../Components/Mobile/NotificationVenteMobile'

function DetailNotificationVente(props) {
  let id=props.match.params.id
  const  [notification, setnotification] = useState([])
  const  [load, setload] = useState(false)
  const [showLoading, setShowLoading] = useState(true);

  useEffect(()=>{
    axiosInstance
    .post('produit/getnotification/',{id:id})
    .then(res=>{
      setnotification(res.data)
      setload(true)
    })
  },[id]) 
  return ( 
    <div>
     {load && notification.nature_notification==="vente"?
     <div>
    <NotificationVenteDesk notification={notification}/>
    <NotificationVenteMobile notification={notification}/>
     </div>:<IonLoading
      cssClass='my-custom-class'
      isOpen={showLoading}
      onDidDismiss={() => setShowLoading(false)}
      message={'Chargement...'}
      duration={5000}
    />}
    </div>
  )
}

export default DetailNotificationVente
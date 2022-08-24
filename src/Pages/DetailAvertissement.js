import React,{useState,useEffect} from 'react'
import {IonLoading} from '@ionic/react'
import axiosInstance from '../axios'
import DetailAvertissmentDesk from '../Components/Desk/DetailAvertissmentDesk'
import DetailAvertissementMobile from '../Components/Mobile/DetailAvertissementMobile'

function DetailAvertissement(props) {
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
      {load && notification.nature_notification==="avertissement"?
      <div>
        <h3 className='centerbtn'>De l equipe GaalguiShop(logo)</h3>
      <DetailAvertissmentDesk notification={notification}/>
      <DetailAvertissementMobile notification={notification}/>
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

export default DetailAvertissement
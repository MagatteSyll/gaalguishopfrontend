import React,{useState,useEffect} from 'react'
import axiosInstance from '../axios'
import AnnulationAchatDesk from '../Components/Desk/AnnulationAchatDesk'
import AnnulationAchatMobile from '../Components/Mobile/AnnulationAchatMobile'


function AnnulationAchat(props) {
  let id=props.match.params.id
  const  [notification, setnotification] = useState([])
  const  [load, setload] = useState(false)

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
      {load && notification.nature_notification==="annulation d achat"?
      <div>
      <AnnulationAchatDesk notification={notification}/>
      <AnnulationAchatMobile notification={notification}/>
      </div>:null}

    </div>
  )
}

export default AnnulationAchat
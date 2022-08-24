import React,{useState,useEffect} from 'react'
import axiosInstance from '../axios'
import AnnulationVenteDesk from '../Components/Desk/AnnulationVenteDesk'
import AnnulationVenteMobile from '../Components/Mobile/AnnulationVenteMobile'

function AnnulationVente(props) {
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
      {load && notification.nature_notification==="annulation de vente"?
   <div>
  <AnnulationVenteDesk notification={notification}/>
  <AnnulationVenteMobile notification={notification} />      
   </div>:null}
   </div>
  )
}

export default AnnulationVente

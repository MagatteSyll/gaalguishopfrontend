import React,{useState,useEffect} from 'react'
import NotificationNoteDesk from '../Components/Desk/NotificationNoteDesk'
import NotificationNoteMobile from '../Components/Mobile/NotificationNoteMobile'
import {IonLoading} from '@ionic/react'
import axiosInstance from '../axios'
import { Rating,} from '@mui/material';
import {toast } from 'react-toastify'
import {useHistory} from 'react-router-dom'



function NotificationNote(props){
	let id=props.match.params.id
     const [notification,setnotification]=useState([])
     const [load,setload]=useState(false)
     const [showLoading, setShowLoading] = useState(true);
     const [note,setnote]=useState(0)
     const history=useHistory()
     const getnotifications=props.getnotifications
     

    const notify = () => toast.success("Note bien prise en compte. ",{
    position:toast.POSITION.TOP_CENTER,
    autoClose:false
    });
     useEffect(()=>{
       getnotification()
     },[])
     const getnotification=()=>{
      axiosInstance
    .post('produit/getnotification/',{id:id})
    .then(res=>{
      setnotification(res.data)
      setload(true)
    })
     }
 const handlesubmit=e=>{
  e.preventDefault()
  axiosInstance
  .post('produit/noterlevendeur/',{note:note,id:id})
  .then(()=>{
    history.push('/')
     notify()
     getnotifications()
  })
 }

	return( 

     <div>
     {load && notification.nature_notification==="note vendeur"?
     <div >
     <h1>{notification.message}</h1>
     <form onSubmit={handlesubmit} className='container'>
     <p className='pnote'>
      <Rating
    name="simple-controlled"
    value={note}
     onChange={(event, newValue) => {
    setnote(newValue);
    }}
    />({note})
    </p>
    <p className='centerbtn'>
    <button className="w3-button w3-green" type='submit'>Soumettre la note</button> </p>
    </form>
      </div>:null}
     </div>

		);
}

export default NotificationNote;
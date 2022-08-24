import React,{useState,useEffect} from 'react'
import axiosInstance from '../axios'
import {IonCard} from '@ionic/react'



function DetailProbleme(props){
	 let id=props.match.params.id
	const [notification,setnotification]=useState([])
	const [load,setload]=useState(false)

    useEffect(()=>{
    	getnotif()
    },[])
    const getnotif=()=>{
    	axiosInstance
    	.post('staff/getprobleme/',{id:id})
    	.then(res=>{
    		setnotification(res.data)
    		setload(true)
    	})
    }

return(
  <div>
  {load && notification.nature_notification==='probleme technique'?
  	<div className='centerbtn'>
  	<h3>

  	 {notification.message}
  	</h3>
  	</div>
  	:null}

  </div>

 );
}

export default DetailProbleme;
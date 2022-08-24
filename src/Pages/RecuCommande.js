import React,{useState,useEffect} from 'react';
import axiosInstance from '../axios';
import {IonLoading} from '@ionic/react'
import RecuCommandeDesk from '../Components/Desk/RecuCommandeDesk';
import RecuCommandeMobile from '../Components/Mobile/RecuCommandeMobile';
import axios from 'axios'

function RecuCommande(props) {
    let id=props.match.params.id
    const  [commande, setcommande] = useState([]);
    const  [load, setload] = useState(false);
    const [showLoading, setShowLoading] = useState(true);

    useEffect(()=>{
   //   axios
    // .post('http://127.0.0.1:8000/api/produit/getcommande/',{id:id},
    //  {headers:{
   // 'Authorization': `JWT ${localStorage.getItem('__jdkm__')}` 
  //  }})
     axiosInstance
    .post('produit/getcommande/',{id:id})
      .then(res=>{
          setcommande(res.data) 
        //  console.log(res.data) 
          setload(true)
      }) 
    },[id])
 
  return(
       <div>
        {load?
        <div>
        <RecuCommandeDesk commande={commande}/>
        <RecuCommandeMobile commande={commande}/>
        </div>:
        <IonLoading
        cssClass='my-custom-class'
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={'Chargement...'}
        duration={5000}
      />}
       </div>
  );
}

export default RecuCommande;

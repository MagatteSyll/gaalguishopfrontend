import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import {IonSearchbar} from '@ionic/react'

function BarSearch() {
    const history = useHistory();
    const  [data, setData] = useState({
        search:''
      })
         const gosearch=e=>{
    
        history.push({
            pathname: `/resultatrecherche/${data.search}`
            
        })
        window.location.reload();
    }
    return (
        <div className=' container mb-3'>
         <IonSearchbar
      value={data.search}
     onIonChange={(newvalue)=>setData({search:newvalue})}
    // onRequestSearch={()=>gosearch(data.search)}
     placeholder='rechercher un produit'
              />    
        </div>
    )
}

export default BarSearch

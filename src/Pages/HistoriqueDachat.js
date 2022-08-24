import React,{useEffect,useState,Fragment} from 'react'
import axiosInstance from '../axios'
import {Card,} from  'react-bootstrap'
import {IonLoading} from '@ionic/react'
import AchatDesk from '../Components/Desk/AchatDesk'
import AchatMobile from '../Components/Mobile/AchatMobile'



function HistoriqueDachat() {
   const  [achat, setachat] = useState([])
    const  [loaded, setloaded] = useState(false)
    const [showLoading, setShowLoading] = useState(true);
    const  [count,setcount]=useState()
    const  [next,setnext]=useState()
    const  [previous,setprevious]=useState()

    useEffect(()=>{
        axiosInstance
        .get('produit/historiquedachat/')
        .then(res=>{
          //  console.log(res.data)
            setachat(res.data.results)
            setcount((res.data.count)/4)
            setnext(res.data.next)
            setprevious(res.data.previous)
            setloaded(true)
        })
    },[])
  const handledisplay=(data)=>{
  const  page=data.selected+1
  axiosInstance
  .get(`produit/historiquedachat/?page=${page}`)
  .then(res=>{
    setachat(res.data.results)
    setnext(res.data.next)
    setprevious(res.data.previous)
    setcount((res.data.count)/4)
   })
}
    return ( 
        <div>
        {loaded?
        <div> 
        {achat.length>0?
        <>
        <AchatDesk achat={achat} count={count} previous={previous}
        next={next} handledisplay={handledisplay}/>
        <AchatMobile achat={achat} count={count} previous={previous}
        next={next} handledisplay={handledisplay}/>
        </>:<h2>Oups vous n avez effectue aucun achat</h2>}
        </div>:null}
         </div>
    )
}

export default HistoriqueDachat


import React,{useEffect,useState} from 'react'
import axiosInstance from '../axios'
import {Card} from  'react-bootstrap'
import { Fragment } from 'react'
import CommandeEnCoursDesk from '../Components/Desk/CommandeEnCoursDesk'
import CommandeEnCoursMobile from '../Components/Mobile/CommandeEnCoursMobile'

function CommandeEnCours() {
    const  [commande, setcommande] = useState([])
    const  [loaded, setloaded] = useState(false)
    const [showLoading, setShowLoading] = useState(true);  
    const  [count,setcount]=useState()
    const  [next,setnext]=useState()
    const  [previous,setprevious]=useState()

    useEffect(()=>{
        axiosInstance 
        .get('produit/commandeencours/')
        .then(res=>{
            setcommande(res.data.results)
            setcount((res.data.count)/4)
            setnext(res.data.next)
            setprevious(res.data.previous)
           // console.log(res.data)
            setloaded(true)
        })

    },[])
   const handledisplay=(data)=>{
   const  page=data.selected+1
   axiosInstance
   .get(`produit/commandeencours/?page=${page}`)
   .then(res=>{
    setcommande(res.data.results)
    setnext(res.data.next)
    setprevious(res.data.previous)
    setcount((res.data.count)/4)
   })
}
    return (
        <div >
        {loaded?
        <Fragment>
            {commande.length>0?
        <div className=" mt-3">
        <h3 className='centerbtn'>Commandes en cours</h3>
         <CommandeEnCoursDesk  commande={commande} count={count} previous={previous}
        next={next} handledisplay={handledisplay}/>
         <CommandeEnCoursMobile commande={commande} count={count} previous={previous}
        next={next} handledisplay={handledisplay}/>
        </div>:<h1 className='centerbtn'>Oups vous n avez aucune commande en cours </h1>}
        </Fragment>:
           null}
       
        </div>
    )
}

export default CommandeEnCours

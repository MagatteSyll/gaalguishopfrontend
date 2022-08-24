import React,{useState,useEffect} from 'react'
import axiosInstance from '../axios'
import { IonLoading } from '@ionic/react';
import {useHistory} from 'react-router-dom'
import ProduitUneCategorieDesk from '../Components/Desk/ProduitUneCategorieDesk';
import ProduitUneCategorieMobile from '../Components/Mobile/ProduitUneCategorieMobile';


function ProduitSingleCategory(props) {
    const  [produit, setproduit] = useState([])
    const  [user, setuser] = useState({})
    const  [load, setload] = useState(false)
    const truncateString=props.truncateString
    let category=props.match.params.slug
    let id=props.match.params.id
    const handlebadge=props.handlebadge
    const [showLoading, setShowLoading] = useState(true);
    const isStaf=props.isStaf
    const  islog=props.islog
    const history=useHistory()
    const [itemdisp,setitemdisp]=useState()
    const [previous,setprevious] =useState()
    const [next,setnext]=useState()
    

    

   useEffect(()=>{
        
      fetchdata() 

    },[]) 
    
    
    const fetchdata=()=>{
        axiosInstance
        .get(`produit/getproduitcategory/${id}/`)
        .then(res=>{
            console.log(res.data)
            setproduit(res.data.results)
            setnext(res.data.next)
            setprevious(res.data.previous)
            setitemdisp((res.data.count)/4)
            setload(true)
    })}

    const handledisplay=(data)=>{
       const  page=data.selected+1
        axiosInstance
        .get(`produit/getproduitcategory/${id}/?page=${page}`)
        .then(res=>{
          setproduit(res.data.results)
          setnext(res.data.next)
          setprevious(res.data.previous)
          setitemdisp((res.data.count)/4)
        })
    }

  
    return (
        <div>
          {load?
        <div>
      <ProduitUneCategorieDesk  
      truncateString={truncateString} produit={produit} itemdisp={itemdisp} next={next} previous={previous}
       handledisplay={handledisplay}
       />
      <ProduitUneCategorieMobile  
      truncateString={truncateString} produit={produit} itemdisp={itemdisp} next={next} previous={previous}
      handledisplay={handledisplay}  />
      </div>:
        <IonLoading
        cssClass='my-custom-class'
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={'Chargement...'}
        duration={5000}
        />}
        </div>
        
    )
}

export default ProduitSingleCategory

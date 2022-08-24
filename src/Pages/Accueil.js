import React, { Fragment,useState,useEffect } from 'react'
import AccueilDesk from '../Components/Desk/AccueilDesk'
import AccueilMobile from '../Components/Mobile/AccueilMobile'
import axiosInstance from '../axios'


function Accueil({isstaf,user,islog}) {
    const  [vendeur, setvendeur] = useState([])
    const  [populaire, setpopulaire] = useState([]);
    const  [occas, setoccas] = useState([]);
    const  [vendload, setvendload] = useState(false)
    const [category, setcategory] = useState([])
    const [catload, setcatload] = useState(false)
    const [occasload, setoccasload] = useState(false)
  
    useEffect(()=>{
       getvendeur()
    },[]) 
    useEffect(()=>{
        getcategory() 
    },[])
    useEffect(()=>{ 
        getoccasion()
    },[])
  
    const getpopulaire=()=>{
        //
    }
    const getoccasion=()=>{
        axiosInstance
        .get('produit/produitoccasion/')
        .then(res=>{
            setoccas(res.data)
            
            setoccasload(true) 
        })

    }
    const getvendeur=()=>{
        axiosInstance
        .get('produit/nosvendeur/')
        .then((res=>{
          //  console.log(res.data)
            setvendeur(res.data)
            setvendload(true)
            
        }))
    }
    const getcategory=()=>{
        axiosInstance
        .get('produit/category/')
        .then(res=>{
            setcategory(res.data)
            setcatload(true)
           // console.log(res.data)
        })
    }

   
    
    return ( 
       <div>
        <Fragment>
        {catload &&vendload && occasload?
       
        <>
        <AccueilDesk user={user} vendeur={vendeur} category={category} occas={occas}
         islog={islog}  />
        <AccueilMobile user={user} vendeur={vendeur} category={category} occas={occas}
         islog={islog} />
         </>:null}

        </Fragment>
           
      </div>

    

    )
}

export default Accueil

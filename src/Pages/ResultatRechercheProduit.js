import React,{useState,useEffect,} from 'react'
import axiosInstance from '../axios';
import {IonLoading,} from '@ionic/react'
import ResultatSearchDesk from '../Components/Desk/ResultatSearchDesk'
import ResultatSearchMobile from '../Components/Mobile/ResultatSearchMobile'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ReactPaginate from 'react-paginate';

function ResultatRechercheProduit(props) {
    const search = 'produit/search'
    const  [load, setload] = useState(false)
	const [produit, setproduit] = useState([]);
    const  [user, setuser] = useState({})
    const [showLoading, setShowLoading] = useState(true)
    const  [count,setcount]=useState()
    const  [previous,setprevious]=useState()
    const  [next,setnext]=useState()
  

	useEffect(() => {
		getresult()
    },[])
    const getresult=()=>{
        axiosInstance
        .get(search + '/' + window.location.search)
        .then((res) => {
            //const allPosts = res.data;
            setproduit(res.data.results);
            setload(true)
           // console.log(res.data);
           setcount((res.data.count)/10)
           setnext(res.data.next)
           setprevious(res.data.previous)
        });
     }
 const handledisplay=(data)=>{
  const  page=data.selected+1
  axiosInstance
  .get(search + '/' + window.location.search + `/?page=${page}`)
  .then(res=>{
  setproduit(res.data.results)
  setnext(res.data.next)
  setprevious(res.data.previous)
  setcount((res.data.count)/10)
   })
}
     
    return (
        <div>
        {load?
        <div>
         { produit.length>0 ?
        <>
          <ResultatSearchDesk produit={produit}/>
          <ResultatSearchMobile produit={produit}/>

        <div className='divpagination'>
        {count>1?
    <ReactPaginate
       breakLabel="..."
      nextLabel={next!=null && count>4?<ArrowForwardIcon className='logocolor'/>:null}
      marginPagesDisplayed={2}
      containerClassName={"pagination"}
      pageClassName={"page-item paginationsuivant "}
     pageLinkClassName={"page-link"}
     nextClassName={' paginationsuivant'}
    previousClassName={ 'paginationsuivant '}
     breakClassName={'page-item'}
    breakClassNameLink={'page-link'}
    onPageChange={handledisplay}
    pageRangeDisplayed={2}
     pageCount={count}
     previousLabel={previous!=null && count>4?<ArrowBackIcon className='logocolor'/>:null}
     renderOnZeroPageCount={null}
   />:null}
  </div>
     
        </>
         :<h2 className='centerbtn'>Oups aucun resultat pour cette recherche.</h2>}
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

export default ResultatRechercheProduit;



import ProduitImageDisplay from './SousComponent/ProduitImageDisplay'

function DetailMobile({produit, islog, handlecart,user,handlenonlog,produitimage,handlecartunique}) {
  return(
    <div className='mobile'> 
     <ProduitImageDisplay produitimage={produitimage} produit={produit} user={user} islog={islog}
       handlecartunique={handlecartunique} handlecart={handlecart} />
    </div>
  );
}

export default DetailMobile;
 
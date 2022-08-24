import React,{Fragment} from 'react'
import {  IonButton,IonIcon, IonGrid, IonRow, IonCol, IonSegment, IonSegmentButton,IonCard} from '@ionic/react'
import {  camera,trashOutline } from 'ionicons/icons'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { createTheme } from '@mui/material/styles';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



const style={
 
    "& .MuiInputLabel-root": {color: "#C16A39" }
    ,//styles the label
    "& .MuiOutlinedInput-root": {
     "& > fieldset": { borderColor: "#C16A39" },
    "&.Mui-focused fieldset": {
      borderColor: "#C16A39"
    }
  }
  }

const formLabel= {
    color: "#C16A39",
    '&.Mui-focused': {
      color: "#C16A39"
    }
  }
const selectstyle={
  '&.MuiOutlinedInput-root': {
      "& > fieldset": { borderColor: "#C16A39" },
    "&.Mui-focused fieldset": {
      borderColor: "#C16A39"
    }
    },
   
}

function ModificationDesk({produit,images,location,devise,category,handledata,handlekeypress,
  handlepaste,handlesubmit,modifimgunique,suppressionimg,suppressionproduit,handleback}) {

  return(
    <div className='desk colajout'>
   <ModifSansVariation produit={produit} location={location} devise={devise} 
  category={category} handledata={handledata} handlekeypress={handlekeypress} handlepaste={handlepaste}
  handlesubmit={handlesubmit} modifimgunique={modifimgunique} suppressionimg={suppressionimg} images={images}
   handleback={handleback} />
    <button className='btnsupprimer' onClick={suppressionproduit}>
    Supprimer ce produit
    </button>
    </div>
  );
} 


export default ModificationDesk;

function ModifSansVariation({produit,images,devise,location,category,handledata,handlekeypress,
  handlepaste,handlesubmit,modifimgunique,suppressionimg,handleback}) {
  
return(
 <div>
<button className='btndrop' onClick={handleback}><ArrowBackIcon className='shopicon'/></button>
<IonGrid>
<IonRow>
<IonCol size='4'>
<h3 className='logocolor'> Detail actuel</h3>
<p>  Produit <strong >{produit.nom}</strong> </p>
<p>  Description <strong >{produit.description}</strong> </p>
<p>  Prix <strong >{produit.prix} {produit.devise.devise}</strong> </p>
<p>  Couleur <strong>{produit.couleur}</strong> </p>
<p>  Taille <strong>{produit.taille}</strong> </p>
<p>  Poids <strong>{produit.poids} {produit.unite_mesure_poids} </strong> </p>
<p>  Quantite disponible <strong>{produit.qte}</strong> </p>
<p>  Categorie <strong>{produit.category.category}</strong> </p>
<p>  Location du vendeur <strong>{produit.region.region}</strong> </p>
</IonCol>
<IonCol size='8'>
<form 
onSubmit={handlesubmit}
>
<TextField fullWidth label="Nom du produit" id="fullWidth"
 sx={style}
 name="nom"
 required
 onChange={handledata}
 defaultValue={produit.nom}
/>
<br/><br/>
 <TextField
 fullWidth
 id="outlined-multiline-flexible"
  label="Description du produit"
  sx={style}
  disableUnderline
  required
  multiline
  defaultValue={produit.description}
  name='description'
  rows={4}
  onChange={handledata}
  />
  <br/><br/>
   <IonRow>
   <IonCol size='4'>
    <TextField
    sx={style}
    type="number"
    fullWidth
    id="outlined-multiline-flexible"
    label="Prix"
    name="prix"
    InputProps={{ inputProps: { min: 1 } }}
    onChange={handledata}
    onPaste={handlepaste}
    onKeyPress={handlekeypress}
    defaultValue={produit.prix}
    required
    />
  </IonCol>
  <IonCol size='4'>
    <TextField
    sx={style}
    type="number"
    fullWidth
    id="outlined-multiline-flexible"
    label="Poids du produit"
    name="poids"
    InputProps={{ inputProps: { min: 0 } }}
    onChange={handledata}
    onPaste={handlepaste}
    onKeyPress={handlekeypress}
    defaultValue={produit.poids}
    required
    />
   </IonCol>
    <IonCol size='4'>
   <FormControl fullWidth>
    <InputLabel htmlFor="grouped-native-select"
     sx={formLabel}>
 Unité de mesure du poids</InputLabel>
  <Select native defaultValue="" id="grouped-native-select" label="Unité de mesure du poids"
   sx={selectstyle} 
   name='mesure'
   required
  onChange={handledata}>
  <option aria-label="None" value="" />
  <option value="g" >g</option>:
  <option value="kg">kg</option>   
  </Select>
  </FormControl>
   </IonCol>
   <IonCol size='6' className='colajout'>
   <FormControl fullWidth>
    <InputLabel htmlFor="grouped-native-select"
     sx={formLabel} >
  Categorie</InputLabel>
  <Select native defaultValue="" id="grouped-native-select" label="Categorie"
   sx={selectstyle}
   name='categorie'
   onChange={handledata}
   required
  >
 <option aria-label="None" value="" />
     {category.map((c)=>
      c.id===produit.category.id?
    <option value={c.id} className='logocolor' key={c.id}>
    {c.category} 
    </option>:
     <option value={c.id}>
    {c.category} 
    </option>
      )}
  </Select>
  </FormControl>
   </IonCol>
   <IonCol size='6' className='colajout'>
    <FormControl fullWidth>
    <InputLabel htmlFor="grouped-native-select"
     sx={formLabel}>
 Location du produit </InputLabel>
  <Select native defaultValue="" id="grouped-native-select" label="Location du produit"
   sx={selectstyle} 
    name='region'
    onChange={handledata}
    required
    >
    <option aria-label="None" value="" />
    {location.map((l)=>
    l.id===produit.region.id?
    <option value={l.id} className='logocolor' key={l.id}>{l.region}
    </option>:
    <option value={l.id}>{l.region}
    </option>
      )}
  </Select>
  </FormControl>
   </IonCol>
   </IonRow> 
<div className='colajout'>
<IonRow>
<IonCol size='4'>
 <TextField fullWidth label="Couleur  du produit" id="fullWidth"
 sx={style}
 name="couleur"
 defaultValue={produit.couleur}
 onChange={handledata}
/>
</IonCol>
<IonCol size='4'>
<TextField fullWidth label="Taille du produit" id="fullWidth"
 sx={style}
 defaultValue={produit.taille}
 name="taille"
 onChange={handledata}
 required
/>
</IonCol>
<IonCol size='4'>
<TextField fullWidth label="Quantite disponible" id="fullWidth"
 sx={style}
 type="number"
 
 name="qte"
 InputProps={{ inputProps: { min: 1 } }}
 onChange={handledata}
 onPaste={handlepaste}
 onKeyPress={handlekeypress}
 defaultValue={produit.qte}
 required
/>
</IonCol>
</IonRow>
</div>
<p className='centerbtn colajout'>
<button className="ajoutbtn" type='submit'>
 Modifier
</button>
</p>
</form>
  </IonCol> 
{images.length===1?
 <IonCol size='10'>
  <h3 className='redstyle'> Il faut au minimum une image pour un produit</h3>
 </IonCol>:null}
<IonCol size='10'>
<div className='divproduit'>
 <IonRow>
 {images.map(img=>
  <IonCol size='3' key={img.id}>
  <img 
  src={`https://gaalguishop.herokuapp.com${img.image}`}
  alt="" 
  className="imgboutiquedesk"/>
  <p>
  <Button
   onClick={()=>suppressionimg(img.id)}
   className='btndrop'
   component="label">
   <DeleteIcon className='redstyle'/>
 </Button>
<Button
className='btndrop'
 component="label">
   <CameraAltIcon />
  <input
  type="file"
  accept="image/*"
  hidden
  onChange={(e)=>modifimgunique(e,img.id)}
 />
</Button>
  </p>
  </IonCol>)}
 </IonRow>
</div>
</IonCol>
</IonRow>
</IonGrid>    
 </div>
 )}


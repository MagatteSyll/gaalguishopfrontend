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


function AjoutDesk({user,handleimgwithout,imagewithout,handledatawithout,handlesubmitunique,
  devise,location,category,handlevariation,variation,sansvariation,handledatawith,handleimgwith,imagewith,
  handlevariationwithsize,handlevariationwithcolor,handlevariationwithquantite,handlesubmitvariation,
  handlekeypress ,handlepaste}) {
  return(
   <div className='desk'>
   <div className='radiojout'>
   <h3 className='logocolor centerbtn'>Definissez  bien les caracterisques du produit avant de l ajouter  (avec ou sans variation)</h3>
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label" className='logocolor'>Variation</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="sansvaria"
       onChange={handlevariation}
        name="radio-buttons-group">
   <FormControlLabel value="sansvaria"  control={<Radio />} label="Sans variation(couleur unique et taille unique)" />
   <FormControlLabel value="avecvari"  control={<Radio />} label="Avec variation(couleurs differentes ou/et tailles differentes)" /> 
      </RadioGroup>
    </FormControl>
  {sansvariation?
  <ModeleUnique handleimgwithout={handleimgwithout} imagewithout={imagewithout} 
  handledatawithout={handledatawithout}  handlesubmitunique={handlesubmitunique} category={category}
  devise={devise} location={location} handlekeypress={handlekeypress} handlepaste={handlepaste}/>:null}
  {variation?
    <AjoutAvecVariation  category={category}
  devise={devise} location={location} handledatawith={handledatawith}
   handleimgwith={handleimgwith} imagewith={imagewith} handlekeypress={handlekeypress} handlepaste={handlepaste}
   handlevariationwithsize={handlevariationwithsize}
  handlevariationwithcolor={handlevariationwithcolor} handlevariationwithquantite={handlevariationwithquantite}
  handlesubmitvariation={handlesubmitvariation}
    />:null}

  </div>
   </div>    
  )
}

export default AjoutDesk;


function ModeleUnique({handleimgwithout,imagewithout,handledatawithout,handlesubmitunique,devise,location,
category,handlekeypress ,handlepaste}){

return(
<div>
<IonGrid>
<div className='divproduit'>
<form onSubmit={handlesubmitunique}>
<TextField fullWidth label="Nom du produit" id="fullWidth"
 sx={style}
 name="nom"
 required
 onChange={handledatawithout}
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
  name='description'
  rows={4}
  onChange={handledatawithout}
  />
  <br/><br/>
   
   <IonRow>
   <IonCol size='4'>
    <TextField
    fullWidth label="prix" id="fullWidth"
    sx={style}
    type='number'
    disableUnderline
    name='prix'
    required
    InputProps={{ inputProps: { min: 1 } }}
    onChange={handledatawithout}
    onPaste={handlepaste}
    onKeyPress={handlekeypress}
    />
  </IonCol>
  <IonCol size='4'>
    <TextField
    fullWidth label="poids du produit" id="fullWidth"
    sx={style}
    type='number'
    disableUnderline
    name='poids'
    required
    InputProps={{ inputProps: { min: 0 } }}
    onChange={handledatawithout}
    onPaste={handlepaste}
    onKeyPress={handlekeypress}
    />
   </IonCol>
    <IonCol size='4'>
   <FormControl fullWidth>
    <InputLabel htmlFor="grouped-native-select"
     sx={formLabel}>
  Unité de mesure du poids </InputLabel>
  <Select native defaultValue="" id="grouped-native-select" label="Unité de mesure du poids"
   sx={selectstyle} 
   name='mesure'
   required
   onChange={handledatawithout}>
    <option aria-label="None" value="" />
    <option value="g">g</option>
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
   onChange={handledatawithout}
   required>
  <option aria-label="None" value="" />
    {category.map((c)=>
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
    onChange={handledatawithout}
    required
    >
    <option aria-label="None" value="" />
    {location.map((l)=>
    <option value={l.id}>{l.region}
    </option>
      )}
  </Select>
  </FormControl>
   </IonCol>
   </IonRow> 
   <div className=' centerbtn colajout'>
   <h4 className='redstyle centerbtn'>Vous pouvez choisir jusqu a 10 images de votre produit*</h4>
   <Button
   variant="contained"
   component="label">
   <CameraAltIcon className='zoomicon'/>
  <input
  multiple
  type="file"
  accept="image/*"
  hidden
  onChange={handleimgwithout}

  />
</Button>
{imagewithout.length>0?
<div >
 <IonRow>
 {imagewithout.map(img=>
  <IonCol size='3'>
  <img src={img} alt="" className="imgboutiquedesk" />
  </IonCol>)}
 </IonRow>
</div>:null}
</div>
<div className='colajout'>
<IonRow>
<IonCol size='4'>
 <TextField fullWidth label="Couleur  du produit" id="fullWidth"
 sx={style}
 name="couleur"
 onChange={handledatawithout}
/>
</IonCol>
<IonCol size='4'>
<TextField fullWidth label="Taille du produit" id="fullWidth"
 sx={style}
 name="taille"
 onChange={handledatawithout}
 required
/>
</IonCol>
<IonCol size='4'>
<TextField fullWidth label="Quantite disponible" id="fullWidth"
 sx={style}
 name="qte"
 onPaste={handlepaste}
 type='number'
 onKeyPress={handlekeypress}
 onChange={handledatawithout}
 InputProps={{ inputProps: { min: 1 } }}
 required
/>
</IonCol>
</IonRow>
</div>
<p className='centerbtn colajout'>
<button className="ajoutbtn" type='submit'>
 Ajouter
</button>
</p>
  </form>
  </div>  
</IonGrid>       
</div>
    )
}


function AjoutAvecVariation({category,devise,location,handledatawith,imagewith,handleimgwith,
  handlevariationwithsize,handlevariationwithcolor,handlevariationwithquantite,handlesubmitvariation,
  handlekeypress ,handlepaste}){

return(
<div>
<IonGrid>
<div className='divproduit'>
<form 
onSubmit={handlesubmitvariation}
>
<TextField fullWidth label="Nom du produit" id="fullWidth"
 sx={style}
 name="nom"
 required
onChange={handledatawith}
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
  name='description'
  rows={4}
  onChange={handledatawith}
  />
  <br/><br/> 
   <IonRow>
   <IonCol size='4'>
    <TextField
    fullWidth label="prix" id="fullWidth"
    sx={style}
    type='number'
    disableUnderline
    name='prix'
    required
    InputProps={{ inputProps: { min: 1 } }}
    onChange={handledatawith}
    onPaste={handlepaste}
    onKeyPress={handlekeypress}
    />
   </IonCol>
   <IonCol size='4'>
    <TextField
    fullWidth label="poids du produit" id="fullWidth"
    sx={style}
    type='number'
    disableUnderline
    name='poids'
    required
    InputProps={{ inputProps: { min: 0 } }}
    onChange={handledatawith}
    onPaste={handlepaste}
    onKeyPress={handlekeypress}
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
   onChange={handledatawith}
   >
    <option aria-label="None" value="" />
    <option value="g">g</option>
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
   onChange={handledatawith}
   required
  >
    <option aria-label="None" value="" />
     {category.map((c)=>
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
    onChange={handledatawith}
    required
    >
    <option aria-label="None" value="" />
    {location.map((l)=>
    <option value={l.id}>{l.region}
    </option>
   )}
  </Select>
  </FormControl>
   </IonCol>
   </IonRow> 
   <div className=' centerbtn colajout'>
   <h4 className='redstyle centerbtn'>Les variations du produit*</h4>
   <Button
   variant="contained"
   component="label">
   <CameraAltIcon className='zoomicon'/>
  <input
  multiple
  type="file"
  accept="image/*"
  hidden
  onChange={handleimgwith}
/>
</Button>
{imagewith.length>0?
<div >
 <IonRow>
 {imagewith.map((img,index)=>
  <IonCol size='6'>
  <IonCard>
  <IonRow>
  <IonCol size='6'> 
  <TextField
 fullWidth
 id="outlined-multiline-flexible"
  label="Taille"
  sx={style}
  disableUnderline
  required
  fullWidth
  name='size'
 onChange={(e)=>handlevariationwithsize(e,index)}
  />
<br/> <br/>
 <TextField
 fullWidth
 id="outlined-multiline-flexible"
  label="Couleur"
  sx={style}
  disableUnderline
  required
  fullWidth
  name='color'
  onChange={(e)=>handlevariationwithcolor(e,index)}
  />
  <br/> <br/>
   <TextField
 fullWidth
 id="outlined-multiline-flexible"
  label="Quantite"
  sx={style}
  disableUnderline
  required
  fullWidth
  name='quantite'
  onChange={(e)=>handlevariationwithquantite(e,index)}
  type='number'
 onKeyPress={handlekeypress}
 onPaste={handlepaste}
 InputProps={{ inputProps: { min: 1 } }}
  />
  </IonCol>
  <IonCol size='6'>
   <img src={img} alt="" className="imgboutiquedesk" />
  </IonCol>
  </IonRow>
  </IonCard>
  </IonCol>)}
 </IonRow>
</div>:null}
</div>
<div className='colajout'>
</div>
<p className='centerbtn colajout'>
<button className="ajoutbtn" type='submit'>
 Ajouter
</button>
</p>
  </form>
  </div>  
</IonGrid>     
</div>

)
}


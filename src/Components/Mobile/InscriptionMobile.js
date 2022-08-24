import { IonItem,IonButton,IonLabel,IonInput, IonGrid, IonRow ,IonCol, IonCheckbox, IonText,IonModal,
    IonIcon} from '@ionic/react'
import React,{useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import '../style.css'
import {toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {timeOutline} from 'ionicons/icons'
import axiosInstance from '../../axios'
import {personCircleOutline} from 'ionicons/icons'
import 'react-toastify/dist/ReactToastify.css'; 
import logo from '../asset/logo.jpg'
import PhoneInput from 'react-phone-number-input'


function InscriptionMobile({handleChange,showpassword,setshowpassword,
  showpasswordcon,setshowpasswordcon,handleSubmit,data,handlephone}) {
 
    return (
        <div className='mobile'>
           <div className='divlogoconnexion'>
           <img src={logo} className='logoimgmobile'/> 
           <Link to='/' className='linklogo'> GaalguiShop.com</Link>
           </div>
           <div  className='formmobile'>
            <form onSubmit={handleSubmit} className='ion-align-self-center ion-padding'>
                <IonGrid>
            <IonRow className="ion-align-items-center">
            <IonCol size='6'>
				 <IonIcon icon={personCircleOutline} style={{zoom:'1.5',marginTop:'1px',color:'red'}}/>
				 </IonCol>
            <IonCol  size="10" className="ion-text-center">
             <IonLabel> <p className='centerbtn'><b> Numero de telephone valide <IonText className="asterix">*</IonText> </b></p></IonLabel> 
            </IonCol>
            <IonCol  size="10" className="ion-text-center">
            <IonItem  > 
             <PhoneInput
            //   placeholder="Tel valide"
               countries={["SN"]}
               style={{width:'90%'}}
               defaultCountry="SN"
               addInternationalOption={false}
               className="w3-input "
               value={data.phone}
               name='phone'
               onChange={handlephone}/>
            </IonItem>
            </IonCol>
            <IonCol  size="10" className="ion-text-center">
             <IonLabel> <p className='centerbtn'><b>Prenom<IonText className="asterix">*</IonText></b></p></IonLabel>
            </IonCol>
            <IonCol  size="10" className="ion-text-center">
            <IonItem  >
            <IonInput 
            type='text' 
            name='prenom' 
            onIonChange={handleChange} 
            placeholder='prenom'
            required
            className="w3-input" 
             />
            </IonItem>
            </IonCol>
            <IonCol  size="10" className="ion-text-center">
             <IonLabel> <p className='centerbtn'><b> Nom<IonText className="asterix">*</IonText></b> </p></IonLabel>
            </IonCol>
            <IonCol  size="10" className="ion-text-center">
            <IonItem  >
             <IonInput
              type='text'
               name='nom' 
               onIonChange={handleChange} 
               placeholder='nom'
                required 
                className="w3-input" />
             </IonItem>
             </IonCol>
            <IonCol  size="10" className="ion-text-center">
             <IonLabel> <p className='centerbtn'><b>Mot de passe<IonText className="asterix">*</IonText> </b></p></IonLabel> 
            </IonCol>
            <IonCol  size="10" className="ion-text-center">
            <IonItem  >
            <IonInput 
            type={showpassword?'text':'password'} 
            name='password' 
            required
            onIonChange={handleChange} placeholder='******'
            className="w3-input" 
            />
            <IonCheckbox onIonChange={()=>setshowpassword(!showpassword)} /> 
            </IonItem >
            </IonCol>
            <IonCol  size="10" className="ion-text-center">
             <IonLabel><p className='centerbtn'> <b>Confirmation du mot de passe<IonText className="asterix">*</IonText></b></p></IonLabel> 
            </IonCol>
            <IonCol  size="10" className="ion-text-center">
            <IonItem >
            <IonInput
             type={showpasswordcon?'text':'password'} 
              name='passwordcon' 
              onIonChange={handleChange} 
              placeholder='******'
              required
              className="w3-input" />
              <IonCheckbox onIonChange={()=>setshowpasswordcon(!showpasswordcon)} /> 
            </IonItem >
            </IonCol>
            <IonCol  size="10" className="ion-text-center">
            <button className="w3-btn w3-round-xxlarge w3-indigo" type='submit'>Inscription</button>
             </IonCol>
               </IonRow>
               </IonGrid>
               </form>
               <IonCol  size="12" className="ion-text-center">
                <p>Vous  avez  déja  un  compte? <IonText className='iontext'>
                <Link to='/connexion' className='nodecolink'>Se connecter </Link>
                </IonText></p>
                </IonCol>
              </div>
        
        </div>
    )
}

export default InscriptionMobile

import React  from 'react'
import {Link} from 'react-router-dom'
import { IonGrid, IonRow,IonCol,IonText,IonIcon,IonCheckbox, IonInput } from '@ionic/react';
import {personCircleOutline} from 'ionicons/icons'
import logo from '../asset/logo.jpg'
import PhoneInput from 'react-phone-number-input'


function ConnexionMobile({handleSubmit,handlechange,showpassword,setshowpassword,handlephone,data}) {
   
    return (
        <div className='mobile'>
         <div className='divlogoconnexion'>
		 <img src={logo} className='logoimgmobile'/> 
         <Link to='/' className='linklogo'> GaalguiShop.com</Link>
		 <div className='formmobile'>
		 <form className="w3-container w3-margin" onSubmit={handleSubmit}>
             <IonGrid>
                 <IonRow>
				 <IonCol size='6'>
				 <IonIcon icon={personCircleOutline} style={{zoom:'1.5',marginTop:'1px',color:'red'}}/>
				 </IonCol>
				 <IonCol size='10'>
				 <label>Telephone <IonText className='asterix'>*</IonText> </label>
				 </IonCol>
				 <IonCol size='10'>  
			    <PhoneInput
               // placeholder="Tel"
               countries={["SN"]}
               style={{width:'90%'}}
               defaultCountry="SN"
               addInternationalOption={false}
               className="w3-input "
              value={data.phone}
             name='phone'
               onChange={handlephone}/>
				</IonCol>
				<IonCol size='10'>
				<label>Mot de passe <IonText className='asterix'>*</IonText></label>
				</IonCol>
				<IonCol size='10'>
				<IonInput 
				className="w3-input" 
				type={showpassword?'text':'password'}
				placeholder='********'
				onIonChange={handlechange}
				name='password'
				/>
				<IonCheckbox onIonChange={()=>setshowpassword(!showpassword)}  style={{marginTop:'5px'}}/>
				</IonCol>
				 <IonCol size='10'>
				 <p className='centerbtn'><button type='submit'
				  className="w3-btn w3-round-xxlarge w3-margin w3-indigo">Connexion</button></p>
				 </IonCol>
				 </IonRow>
				 </IonGrid>
				</form>
				<IonGrid>
				<IonRow>
				<IonCol size='12'>
               <p className='centerbtn'>Vous n avez pas encore de compte?<
				   IonText className='iontext'> <Link to='/inscription' className='nodecolink'> 
				S inscrire</Link></IonText></p>
				</IonCol>
                 </IonRow>
             </IonGrid>
				</div>
				
				
         </div>
        </div>
    )
}

export default ConnexionMobile


import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import {IonGrid,IonRow,IonCol,IonText,IonModal,IonIcon,} from '@ionic/react'
import Input from "@material-ui/core/Input";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import {timeOutline} from 'ionicons/icons'
import ReactModal from 'react-modal';
import logo from '../asset/logo.jpg'
import PhoneInput from 'react-phone-number-input'
 

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: '2',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1, 1, 0),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));
//Inscription Desktop
function InscriptionDesk({handleChange,showpassword,setshowpassword,
	showpasswordcon,setshowpasswordcon,handleSubmit,handlephone,data}) {


	const classes = useStyles();
    return (
        <div className='desk inscrip'>
         <div className='inscription'>       
			<div >
            <IonGrid>
             <IonRow>
             <IonCol size='5'>
             <h3>
             <img src={logo} className='logoimgdesk'/> 
             <Link to='/' className='linklogo'> GaalguiShop.com</Link>
             </h3>
             </IonCol>
             <IonCol size='9'>
                <div>
				<form className='form' onSubmit={handleSubmit}>
                <Avatar className={classes.avatar}></Avatar>	
                <p className='centerbtn'> <label>Numero de telephone valide <IonText className='asterix'>*</IonText> </label></p>
					<PhoneInput
              // placeholder="Tel valide"
               countries={["SN"]}
              style={{width:'90%'}}
             defaultCountry="SN"
             addInternationalOption={false}
             className="w3-input w3-border w3-margin"
             value={data.phone}
             name='phone'
             onChange={handlephone}/>
						<p className='centerbtn'> <label>Prenom <IonText className='asterix'>*</IonText> </label></p>
						<Input
							style={{width:'90%'}}
							variant="outlined"
							required
							placeholder='Maty'
                            className="w3-input w3-border w3-margin"
							id="prenom"
							label="prenom"
							name="prenom"
							autoComplete="prenom"
							onChange={handleChange}
							/>
						<p className='centerbtn'> <label>Nom <IonText className='asterix'>*</IonText> </label></p>
							<Input
							style={{width:'90%'}}
							variant="outlined"
							required
                            className="w3-input w3-border w3-margin"
                            placeholder='Diop'
							id="nom"
							label="nom"
							name="nom"
							autoComplete="nom"
							onChange={handleChange}
							/>
                        <p className='centerbtn'> <label>Mot de passe <IonText className='asterix'>*</IonText> </label></p>
							<Input
							style={{width:'90%'}}
							variant="outlined"
							required
                            className="w3-input w3-border w3-margin"
							name="password"
                            placeholder="********"
							label="Mot de passe "
							type={showpassword?'text':'password'}
							id="password"
							autoComplete="current-password"
							onChange={handleChange}
							endAdornment={
								<InputAdornment position="end">
								 <IconButton
									onClick={()=>setshowpassword(!showpassword)}
										//onMouseDown={handleMouseDownPassword}
									  >
										{showpassword ? <Visibility /> : <VisibilityOff />}
									  </IconButton>
									</InputAdornment>}
							/>
                        <p className='centerbtn'> <label>Confirmation du mot de passe <IonText className='asterix'>*</IonText> </label></p>
							<Input
							style={{width:'90%'}}
							variant="outlined"
							required
							className="w3-input w3-border w3-margin"
							name="passwordcon"
							label="Mot de passe "
							type={showpasswordcon?'text':'password'}
							id="password"
                             placeholder="********"
							autoComplete="current-password"
							onChange={handleChange}
							endAdornment={
								<InputAdornment position="end">
								 <IconButton
								onClick={()=>setshowpasswordcon(!showpasswordcon)}
								 >
										{showpasswordcon? <Visibility /> : <VisibilityOff />}
									  </IconButton>
									</InputAdornment>}
							/>
                          <p className='centerbtn'><button 
						  className="w3-btn w3-round-xxlarge w3-indigo" type='submit'>
                          Inscription</button></p>  	
				        </form>
						</div>
                        </IonCol>
                        <IonCol >
                         <p className='centerbtn'>Vous avez un compte?<IonText className='iontext'> <Link to='/connexion' className='nodecolink'> 
			     	Se connecter</Link></IonText></p>
                     </IonCol>

					 </IonRow>
                     </IonGrid>
						</div>
				
			</div>
		 
		
        </div>    
      
    )
}

export default InscriptionDesk

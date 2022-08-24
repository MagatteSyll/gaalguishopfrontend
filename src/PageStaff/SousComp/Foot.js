import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import axiosInstance from '../../axios';
import { useHistory } from 'react-router';
import {IonGrid,IonRow,IonCol,} from '@ionic/react'

export default function Foot() {
  const history=useHistory()

  const Deconnexion=()=>{
   
		localStorage.removeItem('__jdkm__');
		localStorage.removeItem('__jvqm__');
		axiosInstance.defaults.headers['Authorization'] = null;
    history.push('/');
    window.location.reload()
	
  }
 const handletechnique=()=>{
  history.push('/signaldeproblemetechnique')
 }
const handleguide=()=>{
  history.push('/guidestaff')
 }


  return (
    <footer className='footstaf'>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
       // bgcolor="#000000"
        color="black"

      >
        <Container >
        <IonGrid>
       <IonRow>
        <IonCol size='4'>
         <button className='btnfoot' onClick={handletechnique}> 
           Signalez un probleme technique
        </button>
        </IonCol>
        <IonCol size='4'>
        <button className='btnfoot' onClick={handleguide}>Guide</button>
        </IonCol>
        <IonCol size='4'>
        <button className='btnfoot'
        onClick={Deconnexion}>Deconnexion</button>
        </IonCol>
        <IonCol size='12'>
         <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
           GaalguiShop &reg; {new Date().getFullYear()}
          </Box>
        </IonCol>
       </IonRow>
        </IonGrid> 
        </Container>
      </Box>
    </footer>
  );
}

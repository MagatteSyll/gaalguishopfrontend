import { IonCol, IonGrid, IonRow } from '@ionic/react'
import React from 'react'
import { Container } from 'react-bootstrap'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AndroidIcon from '@mui/icons-material/Android';

function FooterDesk({totop}) {
    return (
        <div className='content'> 
        <div className='desk'>
        <div className='footerdesk backlogo'>
        <Container>
           <IonGrid>
               <IonRow>
                   <IonCol size='4'>
                    <h3 className='entetefoot'>Pour nos utilisateurs </h3>
                    <ul>
                        <li>
                       Coin acheteur
                        </li>
                        <li>
                       Coin vendeur
                        </li>
                        <li>
                       Services 
                        </li>
                    </ul>
                   </IonCol>
                   <IonCol size='4'>
                    <h3 className='entetefoot'>Moyens de paiement</h3>
                    <ul>
                        <li>
                       Compte GaalguiMoney
                        </li>
                        <li>
                       GaalguiMoneyBusiness
                        </li>
                        <li>
                       GaalguiMoneyProfessionnel
                        </li>
                    </ul>
                  </IonCol>
                  <IonCol size='4'>
                  <h3 className='entetefoot'>Droits</h3>
                    <ul>
                        <li>
                       Politique de confidentialité
                        </li>
                        <li>
                       Besoin d aide
                        </li>
                    </ul>
                 </IonCol>
                 <IonCol size='4'>
                     <h3 className='entetefoot'>Nous Retrouver sur</h3>
                     <ul>
                        <li>
                       <FacebookIcon className='bluestyle shopicon'/>
                        </li>
                        <li>
                        <InstagramIcon className=' shopicon'/>
                        </li>
                        <li>
                       <TwitterIcon className='bluestyle shopicon'/>
                        </li>
                    </ul>
                 </IonCol>
                 <IonCol size='4'>
                 <h3 className='entetefoot'>Faire partie de la famille GaalguiShop</h3>
                 <ul>
                   <li>
                       l equipe GaalguiShop
                        </li>
                        <li>
                        Carrière
                        </li>
                    </ul>
                 </IonCol>
                 <IonCol size='4'>
                 <h3 className='entetefoot'>Telechargez GaalguiShop</h3>
                 <ul>
                        <li>
                      <PhoneIphoneIcon className='shopicon'/>
                        </li>
                        <li>
                       <AndroidIcon className='shopicon'/>
                        </li>     
                    </ul>
                 </IonCol>
                 <IonCol size='12'>
                 <p className='centerbtn'>GaalguiShop &reg; {new Date().getFullYear()}</p>
                 </IonCol>
               </IonRow>
           </IonGrid>
           </Container>
           </div>
           </div>
        </div>
    )
}

export default FooterDesk

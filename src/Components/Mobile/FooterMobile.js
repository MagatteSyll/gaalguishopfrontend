import React from 'react'
import { Container } from 'react-bootstrap'
import '../style.css'
import { IonCol, IonGrid, IonRow } from '@ionic/react'
function FooterMobile({totop}) {
    return (
        <div className='mobile'>
        <button className='btndrop'>Retour en haut </button>
            <div className='footermobile'>
           <IonGrid>
               <IonRow>
                   <IonCol size='6'>
                    <p> l equipe GaalguiShop</p>
                    <ul>
                        <li>
                       l equipe GaalguiShop
                        </li>
                        <li>
                       l equipe GaalguiShop
                        </li>
                        <li>
                       l equipe GaalguiShop
                        </li>
                    </ul>
                   </IonCol>
                   <IonCol size='6'>
                    <p>Service</p>
                    <ul>
                        <li>
                       l equipe GaalguiShop
                        </li>
                        <li>
                       l equipe GaalguiShop
                        </li>
                        <li>
                       l equipe GaalguiShop
                        </li>
                    </ul>
                  </IonCol>
                  <IonCol size='6'>
                  <p>Droits</p>
                    <ul>
                        <li>
                       l equipe GaalguiShop
                        </li>
                        <li>
                       l equipe GaalguiShop
                        </li>
                        <li>
                       l equipe GaalguiShop
                        </li>
                    </ul>
                 </IonCol>
                 <IonCol size='6'>
                     <p>Nous Retrouver sur</p>
                     <ul>
                        <li>
                       l equipe GaalguiShop
                        </li>
                        <li>
                       l equipe GaalguiShop
                        </li>
                        <li>
                       l equipe GaalguiShop
                        </li>
                    </ul>
                 </IonCol>
                 <IonCol size='6'>
                 <p>Faire partie de la famille GaalguiShop</p>
                 <ul>
                   <li>
                       l equipe GaalguiShop
                        </li>
                        <li>
                       l equipe GaalguiShop
                        </li>
                        <li>
                       l equipe GaalguiShop
                        </li>
                    </ul>
                 </IonCol>
                 <IonCol size='6'>
                 <p>Telechargez GaalguiShop</p>
                 <ul>
                        <li>
                       l equipe GaalguiShop
                        </li>
                        <li>
                       l equipe GaalguiShop
                        </li>
                        <li>
                       l equipe GaalguiShop
                        </li>
                    </ul>
                 </IonCol>
                 <IonCol size='12'>
                 <p className='centerbtn'>GaalguiShop &reg; {new Date().getFullYear()}</p>
                 </IonCol>
               </IonRow>
           </IonGrid>
        </div>
        </div>
    )
}

export default FooterMobile


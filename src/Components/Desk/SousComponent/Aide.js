import React from 'react';
import {Nav, NavDropdown} from 'react-bootstrap'
import {IonText} from '@ionic/react'

function Aide() {
  return (

 <NavDropdown
          id="nav-dropdown-dark-example"
          title={<IonText style={{color:'black'}}>Besoin d aide</IonText>}
          variant="secondary"
          className='dropdown'>
          <div>
          <NavDropdown.Item > <button className='btndrop'> Je suis vendeur</button></NavDropdown.Item>
          <NavDropdown.Item> <button className='btndrop'> je suis acheteur</button></NavDropdown.Item>
          <NavDropdown.Item> <button className='btndrop'> Autre</button></NavDropdown.Item>
          </div>
        </NavDropdown>
      
  
  )
  ;
}

export default Aide;

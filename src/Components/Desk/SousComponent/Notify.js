import React from 'react';
import { Dropdown,} from 'react-bootstrap'
import { IonIcon } from '@ionic/react';
import {notificationsOutline} from 'ionicons/icons'
import './notif.css'





function Notify() {
  return (
<Dropdown>
      <Dropdown.Toggle variant="link" bsPrefix="p-0">
      <IonIcon icon={notificationsOutline} className='zoomicon'/>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
</Dropdown>
  );
}

export default Notify;

import React from 'react'
import FooterDesk from './Desk/FooterDesk'
import FooterMobile from './Mobile/FooterMobile'
import Foot from '../PageStaff/SousComp/Foot'
import * as Scroll from 'react-scroll';

function Footer({isStaf}) {

  const totop=()=>{
    let scroll    = Scroll.animateScroll;
     scroll.scrollToTop();
  }
  return (
    <div>
    {isStaf?<Foot/>:
     <>
      <FooterDesk totop={totop}/>
      <FooterMobile totop={totop}/>
      </>}
    </div>
  )
}

export default Footer

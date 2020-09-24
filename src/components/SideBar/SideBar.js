import React from 'react';
import SideBarItem from '../SideBarItem/SideBarItem';
import { Menu } from 'semantic-ui-react';
import './SideBar.css';

const SideBar = ({changeRoute}) => {
   
    return  (
   <div className='ma4 mt0 navbar scrolled background-color' >
   <Menu borderless vertical stackable fixed='left' className='side-nav'>
      <SideBarItem label='Home' icon='home' className='' onIconClick={()=>changeRoute('home')}/>
      <SideBarItem label='KYC' icon='file' onIconClick={()=>changeRoute('kyc')} />
      <SideBarItem label='Clients' icon='address book' onIconClick={()=>changeRoute('clients')}/>
      <SideBarItem label='Transactions' icon='money' onIconClick={()=>changeRoute('transactions')}/>
      <SideBarItem label='Settings' icon='settings' onIconClick={()=>changeRoute('settings')}/>
   </Menu>
   </div>
    )
}

export default SideBar;
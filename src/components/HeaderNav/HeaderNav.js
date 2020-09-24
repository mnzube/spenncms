import React from 'react';
import './HeaderNav.css';
import { Image, Menu ,Form, Input,Icon} from 'semantic-ui-react';
import logo from '../Logo/spenn.jpeg';

const HeaderNav = () => {
    return  (
   
<Menu borderless className='top-menu' fixed='top'>
<Menu.Item header className='logo'>
  <Image src={logo} size='tiny'/>
</Menu.Item>
<Menu.Menu className='nav-container'>
  <Menu.Item className='search-input'>
    <Form>
      <Form.Field>
        <Input placeholder='Search Tickets'
               size='small'
               action='Go'
        />
      </Form.Field>
    </Form>
  </Menu.Item>
<Menu.Menu position='right'>
<Menu.Item>
  <Icon className='header-icon' name='chat' size='large'/>
</Menu.Item>
<Menu.Item>
  <Icon className='header-icon' name='alarm' size='large'/>
</Menu.Item>
<Menu.Item name='avatar'>
  <Image src='http://via.placeholder.com/80x80' avatar/>
</Menu.Item>
</Menu.Menu>
</Menu.Menu>
</Menu>
    )
}

export default HeaderNav;
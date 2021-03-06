import React from 'react';
import {Icon, Menu} from "semantic-ui-react";
import './SideBarItem.css';

const SideBarItem = (props) => {
    const highlight = props.highlight ? 'highlight-item' : null;
    const {onIconClick} = props
    return (
        <Menu.Item className={['sidebar-item', highlight].join(' ')}>
          <div className='sidebar-item-alignment-container' onClick={()=>onIconClick()}>
            <span><Icon size='large' name={props.icon}/> </span>
            <span>{props.label}</span>
          </div>
        </Menu.Item>
    );
}

export default SideBarItem;
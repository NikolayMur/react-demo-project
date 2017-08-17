import React from 'react';
import {Link} from 'react-router';
import {menuContent} from '../index';

class Menu extends React.Component {
    render() {
        return (
            <div>
                {menuContent.map((item) => <Link className="menu-item" to={item.route} href={item.route}
                                                 key={item.id}>{item.label}</Link>)}
            </div>
        );
    }
}

export default Menu;
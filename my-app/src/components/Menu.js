import React from 'react';
import {Link} from 'react-router';
import {menuContent} from '../index';

class Menu extends React.Component {
    render() {
        console.log('menuContent', menuContent);
        return (
            <div>
                <Link className="menu-item" to="/">Home</Link>
                <Link className="menu-item" to="/categories">Categories</Link>
                <Link className="menu-item" to="/popular">Popular</Link>
            </div>
        );
    }
}

export default Menu;
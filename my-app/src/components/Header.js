import React from 'react';

import Menu from './Menu';

class Header extends React.Component {

    render() {
        return (<div>
            <h1>Header</h1>
            <Menu/>
        </div>)
    }
}

export default Header;
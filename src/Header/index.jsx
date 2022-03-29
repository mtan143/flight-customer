import React from 'react';
import cover from '../resource/cover.png';


function Header(props) {

    return (
        <div>
            <img style={{width: "-webkit-fill-available"}} src={cover} alt=''/>
        </div>
    );
}

export default Header;
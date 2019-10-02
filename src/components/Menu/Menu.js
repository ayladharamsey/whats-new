import React from 'react';
import local from '../../data/local';
import health from '../../data/health';
import entertainment from '../../data/entertainment';
import science from '../../data/science';
import technology from '../../data/technology';
import './Menu.css'

const Menu = ({selectCategory}) => {
    return (
        <nav>
            <h3 onClick={event => selectCategory(technology)} >Tech</h3>
            <h3 onClick={event => selectCategory(local)}>Local</h3>
            <h3 onClick={event => selectCategory(entertainment)}>Entertainment</h3>
            <h3 onClick={event => selectCategory(science)}>Science</h3>
            <h3 onClick={event => selectCategory(health)}>Health</h3>
        </nav>
    )
}

export default Menu;
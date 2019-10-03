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
            <h1> What's New </h1>
            <h3 onClick={() => selectCategory(technology)} >Tech</h3>
            <h3 onClick={() => selectCategory(local)}>Local</h3>
            <h3 onClick={() => selectCategory(entertainment)}>Entertainment</h3>
            <h3 onClick={() => selectCategory(science)}>Science</h3>
            <h3 onClick={() => selectCategory(health)}>Health</h3>
        </nav>
    )
}

export default Menu;
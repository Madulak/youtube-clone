import React from 'react';
import classes from './SidebarWidget.module.css';
import { Link } from 'react-router-dom';



const SidebarWidget = ({name, icon, url}) => {

    return (
        // <div >
            <Link to={url} className={classes.SidebarWidget}>
                {icon}
                <span>{name}</span>
            </Link>
    );
}

export default SidebarWidget;
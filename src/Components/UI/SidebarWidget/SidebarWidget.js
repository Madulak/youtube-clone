import React from 'react';
import classes from './SidebarWidget.module.css';



const SidebarWidget = ({name, icon}) => {

    return (
        <div className={classes.SidebarWidget}>
            {icon}
            <span>{name}</span>
        </div>
    );
}

export default SidebarWidget;
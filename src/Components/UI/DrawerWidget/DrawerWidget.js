import React from 'react';
import classes from './DrawerWidget.module.css';



const DrawerWidget = ({name, icon}) => {

    return (
        <div className={classes.SidebarWidget}>
            {icon}
            <span>{name}</span>
        </div>
    );
}

export default DrawerWidget;
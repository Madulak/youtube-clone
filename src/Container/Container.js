
import React from 'react';
import classes from './Container.module.css';

import Toolbar from '../Components/Toolbar/Toolbar';
import Sidebar from '../Components/Sidebar/Sidebar';

const Container = (props) => {

    return (
        <div className={classes.Container}>
            <div className={classes.Toolbar}>
                <Toolbar />
            </div>

            <div className={classes.Content}>
                <div className={classes.Sidebar}>
                    <Sidebar />
                </div>

                <div className={classes.Body}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Container;
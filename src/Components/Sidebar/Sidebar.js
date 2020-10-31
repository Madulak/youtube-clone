import React, { useState } from 'react';
import classes from './Sidebar.module.css';

import SidebarWidget from '../UI/SidebarWidget/SidebarWidget';
import { Drawer } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';


const Sidebar = () => {

    const [drawer, setDrawer] = useState(false);

    const drawerHandler = () => {
        setDrawer(state => !state);
    }

    return (
        <div className={classes.Sidebar}>
            
        <Drawer
            // className={classes.Drawer}
            variant="temporary"
            anchor="left"
            open={drawer}
            onClose={drawerHandler}
        >
            <div className={classes.Drawer}>
                <p>Hello world</p>
                <p>Hello world</p>
                
                <button onClick={drawerHandler}>Close</button>
            </div>
        </Drawer>
        <button onClick={drawerHandler}>Open</button>
        
            <div className={classes.Border}>
                <SidebarWidget icon={<HomeIcon />} name={"Home"} />
                <SidebarWidget icon={<WhatshotIcon />} name={'Trending'} />
                <SidebarWidget icon={<SubscriptionsIcon />} name={'Subscription'} />
            </div>
            
            <div className={classes.Border}>
                <SidebarWidget icon={<VideoLibraryIcon />} name={'Libray'} />
                <SidebarWidget icon={<SubscriptionsIcon />} name={'Subscription'} />
                <SidebarWidget icon={<HistoryIcon />} name={'History'} />
                <SidebarWidget icon={<WatchLaterIcon />} name={'Watch Later'} />
                <SidebarWidget icon={<ThumbUpAltIcon />} name={'Liked Videos'} />
            </div>
            <h3>Subscriptions</h3>

        </div>
    );
}

export default Sidebar;
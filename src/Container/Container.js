
import React, { useState} from 'react';
import classes from './Container.module.css';

import Toolbar from '../Components/Toolbar/Toolbar';
import Sidebar from '../Components/Sidebar/Sidebar';

import DrawerWidget from '../Components/UI/DrawerWidget/DrawerWidget'
import { Drawer } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

import YouTubeIcon from '@material-ui/icons/YouTube';
import { NavLink } from 'react-router-dom';

const Container = (props) => {

    const [drawer, setDrawer] = useState(false);

    const drawerHandler = () => {
        setDrawer(state => !state);
    }


    return (
        <div className={classes.Container}>
            <div className={classes.Toolbar}>
                <Toolbar drawer={drawerHandler} />
            </div>

            <Drawer
            // className={classes.Drawer}
                variant="temporary"
                anchor="left"
                open={drawer}
                onClose={drawerHandler}
             >
                <div className={classes.Drawer}>
                    <div className={classes.Border}>

                    <div style={{display: 'flex', alignItems: 'center', margin: '10px'}}>
                        <NavLink style={{color: 'red'}} to='/'>
                            <YouTubeIcon className={classes.YoutubeColor} />
                        </NavLink>
                        <NavLink style={{textDecoration: 'none', color: 'black'}} to='/'>
                            <h3 style={{display: 'flex', alignItems: 'center', marginLeft: '10px'}}>Youtube </h3>
                        </NavLink>
                    </div>
                        
                        <DrawerWidget icon={<HomeIcon />} name={"Home"} />
                        <DrawerWidget icon={<WhatshotIcon />} name={'Trending'} />
                        <DrawerWidget icon={<SubscriptionsIcon />} name={'Subscription'} />
                    </div>
                
                    <div className={classes.Border}>
                        <DrawerWidget icon={<VideoLibraryIcon />} name={'Libray'} />
                        <DrawerWidget icon={<SubscriptionsIcon />} name={'Subscription'} />
                        <DrawerWidget icon={<HistoryIcon />} name={'History'} />
                        <DrawerWidget icon={<WatchLaterIcon />} name={'Watch Later'} />
                        <DrawerWidget icon={<ThumbUpAltIcon />} name={'Liked Videos'} />
                    </div>
                    
                    
                </div>
            </Drawer>

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
import React from 'react';
import classes from './Toolbar.module.css';

import MenuIcon from '@material-ui/icons/Menu';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar, Button, IconButton, Tooltip } from '@material-ui/core';

import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';

const Toolbar = ({drawer}) => {

    const userphoto = useSelector(state => state.data.user.photoURL);
    const username = useSelector(state => state.data.user.displayName);
    console.log(userphoto)

    return (
        <div className={classes.Toolbar}>
            <div className={classes.YoutubeLogoContainer}>
                <MenuIcon className={classes.MenuIcon} />
                <MenuIcon onClick={() => drawer()} className={classes.MenuIconDrawer} />
                <div className={classes.YoutubeLogo}>
                    <NavLink to='/'>
                        <YouTubeIcon className={classes.YoutubeColor} />
                    </NavLink>
                    <NavLink style={{textDecoration: 'none'}} to='/'>
                        <h3>Youtube </h3>
                    </NavLink>
                </div>
            </div>

            <div className={classes.Search}>
                <input placeholder={'Search'} />
                <Button className={classes.Button}>
                    <SearchIcon style={{fontSize: '20px', right: 0}} />
                </Button>
            </div>

            <div className={classes.IconsContainer}>
                <IconButton style={{color: 'black'}}>
                    <Tooltip title='Upload Video'>
                        <NavLink to='/upload'>
                            <VideoCallIcon />
                        </NavLink>
                    </Tooltip>
                </IconButton>

                <IconButton className={classes.Apps} style={{color: 'black'}}>
                    <AppsIcon />
                </IconButton>
                
                <IconButton className={classes.Notification} style={{color: 'black'}}>
                    <NotificationsIcon />
                </IconButton>
                
                <IconButton>
                    <Tooltip title={username && username}>
                        <Avatar src={userphoto ? userphoto : ''} alt='User' />
                    </Tooltip>
                </IconButton>
                
            </div>
        </div>
    );
}

export default Toolbar;
import React from 'react';
import classes from './Toolbar.module.css';

import MenuIcon from '@material-ui/icons/Menu';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar, Button, IconButton } from '@material-ui/core';

import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';

const Toolbar = () => {

    const userphoto = useSelector(state => state.data.user.photoURL);
    console.log(userphoto)

    return (
        <div className={classes.Toolbar}>
            <div className={classes.YoutubeLogoContainer}>
                <MenuIcon />
                <div className={classes.YoutubeLogo}>
                    <NavLink to='/'>
                        <YouTubeIcon />
                    </NavLink>
                    <NavLink to='/'>
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
                    <NavLink to='/upload'>
                        <VideoCallIcon />
                    </NavLink>
                </IconButton>

                <IconButton style={{color: 'black'}}>
                    <AppsIcon />
                </IconButton>
                
                <IconButton style={{color: 'black'}}>
                    <NotificationsIcon />
                </IconButton>
                
                <IconButton>
                    <Avatar src={userphoto ? userphoto : ''} alt='User' />
                </IconButton>
                
            </div>
        </div>
    );
}

export default Toolbar;
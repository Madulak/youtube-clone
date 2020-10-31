import React from 'react';
import classes from './VideoThumb.module.css';

import pic from './526290.jpg';
import { Avatar, Tooltip } from '@material-ui/core';
import { Link } from 'react-router-dom';

const VideoThumb = ({channel_name, photo_url, title, thumbnail, video_url, id, views}) => {

    return (
        
        <div className={classes.VideoThumb}>
           <Link className={classes.Link} to={{pathname: '/video/'+id, video_url: video_url}}>
                <img className={classes.Image} src={thumbnail} />
                <div className={classes.TitleContainer}>
                    <Avatar src={photo_url} />
                    <Tooltip title={title}>
                        <p className={classes.Title}>{title}</p>
                    </Tooltip>
                    
                </div>
           </Link>
            <div className={classes.VideoInfo}>
                <p className={classes.ChannelName}>{channel_name}</p>
                <Link className={classes.Link}  to={{pathname: '/video/'+id, video_url: video_url}}>
                    <span > {views} Views</span>
                </Link>
            </div>
        </div>
    );
}

export default VideoThumb;
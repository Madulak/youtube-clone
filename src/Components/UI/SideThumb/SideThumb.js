import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './SideThumb.module.css';

const SideThumb = ({channel_name, views, title, thumbnail, video_url, id}) => {

    return (
        <div className={classes.SideThumb}>
            <NavLink className={classes.Link}  to={{pathname: '/video/'+id, video_url: video_url}}>
                <img className={classes.Image} src={thumbnail} alt={title} />
            </NavLink>
            <div>
                <NavLink className={classes.Link}  to={{pathname: '/video/'+id, video_url: video_url}}>
                    <p className={classes.Title}>{title}</p>
                </NavLink>

                <p className={classes.ChannelName}>{channel_name}</p>
                <NavLink className={classes.Link}  to={{pathname: '/video/'+id, video_url: video_url}}>
                    <span > {views} Views</span>
                </NavLink>
            </div>
        </div>
    );
}

export default SideThumb;
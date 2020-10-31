import { Avatar } from '@material-ui/core';
import React from 'react';
import classes from './Comment.module.css';

const Comment = ({photo_url, comment, username}) => {

    return (
        <div className={classes.Comment}>
            <Avatar src={photo_url} />
            <div>
                <span>{username}</span>
                <p>{comment}</p>
            </div>
        </div>
    );
}

export default Comment;
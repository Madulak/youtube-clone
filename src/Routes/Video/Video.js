import React, { useEffect, useState } from 'react';
import classes from './Video.module.css';
import firebase from 'firebase';
// import '~video-react/dist/video-react.css';

import Container from '../../Container/Container';
import SideThumb from '../../Components/UI/SideThumb/SideThumb';

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
// import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
// import SaveAltIcon from '@material-ui/icons/SaveAlt';
import { Notifications, ThumbDown } from '@material-ui/icons';
import { Avatar, Button } from '@material-ui/core';

import { useParams } from 'react-router-dom';
// import ReactPlayer from 'react-player'

import { useDispatch } from 'react-redux';
import * as commentAction from '../../store/actions';

import db from '../../firebase';

import Comment from '../../Components/UI/Comment/Comment';

const Video = (props) => {

    const { id } = useParams();

    const [isdisable, setIsdisable] = useState(true);
    const [video, setVideo] = useState({});
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const dispatch = useDispatch();

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        let unsubscribe;
        unsubscribe = db.collection('videos').orderBy('views','desc').onSnapshot(snapshot => {
            
            setVideos(snapshot.docs.map(doc => ({
                id: doc.id,
                video: doc.data()})))
        }) 
        return () => {
            unsubscribe ();
        }

    },[])

    useEffect(() => {
        let unsubscribe;
        if(id) {
            unsubscribe = db.collection('videos').doc(id).onSnapshot(snapshot => {
                setVideo(snapshot.data())
            })
        }
        if (comment !== '') {
            setIsdisable(false)
        } else {
            setIsdisable(true)
        }

        return () => {
            unsubscribe()
        }
    },[id, isdisable, comment])

    console.log(video);

    useEffect(() => {
        let unsubscribe;
        if(id) {
            unsubscribe = db.collection('videos').doc(id).collection('comments').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
                setComments(snapshot.docs.map(doc => ({
                    id: doc.id,
                    comment: doc.data()})))
            })
        }
        if (id && video){
            db.collection('videos').doc(id).update({
                views: firebase.firestore.FieldValue.increment(1)
            })
        }
        return () => {
            unsubscribe()
        }
    },[id, ])

    const commentHandler = (e) => {
        e.preventDefault();
        const data = {
            id: id,
            comment: comment,

        }

        if (comment !== '') {
            dispatch(commentAction.comment(data))
            setComment('');
        }
    }

    return (
        <Container>
            <div className={classes.Video}>
                <div className={classes.VideoPlayer}>

                    <div className={classes.Player}>
                        <video
                            style={{ height: "100%", width: '100%' }}
                            src={video && video?.video_url}
                            controls
                            autoPlay
                        />
                    </div>

                    <h3>{video.title}</h3>
                    <div className={classes.ViewsContainer}>
                        <h4>{video?.views} Views  {new Date(video.timestamp?.toDate()).toDateString()}</h4>
                        <div className={classes.IconsContainer}>
                            <ThumbUpIcon /> 
                            <span>5 K</span>
                            <ThumbDown />
                            <span>1 k</span>
                        </div>
                    </div>
                   
                    <div className={classes.SubsContainer}>
                        <div className={classes.SubsInfo}>
                            <Avatar src={video.photo_url} />
                            <div>
                                <p>{video.channel_name}</p>
                                <p>10 Subscribers</p>
                            </div>
                        </div>
                        <div>
                            <Button>Subscribe</Button>
                            <Notifications />
                        </div>
                    </div>

                    <div>
                        <h4>{video.description}</h4>
                    </div>

                    <div className={classes.Comment_Section}>
                            <form className={classes.CommentInput_Container} onSubmit={commentHandler}>
                            <Avatar src={video.photo_url} />
                                <input placeholder='Add a public Comment' value={comment} onChange={e => setComment(e.target.value)} />
                                <button type='submit' style={{display: 'none'}}>comment</button>
                            </form>
                        <div className={classes.ButtonContainer}>
                            <button disabled={isdisable? true :false} onClick={() => setComment('')}>Cancel</button>
                            <button disabled={isdisable? true :false} onClick={commentHandler}>Comment</button>
                        </div>
                    </div>

                    <div>
                    <h4> {comments.length} Comments </h4>
                        {comments && 
                            comments.map(comment => (
                                <Comment 
                                    photo_url={comment.comment.photo_url} 
                                    comment={comment.comment.comment}
                                    username={comment.comment.username}
                                />
                            ))
                        }
                    </div>
                </div>

                

                <div className={classes.Recomendations}>
                    <h3>Recomendations</h3>
                    {videos && 
                        videos.map(video => (
                            <SideThumb key={video.id} views={video.video.views} channel_name={video.video.channel_name} title={video.video.title} thumbnail={video.video.thumbnail} video_url={video.video.video_url} id={video.id} />
                        ))
                    }
                </div>
            </div>
        </Container>
    );
}

export default Video;
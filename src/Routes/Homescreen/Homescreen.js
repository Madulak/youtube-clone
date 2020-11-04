import React, { useEffect, useState } from 'react';
import classes from './Homescreen.module.css';
import Container from '../../Container/Container';

import VideoThumb from '../../Components/UI/VideoThumb/VideoThumb';
import Educational from '../../Components/Educational/Educational';

import db from '../../firebase';

const Homescreen = () => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        let unsubscribe;
        unsubscribe = db.collection('videos').orderBy('timestamp','desc').onSnapshot(snapshot => {
            
            setVideos(snapshot.docs.map(doc => ({
                id: doc.id,
                video: doc.data()})))
        }) 
        return () => {
            unsubscribe ();
        }

    },[])

    console.log(videos)

    return (
        <Container>
            <div className={classes.Homescreen}>
                <Educational />
                {videos && 
                    videos.map(vid => (
                        <VideoThumb 
                            key={vid.id}
                            id={vid.id}
                            channel_name={vid.video.channel_name} 
                            description={vid.video.description}
                            photo_url={vid.video.photo_url}
                            title={vid.video.title}
                            video_url={vid.video.video_url}
                            thumbnail={vid.video.thumbnail}
                            views={vid.video.views}
                        />
                    ))
                }
            </div>
        </Container>
    );
}

export default Homescreen;
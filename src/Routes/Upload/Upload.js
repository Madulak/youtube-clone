import React, { useEffect, useState } from 'react';
import classes from './Upload.module.css';

import Container from '../../Container/Container';
import { Button } from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';
import * as uploadAction from '../../store/actions';

const Upload = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [thumbnail, setThumbnail] = useState();
    const [video, setVideo] = useState({});
    const [isdisable, setIsdisable] = useState(true);

    const progress = useSelector(state => state.data.progress);

    const dispatch = useDispatch();
    console.log(video.size && video.size);
    const videoSize = video.size;

    useEffect(() =>{
        if (videoSize > 29058144) {
            alert('Size to Big')
        }
        if (title !== '' && description !== '' && thumbnail && videoSize < 29058144 ) {
            setIsdisable(false);
        } else {
            setIsdisable(true);
        }
    },[video, title, description, thumbnail, isdisable])

    const uploadHandler = (e) => {
        e.preventDefault();
        const data = {
            title: title,
            description: description,
            thumbnail: thumbnail,
            video: video,
        }

        if (!thumbnail) {
            alert('No pic')
        }

        if (videoSize > 29058144) {
            alert('Size to Big')
        }

        if (videoSize > 29058144) {
            alert('Size to Big')
        }

       if (title !== '' && description !== '' && thumbnail !== undefined && video !== undefined) {
            dispatch(uploadAction.upload(data))
            setTitle('');
            setDescription('');
            setThumbnail();
            setVideo({});
       }

       
    }

    return (
        <Container>
            <div className={classes.Upload}>
                <form onSubmit={uploadHandler} className={classes.UploadBody}>
                    <input value={title} onChange={e => setTitle(e.target.value)} placeholder='Title' />
                    <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder={'description...'}></textarea>
                    <span>select thumbnail</span>
                    <input onChange={e => setThumbnail(e.target.files[0])} type='file' accept='image/*' />
                    <span>select video</span>
                    <label>Video should be under 25MB</label>
                    <input onChange={e => setVideo(e.target.files[0])} type='file' accept='video/*' />
                    <p>progress: {progress}%</p>
                    <button disabled={isdisable ? true : false} type='submit'>Upload</button>
                </form>
            </div>
        </Container>
    );
}

export default Upload;
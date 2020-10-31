import db, { auth, provider, storage } from '../firebase';
import firebase from 'firebase';

export const AUTH = 'AUTH';
export const UPLOAD = 'UPLOAD';
export const PROGRESS = 'PROGRESS';
export const COMMENT = 'COMMENT';

export const authentiation = () => {
    return async dispatch => {
        let response;
            try {
            response = await auth.signInWithPopup(provider)
            const isFirstLogging = response.additionalUserInfo.isNewUser;
            if (isFirstLogging) {
                db.collection('users').add({
                    photourl: response.user.photoURL,
                    username: response.user.displayName,
                })
            }
            
            } catch (error) {
                console.log(error)
                throw error
            }
            dispatch({ type: AUTH, user: response.user})
    }
}

export const comment = (data) => {
    return async (dispatch,getState) => {
        
        const comment = data.comment;
        const videoId = data.id;
        const photo_url = getState().data.user.photoURL;
        const username = getState().data.user.displayName;
        

        db.collection('videos').doc(videoId).collection('comments').add({
            comment: comment,
            photo_url: photo_url,
            username: username,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        dispatch({type: COMMENT})
    }
}

export const upload = (data) => {
    return async (dispatch, getState) => {
        const thumbnail = data.thumbnail;
        const description = data.description;
        const video = data.video;
        const title = data.title;
        const username = getState().data.user.displayName;
        const photoUrl = getState().data.user.photoURL;
        console.log(username);
        
        let firstUrl;
        
        const uploadTask = storage.ref(`thumbnails/${thumbnail.name}`).put(thumbnail);

        uploadTask.on("state_changed", 
            (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100 )
                console.log(progress);
            },
            (error) => {
                console.log(error);
            },
            () => {
                storage.ref("thumbnails")
                .child(thumbnail.name)
                .getDownloadURL()
                .then(url => {
                    console.log(url);
                    firstUrl = url;
                    console.log('{THUMBNAIL UPLOAD__DONE}');
                })
                .catch(error => {
                    console.log(error);
                })
            })

            const uploadTask2 = storage.ref(`videos/${video.name}`).put(video);

        uploadTask2.on("state_changed", 
            (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100 )
                console.log(progress);
                dispatch({ type: PROGRESS, progress: progress})
            },
            (error) => {
                console.log(error);
            },
            () => {
                storage.ref("videos")
                .child(video.name)
                .getDownloadURL()
                .then(url => {
                    console.log(url);
                    db.collection('videos').add({
                        channel_name: username,
                        description: description,
                        photo_url: photoUrl,
                        thumbnail: firstUrl,
                        title: title,
                        video_url: url,
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        views: 0,
                    })
                    console.log('{VIDEO_UPLOAD..DONE}!!');
                })
                .catch(error => {
                    console.log(error);
                })
            })


            dispatch({type: UPLOAD})
    }
}
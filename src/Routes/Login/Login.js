import { Button } from '@material-ui/core';
import React from 'react';
import classes from './Login.module.css';
import logo from './vlog-clipart-6-removebg-preview.png';

import { useDispatch } from 'react-redux';
import * as authActions from '../../store/actions';

const Login = () => {

    const dispatch = useDispatch();

    const loginHandler = () => {
        dispatch(authActions.authentiation());
    }

    return (
        <div className={classes.Login}>
            <div className={classes.LoginBody}>
                <img src={logo} alt={'login logo'} />
                <h3>Sign in to Youtube Clone</h3>
                <Button className={classes.Button} onClick={loginHandler}>Sign in With Google</Button>
            </div>
        </div>
    );
}

export default Login;
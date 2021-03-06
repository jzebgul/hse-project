import React, {useState} from 'react'
import { Typography, Paper, Button } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link, withRouter } from 'react-router-dom'
import {firebase} from '../firebase/firebase';
import { useSelector, useDispatch } from 'react-redux';
import AddTasks from './AddTasks';
import TasksList from './TasksList';

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        [theme.breakpoints.up(400 + theme.spacing(3) * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        marginTop: theme.spacing(3),
    },
})

const Dashboard = props => {

    const { classes } = props
    const onSignout = async (e) => {
        await firebase.auth().signOut()
        //props.history.push('/')
    }
    const username = useSelector(state => state.auth.name);

    return (
        <main className={classes.main}>
            <Paper className={classes.paper}>
                <Typography component="h1" variant="h5">
                    {`Welcome User ${username ? username : ''}`}
                </Typography>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    component={Link}
                    to='/'
                    className={classes.submit}
                    onClick={onSignout}
                >
                    Signout
        </Button>
            </Paper>
            <AddTasks />
            <TasksList />
        </main>
    )
}

export default withRouter(withStyles(styles)(Dashboard))
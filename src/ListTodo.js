import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from '@material-ui/icons/Inbox';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    root: {
        width: '100%',
        //maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    separator: {
        height: "16px",
    },
});

export class ListTodo extends React.Component {
    render() {
        const classes = this.props.classes;
        return(
            <div className={classes.root}>
                <div className={classes.separator} />
                <Typography variant="title" className={classes.title} color="inherited">
                    Already Registered Tasks:
                </Typography>
                <List  component="nav">
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText  primary="Task 1" secondary="new item" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText  primary="Task 2" secondary="new item" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText  primary="Task 3" secondary="new item" />
                    </ListItem>
                </List>
            </div>    
        );
    };
/*
    render() {
        return(
            <ul>
                <li>Task 1</li>
                <li>Task 2</li>
                <li>Task 3</li>
            </ul>
        );
    }
*/
}

ListTodo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListTodo);
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      formControl: {
        margin: theme.spacing.unit,
      },
});

export class AddTodo extends React.Component {

    state = {
        todoItem: '',
    };

    handleChange = event => {
        this.setState( {todoItem: event.target.value });
    }

    render() {
        const classes = this.props.classes;
        return(
            <div className={classes.container}>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="newTodoLabel">New Todo</InputLabel>
                    <Input 
                        id="new-todo-input" 
                        value={this.state.name} 
                        onChange={this.handleChange} 
                    />
                </FormControl>
            </div>
        );
    }
}

AddTodo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddTodo);
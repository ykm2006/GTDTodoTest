import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// どうやら、rootで全体のflexbox指示を行って、
// flexではTitle Typographyのflexにおける挙動を指示しているようだ。
// これにより、AppBox内でのTitleとLoginボタンの配置をコントロールしている。
// flexboxはこのように、AppBar内の横並びのレイアウトを制御するのに向いている。
const styles = {
    root: {
      flexGrow: 1,
    },
    flex: {
      flex: 1,
    },
    menuButton: {
      marginLeft: -25,
  
      marginRight: 20,
    },
  };
  
  // classバージョンのmaterial-ui適用。
  // 本家デモはすべてfunctionベースで戸惑うので、classとしてみる。
  class TodoAppBar extends Component {
    render() {
      // JSSにより、定義したスタイルがthis.props.classesに渡される。
      // そのままではやや長いので定数を定義
      const classes = this.props.classes;
      return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                TODO App
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </div>
      );
    }
  }
  
  TodoAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  // JSSを使う場合はwithStylesでラップする
  export default withStyles(styles)(TodoAppBar);
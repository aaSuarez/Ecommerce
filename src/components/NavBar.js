import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from './img/shop.png'
import { ShoppingCart } from '@material-ui/icons';
import {Badge} from '@material-ui/core'
import { teal} from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  image:{
    width: '50px',
    height: 'auto'
  },
  grow: {
    flexGrow: 1,
  },
  marg:{
    marginRight:'50px'
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src={logo} className={classes.image} alt = 'logo.png'/>
          </IconButton>
          <div className={classes.grow}/>
          <div>

          <Typography variant="h6" color='text primary' className={classes.marg}>
            Hello guests
          </Typography>
          </div>
        
        <div>
          <Button varint='outlined'>
          <strong>Sing In</strong>
          </Button>
        </div>

        <div>
          <IconButton>
            <Badge badgeContent={2} color='secondary'>
            <ShoppingCart fontSize='large' style={{ color: teal[300] }}/>
            </Badge>
          </IconButton>
        </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}

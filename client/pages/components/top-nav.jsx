import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  bar: {
    backgroundColor: '#DFDFDF'

  },
  menuButton: {
    marginLeft: theme.spacing(11),
    backgroundColor: 'white',
    borderRadius: '12px',
    height: 30,
    width: 30
  },
  title: {
    flexGrow: 1
  },
  btn: {
    backgroundColor: 'white',
    borderRadius: '12px'
  },
  icon: {
    width: 10
  }
}));

export default function TopNav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
            <Typography variant="h6" color="textPrimary">
            <span className="iconify" data-icon="map:gym"></span>
              GYMBUDDIE
            </Typography>
          <Button className={classes.menuButton}>
            <span className="iconify" data-icon="bx:bx-barcode-reader" data-width="30" data-height="30"></span>            </Button>
          <IconButton >
            <MenuIcon />
            </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

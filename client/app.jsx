import React from 'react';
import Home from './pages/home';
import TopNav from './pages/components/top-nav';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#DFDFDF',
    width: '100%'

  }
}));

export default function App() {

  const classes = useStyles();

  return (
      <div className={classes.root}>
      <TopNav />
      <Home />
      </div>
  );
}

import React from 'react';
import Home from './pages/home';
import TopNav from './pages/components/top-nav';

export default class App extends React.Component {
  render() {
    return (
      <>
      <TopNav />
      <Home />
      </>
    );
  }
}

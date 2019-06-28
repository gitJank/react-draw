import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import AppBar from '../Components/AppBar/AppBar';
import HomePage from '../Pages/HomePage/HomePage';
import Aside from '../Components/Aside/Aside';
import { fetchUser } from '../redux/actions/user';

const App = ({ dispatchFetchUser }) => {
  const [asideOpen, setAsideOpen] = useState(false);

  useEffect(() => {
    dispatchFetchUser();
  });

  return (
    <div id="app" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <AppBar setAsideOpen={setAsideOpen} asideOpen={asideOpen} />
      <Aside asideOpen={asideOpen} />
      <HomePage />
    </div>
  );
};

const mapdispatchToProps = disptch => {
  return {
    dispatchFetchUser: () => {
      disptch(fetchUser());
    }
  };
};

export default connect(
  null,
  mapdispatchToProps
)(App);

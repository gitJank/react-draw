import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppBar from '../Components/AppBar/AppBar';
import HomePage from '../Pages/HomePage/HomePage';
import DrawPage from '../Pages/DrawPage/DrawPage';
import Aside from '../Components/Aside/Aside';
import { fetchUser } from '../redux/actions/user';

const App = ({ dispatchFetchUser, user }) => {
  const [asideOpen, setAsideOpen] = useState(false);

  useEffect(() => {
    dispatchFetchUser();
  }, [dispatchFetchUser]);

  return (
    <Router>
      <div id="app" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <AppBar setAsideOpen={setAsideOpen} asideOpen={asideOpen} user={user} />
        <Aside asideOpen={asideOpen} />

        <Route exact path="/" component={HomePage} />
        <Route path="/draw" component={DrawPage} />
      </div>
    </Router>
  );
};

const mapStateToProps = state => {
  return {
    user: state.auth
  };
};

const mapdispatchToProps = disptch => {
  return {
    dispatchFetchUser: () => {
      disptch(fetchUser());
    }
  };
};

export default connect(
  mapStateToProps,
  mapdispatchToProps
)(App);

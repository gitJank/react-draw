const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );
  app.get('/auth/google/callback', passport.authenticate('google'), async (req, res) => {
    console.log(req.user);
    res.redirect('http://localhost:3000');
  });

  app.get('/auth/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    console.log('get current user', req.user);
    res.send(req.user);
  });
};

import React from 'react';
import { makeStyles, Button, Card, CardActions, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    padding: '32px 32px 0px 32px',
    height: 'fit-content'
  },
  cardActions: {
    justifyContent: 'flex-end',
    padding: '8px 0px'
  }
}));

const HomePage = ({ history }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <Typography variant="h2">Welcome</Typography>
        <CardActions className={classes.cardActions}>
          <Button>
            <a href="http://localhost:5000/auth/google">Log In</a>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default HomePage;

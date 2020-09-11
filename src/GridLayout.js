import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,

  }
});

const Container = props => <Grid container {...props} />;
const Item = props => <Grid item {...props} />;

const GridLayout = withStyles(styles)(
  ({ classes }) => (
    <div className={classes.root}>
      <Container spacing={4}>
        <Item xs={12}>
          <Paper className={classes.paper}>header</Paper>
        </Item>
        <Item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Item>
        <Item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Item>
        <Item xs={12}>
          <Paper className='footer'>Tien's absolute footer</Paper>
        </Item>
      </Container>
    </div>
  )
);

export default GridLayout;

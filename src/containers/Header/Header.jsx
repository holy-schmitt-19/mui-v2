import React from 'react';
import {
  AppBar,
  Link,
  Toolbar,
  Typography,
  IconButton,
  Grid,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">menumule</Typography>
          <Link underline="none">Signout</Link>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

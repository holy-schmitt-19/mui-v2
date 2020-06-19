import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import { theme } from './globalTheme';
import './App.scss';

import { Header } from './containers';
import { Home } from './pages';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Grid container justify="center" alignItems="center">
          <div className="content">
            <Home />
          </div>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;

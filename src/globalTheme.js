import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#bc0017',
    },
    secondary: {
      main: '#000000',
    },
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: '#000000',
      },
    },
    MuiTypography: {
      h4: {
        margin: 'none',
        fontWeight: 'bold',
      },
    },
    MuiPaper: {
      elevation2: {
        padding: '25px',
      },
    },
    MuiButton: {
      contained: {
        backgroundColor: '#bc0017',
        borderRadius: 25,
        border: 0,
        color: 'white',
        height: 40,
        padding: '0 30px',
        margin: '10px',
        '&:hover': {
          backgroundColor: '#bc0017',
        },
      },
      outlined: {
        borderColor: '#bc0017',
        borderWidth: '2px',
        borderRadius: 25,
      },
    },
    MuiLink: {
      root: {
        color: '#FFFFFF',
      },
    },
    MuiFormControl: {
      root: {
        minWidth: '200px',
      },
    },
  },
  typography: {
    fontFamily: ['Poppins'].join(','),
  },
});

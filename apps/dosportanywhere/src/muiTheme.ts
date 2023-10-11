import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#54D2E0',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

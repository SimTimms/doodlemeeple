import { createMuiTheme } from '@material-ui/core/styles';

export default function themeDesigner() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: ['Quicksand'].join(','),
      fontSize: 12,
      fontWeight: 600,
    },
  });
  theme.palette.primary = {
    ...theme.palette.primary,
    main: '#57499e',
    light: '#b5a8f7',
    dark: '#433878',
  };
  theme.palette.secondary = {
    ...theme.palette.secondary,
    main: '#34BEB1',
    light: '#79D1CB',
    dark: '#248c82',
  };
  theme.palette.error = {
    ...theme.palette.error,
    main: '#ff4081',
    dark: '#d81b60',
  };
  theme.typography.h1 = {
    fontFamily: ['Quicksand'].join(','),
    fontSize: 38,
    margin: 0,
    fontWeight: 600,
  };
  theme.typography.h2 = {
    fontFamily: ['Quicksand'].join(','),
    fontSize: 32,
    margin: 0,
    fontWeight: 200,
  };
  theme.typography.h3 = {
    fontFamily: ['Quicksand'].join(','),
    fontSize: 28,
    margin: 0,
    fontWeight: 200,
  };
  theme.typography.h4 = {
    fontFamily: ['Quicksand'].join(','),
    fontSize: 24,
    margin: 0,
    fontWeight: 600,
  };
  theme.typography.h5 = {
    fontFamily: ['Quicksand'].join(','),
    fontSize: 20,
    margin: 0,
    fontWeight: 200,
  };
  theme.typography.h6 = {
    fontFamily: ['Quicksand'].join(','),
    fontSize: 16,
    margin: 0,
    fontWeight: 200,
  };
  theme.typography.body1 = {
    fontFamily: ['Quicksand'].join(','),
    fontSize: 14,
    margin: 0,
    fontWeight: 400,
  };
  theme.typography.button = {
    fontFamily: ['Quicksand'].join(','),
    fontSize: 14,
    fontWeight: 900,
    color: theme.palette.primary.main,
    borderRadius: 4,
  };
  return theme;
}

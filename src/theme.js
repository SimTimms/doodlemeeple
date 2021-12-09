import { createMuiTheme } from '@material-ui/core/styles';

export default function themeDesigner() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: ['Quicksand'].join(','),
      fontSize: 12,
      fontWeight: 600,
    },
    palette: {
      wrap: {
        main: process.env.REACT_APP_PALETTE_WRAP_MAIN,
        light: process.env.REACT_APP_PALETTE_WRAP_LIGHT,
        dark: process.env.REACT_APP_PALETTE_WRAP_DARK,
        text: process.env.REACT_APP_PALETTE_WRAP_TEXT,
      },
      input: {
        background: process.env.REACT_APP_PALETTE_INPUT_BACKGROUND,
      },
    },
    job: '#fb6793',
    jobPrivate: '#39354E',
    newUser: '#fb6793',
    lastOn: '#39354E',
    game: '#39354E',
    kickstarter: '#39354E',
    public: '#39354E',
  });
  theme.palette.primary = {
    ...theme.palette.primary,
    main: process.env.REACT_APP_PALETTE_PM,
    light: process.env.REACT_APP_PALETTE_PL,
    dark: process.env.REACT_APP_PALETTE_PD,
  };
  theme.palette.secondary = {
    ...theme.palette.secondary,
    main: process.env.REACT_APP_PALETTE_SM,
    light: process.env.REACT_APP_PALETTE_SL,
    dark: process.env.REACT_APP_PALETTE_SD,
  };
  theme.palette.error = {
    ...theme.palette.error,
    main: process.env.REACT_APP_PALETTE_EM,
    dark: process.env.REACT_APP_PALETTE_EL,
    light: process.env.REACT_APP_PALETTE_ED,
  };
  theme.typography.h1 = {
    fontFamily: [process.env.REACT_APP_THEME_FONT].join(','),
    fontSize: 38,
    margin: 0,
    fontWeight: 600,
  };
  theme.typography.h2 = {
    fontFamily: [process.env.REACT_APP_THEME_FONT].join(','),
    fontSize: 32,
    margin: 0,
    fontWeight: 200,
  };
  theme.typography.h3 = {
    fontFamily: [process.env.REACT_APP_THEME_FONT].join(','),
    fontSize: 28,
    margin: 0,
    fontWeight: 200,
  };
  theme.typography.h4 = {
    fontFamily: [process.env.REACT_APP_THEME_FONT].join(','),
    fontSize: 24,
    margin: 0,
    fontWeight: 600,
  };
  theme.typography.h5 = {
    fontFamily: [process.env.REACT_APP_THEME_FONT].join(','),
    fontSize: 20,
    margin: 0,
    fontWeight: 200,
  };
  theme.typography.h6 = {
    fontFamily: [process.env.REACT_APP_THEME_FONT].join(','),
    fontSize: 16,
    margin: 0,
    fontWeight: 200,
  };
  theme.typography.body1 = {
    fontFamily: [process.env.REACT_APP_THEME_FONT].join(','),
    fontSize: 14,
    margin: 0,
    fontWeight: 400,
  };
  theme.typography.button = {
    fontFamily: [process.env.REACT_APP_THEME_FONT].join(','),
    fontSize: 14,
    fontWeight: 900,
    color: theme.palette.primary.main,
    borderRadius: 4,
  };
  return theme;
}


import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const chaloops = {
  fontFamily: 'Chaloops',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  color: '#FFFFFF',
  src: `
    local('chaloops'),
    url('/assets/fonts/chaloops.woff2') format('woff2')`
};

const verdanas = {
  fontFamily: 'Verdanas',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  color: '#FFFFFF',
  src: `
    local('verdanas'),
    url('/assets/fonts/verdanas.woff2') format('woff2')`
};

const theme = responsiveFontSizes(createMuiTheme({
  typography: {
    fontFamily: 'Chaloops',
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': [chaloops]
        },
        MuiCssBaseline: {
          '@global': {
            '@font-face': [verdanas]
          }
        }
      },
    }
  },


  palette: {
    primary: {
      main: '#F28D00',
      dark: '#D17A00',
      light: '#FDF1E0'
    },
    secondary: {
      main: '#00818F',
      dark: '#006772',
      light: '#E0F0F2'
    },
    third: {
      main: '#9D5694',
      dark: '#8A4C82',
      light: '#F3EBF2'
    },
    error: {
      light: '#ff3333',
      main: '#ff0000',
      dark: '#b20000'
    },
    background: {
      default: '#E5E6E7',
      dark: '#00303C',
      light: '#D6D1CB'
    },
    text: {
      primary: '#000000',
      secondary: '#FFFFFF'
    },
  },
  custom: {
    palette: {
      pink: '#D13F75',
      lightBlue: '#0083CB',
      LightGreen: '#65B32E',
      lightRed: '#E8492A',
      yellow: '#FDC300',
      dardRed: '#DD3818'
    },
    layout: {
      topAreaHeight: 160,
      footerAreaHeight: 154
    }
  }
}));

export default theme;
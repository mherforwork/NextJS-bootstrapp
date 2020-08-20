
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import { AppContext } from 'contexts';
import theme from 'styles/theme';

const MyApp = ({ Component, pageProps }) => {

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider>
        <CssBaseline />
        <Component {...pageProps} />
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
import App from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppContent from 'components/AppContent/AppContent';
import { getInitialState } from 'utils';
import theme from 'utils/theme';
import { getOrInitializeStore } from 'redux/initializeStore';
import { RootState } from 'redux/reducers/rootReducer';

import 'styles/globals.css';

export default class CarbiApp extends App {
  reduxStore: RootState;
  
  static async getInitialProps(appContext) {
    const { ctx: { req } } = appContext;
    const rootStore = getOrInitializeStore();
    const [, appProps] = await Promise.all([
      req && getInitialState(req, rootStore),
      App.getInitialProps(appContext),
    ]);
    
    return {
      ...appProps,
      reduxStoreData: rootStore.getState(),
    };
  }
  
  constructor(props) {
    super(props);
    this.reduxStore = getOrInitializeStore(props.reduxStoreData);
  }
  
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }
  
  render() {
    return (
      <Provider store={this.reduxStore}>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <link rel="shortcut icon" href="/static/favicon.ico" type="image/png" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppContent{...this.props} />
        </ThemeProvider>
      </Provider>
    );
  }
};

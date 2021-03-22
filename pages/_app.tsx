import App from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppContent from 'components/AppContent/AppContent';
import { getInitialState } from 'utils';
import theme from 'utils/theme';
import { getOrInitializeStore } from 'redux/initializeStore';
import { getUserAction } from 'redux/actions/user/userActions';
import { removeCookeAction } from 'redux/actions/cookies/cookiesActions';

import 'styles/globals.css';
import 'styles/variables.css';

export default class CarbiApp extends App {
  reduxStore;

  static async getInitialProps(appContext) {
    const { ctx: { req } } = appContext;

    const [reduxData, appProps] = await Promise.all([
      req && getInitialState(req),
      App.getInitialProps(appContext),
    ]);

    return {
      ...appProps,
      reduxData,
    };
  }

  constructor(props) {
    super(props);
    this.reduxStore = getOrInitializeStore(props.reduxData);
  }

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    this.getUser();
  }

  getUser = async () => {
    const { cookiesStore: { token } } = this.reduxStore.getState();
    if (!token) return;

    try {
      await getUserAction();
    } catch (e) {
      removeCookeAction('token');
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
          <AppContent {...this.props} />
        </ThemeProvider>
      </Provider>
    );
  }
}

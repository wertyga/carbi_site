import { FormControlLabel, Switch } from '@material-ui/core';
import { userLogoutAction } from 'redux/actions/user/userActions';

import { useSelector, useDispatch } from 'react-redux';
import storeSelector from './storeSelector';

import useStyles from './styles';

const UserPageHeader = () => {
  const { cookiesStore: { token } } = useSelector(storeSelector);
  const dispatch = useDispatch();
  const styles = useStyles();

  const handleLogout = () => {
    userLogoutAction(dispatch);
  };

  return (
    <div className={`page-head ${styles.userHeader}`}>
      <h1>User page</h1>
      <FormControlLabel
        control={(
          <Switch
            checked={!!token}
            onChange={handleLogout}
            color="secondary"
          />
   )}
        label="logout"
      />
    </div>
  );
};

export default UserPageHeader;

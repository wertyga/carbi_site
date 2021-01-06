import { combineReducers } from 'redux';
import { deviceStore } from './deviceStore/deviceStore';
import { marketsStore } from './marketsStore/marketsStore';
import { cookiesStore } from './cookiesStore/cookiesStore';
import { userStore } from './userStore/userStore';
import { pricesStore } from './prices/pricesStore';

export const rootReducer = combineReducers({
  deviceStore,
  marketsStore,
  cookiesStore,
  pricesStore,
  userStore,
});

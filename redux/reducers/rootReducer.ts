import { combineReducers } from 'redux';
import { deviceStore } from './deviceStore/deviceStore';
import { marketsStore } from './marketsStore/marketsStore';
import { cookiesStore } from './cookiesStore/cookiesStore';
import { userStore } from './userStore/userStore';
import { compareStore } from './compareStore/compareStore';
import { pricesStore } from './pricesStore/pricesStore';
import { notifiesStore } from './notifiesStore/notifiesStore';

export const rootReducer = combineReducers({
  deviceStore,
  marketsStore,
  cookiesStore,
  compareStore,
  pricesStore,
  notifiesStore,
  userStore,
});

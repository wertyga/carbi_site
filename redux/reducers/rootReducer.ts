import { combineReducers } from 'redux';
import { deviceStore } from './deviceStore/deviceStore';
import { marketsStore } from './marketsStore/marketsStore';

export const rootReducer = combineReducers({
  deviceStore,
  marketsStore,
});
export type RootState = ReturnType<typeof rootReducer>;

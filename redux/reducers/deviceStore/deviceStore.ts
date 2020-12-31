import { DeviceTypes, DeviceState } from 'redux/types/device';

export const deviceStore = (state = {}, { type, data }): DeviceState => {
  switch(type) {
    case DeviceTypes.SET_DEVICE:
      return data;

    default:
      return state;
  }
};

import { Dispatch } from 'redux';
import { DeviceTypes } from 'redux/types/device';

export const setDevice = (value: string | null, dispatch: Dispatch) => {
  dispatch({
    type: DeviceTypes.SET_DEVICE,
    data: {
      isMobile: value,
    },
  });
};

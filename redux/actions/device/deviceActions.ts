import { DeviceTypes } from 'redux/types/device';
import { rootAction } from '../rootAction';

export const setDevice = (value: string | null) => {
  const { dispatch } =  rootAction();
  dispatch({
    type: DeviceTypes.SET_DEVICE,
    data: {
      isMobile: value,
    },
  });
};

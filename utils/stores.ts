import type { NextApiRequest } from 'next'
import MobileDetect from 'mobile-detect';
import { setDevice } from 'redux/actions/device/deviceActions';
import { getMarketsDataAction } from 'redux/actions/markets/marketsActions';

const setDeviceType = async (req, rootStore) => {
  const md = new MobileDetect(req.headers['user-agent']);
  setDevice(md.mobile(), rootStore.dispatch);
};

const getMarketData = async (req, rootStore) => {
  if (req.url !== '/chart') return;
  await getMarketsDataAction(rootStore.dispatch);
};

export const getInitialState = async (req: NextApiRequest, rootStore) => {
  await Promise.all([
    setDeviceType(req, rootStore),
    getMarketData(req, rootStore),
  ]);
};

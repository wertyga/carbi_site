import type { NextApiRequest } from 'next'
import Cookies from 'universal-cookie';
import MobileDetect from 'mobile-detect';
import { fetchMarketsData } from 'api/markets';

const getDeviceType = async (req) => {
  const md = new MobileDetect(req.headers['user-agent']);
  return {
    isMobile: md.mobile(),
  };
};

const getCookies = (req) => {
  const cookies = new Cookies(req.headers.cookie);
  return cookies.getAll();
};

export const getInitialState = async (req: NextApiRequest) => {
  const cookiesStore = getCookies(req);
  const [
    deviceStore,
    marketsStore,
  ] = await Promise.all([
    getDeviceType(req),
    fetchMarketsData(cookiesStore.token),
  ]);
  
  return {
    deviceStore,
    marketsStore,
    cookiesStore,
  };
};

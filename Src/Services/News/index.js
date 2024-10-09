import {GET_NEWS} from '../Network';
import {get} from '../main';

const myGetNews = param => {
  const myUrl = GET_NEWS + param;
  console.log('param', param);
  return get(myUrl);
};

export default {myGetNews};

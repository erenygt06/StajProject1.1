import {GET_eczane} from '../Network';
import {get} from '../main';

const myGetEczane = param => {
  const myUrl = GET_eczane + param;
  console.log('param', param);
  return get(myUrl);
};

export default {myGetEczane};

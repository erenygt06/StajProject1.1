import {GET_HAVAD} from '../Network';
import {get} from '../main';

const myGetHavaD = param => {
  const myUrl = GET_HAVAD + param;
  console.log('param', param);
  return get(myUrl);
};

export default {myGetHavaD};

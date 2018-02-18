import { createStore} from 'redux';

const defaultState = {
  originAmount: '0.00'
};

function amount(state = defaultState, action) {
  if (action.type === 'CHANGE_ORIGIN_AMOUNT') {
      return {...state, originAmount: action.data };
  }

  return state;
}
 
var store = createStore(amount);

export default store;
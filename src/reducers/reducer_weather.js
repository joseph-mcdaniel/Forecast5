import { FETCH_WEATHER } from '../actions/index';

// init state of array
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // make a new array, put data inside, flatten
      return [ action.payload.data, ...state ];
  }
  return state;
}

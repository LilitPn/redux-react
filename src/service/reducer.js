import { FETCH_COUNTRIES } from './actions';


const countries = (state = [], action) => {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return [...state, ...action.countries];
    default:
      return state;
  }
};

export default countries;
import { FETCH_USERINFO_FULFILLED, FETCH_USERINFO_REJECTED, FETCH_USERINFO, PENDING,GET_STORE_DATA } from '../actions/actions';

const initialState = {
  isLoading: true,
  user: [],
  error: '',
};

const user = (state = [], action) => {
  switch (action.type) {
    case FETCH_USERINFO:
      return {
        ...state,
        isLoading: false,
        user: action.payload
      };
    case FETCH_USERINFO_FULFILLED:
      return {
        ...state,
        isLoading: false,
        error: ''
      };
    case FETCH_USERINFO_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case PENDING:
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case GET_STORE_DATA:
      return state;
    default:
      return state;
  }
};

export default user;


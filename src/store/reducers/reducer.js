import { FETCH_USERINFO_FULFILLED, FETCH_USERINFO_REJECTED, FETCH_USERINFO, PENDING } from '../actions/actions';

export const initialState = {
  isLoading: false,
  user: [],
  error: '',
};

const user = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export default user;


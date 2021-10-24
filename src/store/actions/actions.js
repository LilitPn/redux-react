export const PENDING = 'PENDING';

export const FETCH_USERINFO_FULFILLED = 'FETCH_USERINFO_FULFILLED';
export const FETCH_USERINFO_REJECTED = 'FETCH_USERINFO_REJECTED';
export const FETCH_USERINFO = 'FETCH_USERINFO';
export const GET_STORE_DATA = 'GET_STORE_DATA';

export function userReqPending(isLoading) {
  return {
    type: PENDING,
    isLoading
  };
}

export function userReq(user) {
  return { type: FETCH_USERINFO, user };
}

export function userReqFulfilled() {
  return { type: FETCH_USERINFO_FULFILLED };
}

export function userReqRejected(error) {
  return {
    type: FETCH_USERINFO_REJECTED,
    error
  };
}

export function getStore() {
  return { type: GET_STORE_DATA };
}

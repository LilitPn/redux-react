import { dispatch } from 'redux';
import HttpService from '../../HttpService/HttpService';
import { userReqPending, userReqFulfilled, userReqRejected } from '../actions/actions'


export const handleUserInfoReq = (requestModel) => {
  return (dispatch) => {
    dispatch(userReqPending(true));

    HttpService
      .postRequestModel(requestModel)
      .then(() => {
        dispatch(userReqFulfilled());
        dispatch(userReqPending(false));
      })
      .catch((error) => {
        dispatch(userReqRejected(error));
      });
  };
};
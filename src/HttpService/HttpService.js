export default class HttpService {
  static _requestOptionsForGetMethod = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  };

  static _requestOptionsForPostMethod = (requestModel) => {
    return {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestModel)
    }
  };

  static postRequestModel(requestModel) {
    return fetch('', this._requestOptionsForPostMethod(requestModel))
      .then(res => res.json());
  }

  static getX() {
    return fetch('', this._requestOptionsForGetMethod)
      .then(res => res.json());
  }
}
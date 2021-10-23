import { dispatch } from 'redux';
import { fetchCountriesSuccess } from './actions';
import { getCountries } from './http-common';

export const handleInitialData = () => {
  return (dispatch) => {
    getCountries()
      .then((response) => {
        const countries = response.data;
        dispatch(fetchCountriesSuccess(countries));
      })
      .catch((error) => {
        throw new Error('Error fetching data.');
      });
  };
};
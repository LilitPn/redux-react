export const FETCH_COUNTRIES = 'FETCH_COUNTRIES';

export function fetchCountriesSuccess(countries) {
  return {
    type: FETCH_COUNTRIES,
    countries,
  };
}
import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY_NAME = "GET_COUNTRY_NAME";
export const POST_RECIPE = "POST_RECIPE";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const ORDER_COUNTRIES_ALF = "ORDER_COUNTRIES_ALF";
export const ORDER_COUNTRIES_POP = "ORDER_COUNTRIES_POP";
export const FILTER_BY_SEASON_ACTIVITY = "FILTER_BY_SEASON_ACTIVITY";

export function getCountries() {
  return async function (dispatch) {
    try {
      let response = await axios.get("http://localhost:3001/countries");
      return dispatch({
        type: GET_COUNTRIES,
        payload: response.data,
      });
    } catch (err) {
      console.error(err);
    }
  };
}

export function getCountryName(id) {
  return async function (dispatch) {
    try {
      let response = await axios.get(`http://localhost:3001/countrie/${id}`);
      return dispatch({
        type: GET_COUNTRY_NAME,
        payload: response.data,
      });
    } catch (err) {
      console.error(err);
    }
  };
}

export function postActivity(payload) {
  return async function (dispatch) {
    try {
      let response = axios.post("http://localhost:3001/create", payload);
      return {
        type: POST_RECIPE,
        data: response,
      };
    } catch (err) {
      console.error(err);
    }
  };
}

export function FilterByContinent(payload) {
  return {
    type: FILTER_BY_CONTINENT,
    payload,
  };
}

export function orderByName(payload) {
  return {
      type: ORDER_COUNTRIES_ALF,
      payload
  }
}

export function orderByPop(payload) {
  return {
      type: ORDER_COUNTRIES_POP,
      payload
  }
}

export function orderByActivity(payload){
  return {
      type: FILTER_BY_SEASON_ACTIVITY,
      payload
  }
}
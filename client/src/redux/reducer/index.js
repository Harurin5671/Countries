import { GET_COUNTRIES, GET_COUNTRY_NAME } from "../actions/index";

const initialState = {
  countries: [],
  activities: [],
  country: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case GET_COUNTRY_NAME:
      return {
        ...state,
        country: action.payload,
      };
    default:
      return { ...state };
  }
}

import { GET_COUNTRIES, GET_COUNTRY_NAME, FILTER_BY_CONTINENT, ORDER_COUNTRIES_ALF, ORDER_COUNTRIES_POP, FILTER_BY_SEASON_ACTIVITY } from "../actions/index";

const initialState = {
  allcountries: [],
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
        allcountries: action.payload,
      };
    case GET_COUNTRY_NAME:
      return {
        ...state,
        country: action.payload,
      };
    case FILTER_BY_CONTINENT:
      const allcountries = state.allcountries;
      const continentFiltered = action.payload === "All" ? allcountries : allcountries.filter(e => e.continents === action.payload);
      return{
        ...state,
        countries: continentFiltered
      }
    case ORDER_COUNTRIES_ALF:
      let sortedArr = action.payload === "ASC" ?
      state.countries.sort(function (a, b) {
        if(a.name > b.name) {
          return 1
        }
        if(b.name > a.name) {
          return -1
        }
        return 0
      }) :
      state.countries.sort(function (a, b) {
        if(a.name > b.name) {
          return -1
        }
        if(b.name > a.name) {
          return 1
        }
        return 0
      })
      return {
        ...state,
        countries: sortedArr
      }
    case ORDER_COUNTRIES_POP:
      let sortedArrPop = action.payload === "MENOR" ?
      state.countries.sort(function (a, b) {
        if(a.population > b.population) {
          return 1
        }
        if(b.population > a.population) {
          return -1
        }
        return 0
      }) :
      state.countries.sort(function (a, b) {
        if(a.population > b.population) {
          return -1
        }
        if(b.population > a.population) {
          return 1
        }
        return 0
      })
      return {
        ...state,
        countries: sortedArrPop
      }
      case FILTER_BY_SEASON_ACTIVITY:
        let filter = state.allcountries;
        console.log("🚀 ~ file: index.js:80 ~ rootReducer ~ filter ", filter )
    default:
      return { ...state };
  }
}

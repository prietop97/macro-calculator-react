import {
  FETCH_STATS_FAILED,
  FETCH_STATS_SUCCESS,
  FETCH_STATS_START,
  SEND_STATS_START,
  SEND_STATS_SUCCESS,
  SEND_STATS_FAILED
} from './userStatsActions';
import { calculateStats } from './userStatsActions';
import { mealPlan } from './userStatsActions';

const initialState = {
  userStatsObj: {},
  isFetching: false,
  error: null,
  totalCalories: '',
  proteinGrams: '',
  carbsGrams: '',
  fatsGrams: '',
  Macros: {}
};

export const userStatsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_STATS_START:
      return {
        ...state,
        isFetching: true,
        error: null,
        userStatsObj: {}
      };
    case FETCH_STATS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        userStatsObj: payload.data,
        totalCalories: payload.calculations.cal,
        proteinGrams: payload.calculations.protein,
        carbsGrams: payload.calculations.carbs,
        fatsGrams: payload.calculations.fats,
        Macros: payload.calculations.macro
      };
    case FETCH_STATS_FAILED:
      return {
        ...state,
        isFetching: false,
        error: payload,
        userStatsObj: {}
      };
    case SEND_STATS_START:
      return {
        ...state,
        isFetching: true,
        error: null,
        userStatsObj: {}
      };
    case SEND_STATS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        userStatsObj: payload.data,
        totalCalories: payload.calculations.cal,
        proteinGrams: payload.calculations.protein,
        carbsGrams: payload.calculations.carbs,
        fatsGrams: payload.calculations.fats,
        Macros: payload.calculations.macro
      };
    case SEND_STATS_FAILED:
      return {
        ...state,
        isFetching: false,
        error: payload,
        userStatsObj: {}
      };
    default:
      return state;
  }
};

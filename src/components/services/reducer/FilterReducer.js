import { ACTION_TYPES } from "../actions/actions";

export const FilterReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.STATUS:
      return { ...state, status: action.payload };
    case ACTION_TYPES.TYPE:
      return { ...state, type: action.payload };
    case ACTION_TYPES.STARTDATE:
      return { ...state, start: action.payload };
    case ACTION_TYPES.ENDDATE:
      return { ...state, end: action.payload };
    default:
      return state;
  }
};

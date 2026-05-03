import { generateUser } from "../static-data";
import { SET_USER } from "../constants/action-types";

const initialState = generateUser();

export default function user(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      // Replace the user state with the authenticated user (or fallback to mock)
      return action.payload || initialState;
    default:
      return state;
  }
}

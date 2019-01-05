import { EDIT_CHAT } from "../constants/action-types";

export default function activeUserId(state = null, action) {
  switch (action.type) {
    case EDIT_CHAT:
      return action.payload.number;

    default:
      return state;
  }
}

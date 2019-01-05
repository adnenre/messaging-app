import {
  SET_TYPING_VALUE,
  SEND_MESSAGE,
  EDIT_CHAT
} from "../constants/action-types";

export default function typing(state = "", action) {
  switch (action.type) {
    case SET_TYPING_VALUE:
      return action.payload;
    case SEND_MESSAGE:
      return ""; //remove text from input field upon submission.
    case EDIT_CHAT:
      return action.payload.text;
    default:
      return state;
  }
}

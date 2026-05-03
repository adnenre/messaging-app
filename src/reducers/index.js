import { combineReducers } from "redux";
import activeChatId from "./activeChatId";
import activeUserId from "./activeUserId";
import contacts from "./contacts";
import messages from "./messages";
import typing from "./typing";
import user from "./user";
import auth from "./auth";

export default combineReducers({
  activeChatId,
  activeUserId,
  contacts,
  messages,
  typing,
  user,
  auth,
});

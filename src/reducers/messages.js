import { getMessages } from "../static-data";
import { SEND_MESSAGE, DELETE_CHAT } from "../constants/action-types";
import _ from "lodash";

export default function messages(state = getMessages(10), action) {
  switch (action.type) {
    case SEND_MESSAGE:
      const { message, userId, chatId } = action.payload;
      const allUserMsgs = state[userId];
      const number = chatId || +_.keys(allUserMsgs).pop() + 1;

      return {
        ...state,
        [userId]: {
          ...allUserMsgs,
          [number]: {
            number,
            text: chatId ? message.concat(" (edited)") : message,
            is_user_msg: true
          }
        }
      };

    case DELETE_CHAT:
      const messageId = action.payload.number;
      const activeUserId = action.payload.activeUserId;

      return {
        ...state,
        [activeUserId]: _.omit(state[activeUserId], messageId)
      };

    default:
      return state;
  }
}

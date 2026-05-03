import { getMessages } from "../static-data";
import { SEND_MESSAGE, DELETE_CHAT } from "../constants/action-types";
import _ from "lodash";

export default function messages(state = getMessages(10), action) {
  switch (action.type) {
    case SEND_MESSAGE:
      const { message, userId, chatId } = action.payload;
      const allUserMsgs = state[userId] || {};
      // Find the highest existing message number (assuming keys are numeric)
      const existingNumbers = Object.keys(allUserMsgs)
        .map(Number)
        .filter((n) => !isNaN(n));
      const nextNumber = existingNumbers.length > 0 ? Math.max(...existingNumbers) + 1 : 0;

      return {
        ...state,
        [userId]: {
          ...allUserMsgs,
          [nextNumber]: {
            number: nextNumber,
            text: message,
            is_user_msg: true,
            timestamp: Date.now(), // IMPORTANT: add timestamp for new messages
          },
        },
      };

    case DELETE_CHAT:
      const messageId = action.payload.number;
      const activeUserId = action.payload.activeUserId;
      return {
        ...state,
        [activeUserId]: _.omit(state[activeUserId], messageId),
      };

    default:
      return state;
  }
}

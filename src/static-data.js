import shortid from "shortid";
import { sentence } from "txtgen";
import { faker } from "@faker-js/faker";
import _ from "lodash";

const users = generateUsers(35);
export const contacts = _.mapKeys(users, "user_id");
export const getMessages = (messagesPerUser) => {
  let messages = {};
  _.forEach(users, (user) => {
    messages[user.user_id] = {
      ..._.mapKeys(generateMsgs(messagesPerUser), "number"),
    };
  });
  return messages;
};

export const state = {
  user: generateUser(),
  messages: getMessages(10),
  typing: "",
  contacts,
  activeUserId: null,
};

export function generateUser() {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    profile_pic: faker.image.image(),
    status: sentence(),
    user_id: shortid.generate(),
  };
}

// Pure JavaScript random timestamp within last 30 days
function getRandomTimestamp() {
  const now = Date.now();
  const thirtyDaysAgo = now - 30 * 24 * 60 * 60 * 1000;
  const randomTime = thirtyDaysAgo + Math.random() * (now - thirtyDaysAgo);
  return Math.floor(randomTime);
}

function generateMsg(number) {
  return {
    number,
    text: sentence(),
    is_user_msg: faker.datatype.boolean(),
    timestamp: getRandomTimestamp(), // <-- only this line added
  };
}

function generateUsers(numberOfUsers) {
  return Array.from({ length: numberOfUsers }, () => generateUser());
}

function generateMsgs(numberOfMsgs) {
  return Array.from({ length: numberOfMsgs }, (v, i) => generateMsg(i));
}

export const getMockUsers = () => [
  {
    id: "1",
    email: "alice@example.com",
    password: "password123",
    name: "Alice",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: "2",
    email: "bob@example.com",
    password: "bobpass",
    name: "Bob",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];

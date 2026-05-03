import * as types from "../constants/action-types";

const initialState = {
  isAuthenticated: !!localStorage.getItem("token"),
  token: localStorage.getItem("token") || null,
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  error: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
    case types.REGISTER_REQUEST:
      return { ...state, loading: true, error: null };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        user: action.payload.user,
        loading: false,
        error: null,
      };
    case types.LOGIN_FAILURE:
    case types.REGISTER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case types.LOGOUT:
      return { ...initialState, isAuthenticated: false, token: null, user: null };
    case types.REGISTER_SUCCESS:
      // Registration success is handled by login, but we keep for completeness
      return { ...state, loading: false };
    default:
      return state;
  }
}

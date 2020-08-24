const initialState = {};

export default function loggins(state = initialState, action) {
  if (action.type === "CHANGE_LOGIN")
    return {
        ...state,
        isLogged: action.payload.uid
    };
  return state;
}
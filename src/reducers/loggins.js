const initialState = [];

export default function loggins(state = initialState, action) {
  if (action.type === "CHANGE_LOGIN")
    return {
        ...state,
        isLogged: [...state.isLogged, action.payload]
    };
  return state;
}
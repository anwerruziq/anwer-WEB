export const initialState = {
  language: "ar",
  theme: "dark",
  activeSection: "home",
};

export const SET_LANGUAGE = "SET_LANGUAGE";
export const TOGGLE_THEME = "TOGGLE_THEME";
export const SET_ACTIVE_SECTION = "SET_ACTIVE_SECTION";

export function storeReducer(state, action) {
  switch (action.type) {
    case SET_LANGUAGE:
      return { ...state, language: action.payload };
    case TOGGLE_THEME:
      return { ...state, theme: state.theme === "dark" ? "light" : "dark" };
    case SET_ACTIVE_SECTION:
      return { ...state, activeSection: action.payload };
    default:
      return state;
  }
}

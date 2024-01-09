function makeActionCreator(type, ...argNames) {
  return function (...args) {
    const action = { type };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  };
}

export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
}

const VISIBLE_MENUS = "VISIBLE_MENUS";
const USER_MENUS = "USER_MENUS";
const GET_MENU = "GET_MENU";
const NEW_MENU = "NEW_MENU";
const EDIT_MENU = "EDIT_MENU";
const DELETE_MENU = "DELETE_MENU";

export const visibleMenus = makeActionCreator(VISIBLE_MENUS, "menuList");
export const userMenus = makeActionCreator(USER_MENUS, "menuList");
export const getMenu = makeActionCreator(GET_MENU, "menu");
export const newMenu = makeActionCreator(NEW_MENU, "menu");
export const editMenu = makeActionCreator(EDIT_MENU, "menu");
export const deleteMenu = makeActionCreator(DELETE_MENU, "message");
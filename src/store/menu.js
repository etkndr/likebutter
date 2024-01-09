import {
  visibleMenus,
  userMenus,
  getMenu,
  newMenu,
  editMenu,
  deleteMenu,
  createReducer,
} from "./actions";

const baseUrl = "https://etkndr.pythonanywhere.com";

export function getVisibleMenus() {
  return async (dispatch) => {
    const res = await fetch(`${baseUrl}/api/menus/visible`);
    const data = await res.json();

    if (res.ok) {
      dispatch(visibleMenus(data));
    } else {
      if (data.errors) {
        return data.errors;
      }
      return ["Error occured, please try again"];
    }
  };
}

export function getUserMenus() {
  return async (dispatch) => {
    const res = await fetch(`${baseUrl}/api/menus/`);
    const data = await res.json();

    if (res.ok) {
      dispatch(userMenus(data));
    } else {
      if (data.errors) {
        return data.errors;
      }
      return ["Error occured, please try again"];
    }
  };
}

export function getMenuById(menuId) {
  return async (dispatch) => {
    const res = await fetch(`${baseUrl}/api/menus/${menuId}`);
    const data = await res.json();

    if (res.ok) {
      dispatch(getMenu(data));
    } else {
      if (data.errors) {
        return data.errors;
      }
      return ["Error occured, please try again"];
    }
  };
}

export const menus = createReducer([], {
  ["VISIBLE_MENUS"]: (state, action) => {
    return { ...state, menuList: action.menuList };
  },
  ["USER_MENUS"]: (state, action) => {
    return { ...state, menuList: action.menuList };
  },
  ["GET_MENU"]: (state, action) => {
    return { ...state, menu: action.menu };
  },
});

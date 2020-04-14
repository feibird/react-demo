import { GET_MENU_LIST, MENU_LIST } from "../actionTypes";

export function getMenu() {
  return {
    type: GET_MENU_LIST
  };
}

export function MenuData() {
  return {
    type: MENU_LIST
  };
}

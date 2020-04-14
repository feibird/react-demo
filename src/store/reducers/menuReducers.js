import { GET_MENU_LIST, MENU_LIST } from "../actionTypes";
import {http} from "../../Service/httpService";

let initState = {
  menu: []
};

function getMenu() {
  return http("/xianju/getMenu").then(item => {
    initState.menu = item.data;
  });
}

export default function menuReducers(state = initState, action) {
  switch (action.type) {
    case MENU_LIST:
      return { menu: state.menu };
    case GET_MENU_LIST:
      getMenu();
      break;
    default:
      return state;
  }
}

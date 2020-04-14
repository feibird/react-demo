import { ADD_COUNT, DEL_COUNT } from "../actionTypes";

const initState = {
  count: 100
};


export default function countReducers(state = initState, action) {
  switch (action.type) {
    case ADD_COUNT:
      return { count: state.count + 1 };
    case DEL_COUNT:
      return { count: state.count - action.num };
    default:
      return state;
  }
}

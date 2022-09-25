import { ACTION_TYPE } from "../ActionTypes/ActionType";

const INITAL_STATE = {
   Task: [],
   TypeValue: "",
};

const IndexReducer = function (state = INITAL_STATE, action) {
   switch (action.type) {
      case ACTION_TYPE.ADD_TASK:
         return {
            ...state,
            TypeValue: action.payload,
         };

      case ACTION_TYPE.PRESS_TO_ADD:
         console.log(state.TypeValue);
         return {
            ...state,
            Task: state.Task.concat(state.TypeValue),
            TypeValue: "",
         };
      default:
         return {
            ...state,
         };
   }
};

export default IndexReducer;

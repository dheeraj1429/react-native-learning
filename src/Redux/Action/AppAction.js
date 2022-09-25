import { ACTION_TYPE } from "../ActionTypes/ActionType";

export const addTask = function (data) {
   return {
      type: ACTION_TYPE.ADD_TASK,
      payload: data,
   };
};

export const pressToAdd = function () {
   return {
      type: ACTION_TYPE.PRESS_TO_ADD,
   };
};

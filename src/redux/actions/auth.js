import { addAuthType, removeAuthType } from "./actionTypes";

export const addAuthCreator = (body) => {
  return {
    type: addAuthType,
    value: body,
  };
};

export const removeAuthCreator = () => {
  return {
    type: removeAuthType,
  };
};

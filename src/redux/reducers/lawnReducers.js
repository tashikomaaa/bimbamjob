import { UPDATE_SIZE_INFO } from "../actionType";

const initialState = {
  size: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SIZE_INFO: {
      const { content } = action.payload;
      return {
        ...state,
        size: content
      };
    }
    default:
      return state;
  }
}

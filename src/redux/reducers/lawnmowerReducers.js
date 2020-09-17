import { UPDATE_ACTIONS_INFO } from "../actionType";

const initialState = {
  actions: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ACTIONS_INFO: {
      const { content } = action.payload;
      return {
        ...state,
        actions: content
      };
    }
    default:
      return state;
  }
}

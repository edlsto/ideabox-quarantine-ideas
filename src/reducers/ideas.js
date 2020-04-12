export const ideas = (state = [], action) => {
  switch (action.type) {
    case "ADD_IDEA":
      return [...state, { ...action.idea, id: Date.now() }];
    case "DELETE_IDEA":
      const newState = state.filter((idea) => {
        console.log(idea.id, action);
        return idea.id !== action.id;
      });
      return newState;
    default:
      return state;
  }
};

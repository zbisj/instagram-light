// reducers manage and change state

// 1. takes an action
// 2. returns state
function postComments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      console.log(...state);
      return [...state, {
        user: action.author,
        text: action.comment
      }]; 
    default:
      return state;
  }
}

function comments(state=[], action) {
  if (typeof action.postId !== 'undefined') {
    console.log(action.postId);
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    };
  }
  return state;
}

export default comments;

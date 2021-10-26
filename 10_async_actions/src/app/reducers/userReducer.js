
const userReducer = ( state = {name: "Daniel", age: 37 }, action) => {
  
  switch (action.type) {
    case 'SET_NAME_FULFILLED':
      state = {
        ...state,  
        name: action.payload
      };
      break;

      case 'SET_AGE':
      state = {
        ...state, 
        age: action.payload,
      };
      break;  
    
      default:
        return state;
  }
      return state; 
}

export default userReducer;

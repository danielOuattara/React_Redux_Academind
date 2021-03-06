import { createStore } from "redux";

const initialState = {
  // 5
  result: 1,
  lastValues: [13, 34, 26],
  vegetables: {
    tomatoes: {
      red: 1,
      "green zebra": 1,
    },
    apples: {
      goldens: 1,
      michette: 1,
    },
  },
};

const reducer = (state = initialState, action) => {
  // 6
  switch (action.type) {
    // case 'ADD':
    // state.result += action.payload  // <= not good to manipulate directly the state
    // break;

    case "ADD":
      state = {
        ...state, // spread operator ES6
        result: state.result + action.payload, // modifying result in the new state
        lastValues: [...state.lastValues, action.payload], // modifying result in the new state
        vegetables: {
          ...state.vegetables,
          tomatoes: {
            ...state.vegetables.tomatoes,
            "green zebra":
              state.vegetables.tomatoes["green zebra"] + action.payload,
          },
          apples: {
            ...state.vegetables.apples,
            goldens: state.vegetables.apples.goldens + action.payload,
          },
        },
      };
      break;

    case "SUBSTRACT":
      state = {
        ...state, // spread operator ES6
        result: state.result + action.payload, // modifying result in the new state
        lastValues: [...state.lastValues, action.payload], // modifying result in the new state
      };
      break;

    default:
      return state;
  }
  return state; // return the new state
};

const store = createStore(reducer); // 7 // reducer holds himself the initial state, see Ligne: 18

store.subscribe(() => {
  //  fat arrow function get fired when the store is updated
  console.log("Store updated ", store.getState());
});

store.dispatch({
  type: "ADD",
  payload: +100,
});

store.dispatch({
  type: "ADD",
  payload: +22,
});

store.dispatch({
  type: "SUBSTRACT",
  payload: -80,
});

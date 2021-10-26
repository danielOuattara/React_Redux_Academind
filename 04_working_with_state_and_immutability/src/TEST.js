const initialState = {
  result: 1,
  lastValues: [],
  vegetables: {
    tomatoes:  {
      red: 1,
      "green zebra":1
    },
    apples: {
      goldens: 1,
      michette: 1
    }
  }
}

const state ={...initialState}

console.table(state)
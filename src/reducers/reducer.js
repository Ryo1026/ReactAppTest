// 原始 Store
// 可切割出來放在 store.js
const initStore = {
  content: "",
  loginStatus: false,
};

// Reducer 都必須是 pure function
// 不更動原先的 state 而是 return 新的 state obj
const myReducer = (state = initStore, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        loginStatus: true,
      };
    case "INPUT":
      return {
        ...state,
        content: action.content,
      };
    default:
      return state;
  }
};

// 專案龐大時
// 眾多的 reducers 可用 combineReducers({reducerA, reducerB...}) 合併
export default myReducer;

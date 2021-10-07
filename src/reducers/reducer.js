// 原始 store
// 可切割出來放在 store.js
const initStore = {
  content: "",
  loginStatus: false,
};

const myReducer = (state = initStore, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        content: action.content,
        loginStatus: true,
      };
    default:
      return state;
  }
};

export default myReducer;

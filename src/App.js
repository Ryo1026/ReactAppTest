import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./MyComponent";

function App() {
  // 函式型的解構寫在return前
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyComponent />
      </header>
    </div>
  );
}

export default App;

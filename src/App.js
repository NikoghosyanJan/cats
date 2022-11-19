import { Provider } from "react-redux";
import "./app.scss"
import Header from "./components/Header";
import Routers from "./routers";
import store from "./store/store";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Routers />
      </div>
    </Provider>
  );
}

export default App;

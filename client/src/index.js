import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/Store.js";
import { Provider } from "react-redux";
import App from "./App.js";


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}> 
  <BrowserRouter>  
    <App />    
  </BrowserRouter>
  </Provider>
);
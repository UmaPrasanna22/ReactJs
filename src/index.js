import ReactDOM from "react-dom/client";
// import Name from "./Navigation"
// import Navigation from "./Navigation";
// import Thirteen from "./Thirteen";
import App from "./App";
// import Home from "./Home";
// import CardList from "./CardList";
const rootElement = document.getElementById('root')
const rootRef = ReactDOM.createRoot(rootElement);
rootRef.render(<h1>Hello World</h1>)
rootRef.render(<App/>)
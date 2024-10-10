import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
// We can also write the above line as:
// ReactDOM.createRoot(entryPoint).render(React.createElement(App));

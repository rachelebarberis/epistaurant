import { createRoot } from "react-dom/client";
//viene tolto perche utilizzo bootstrap import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);
//App è una componente react perchè ha la maiuscola
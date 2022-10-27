import React = require("react");
import { createRoot } from "react-dom/client";
import ActionPage from "./components/ActionPage";

const container = document.getElementById("app");
const root = createRoot(container!);
root.render(<ActionPage />);

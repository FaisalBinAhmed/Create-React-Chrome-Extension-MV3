import React = require("react");
import { createRoot } from "react-dom/client";

const container = document.getElementById("settings");
const root = createRoot(container!);
root.render(<Settings />);

export default function Settings() {
	return <div>Settings Page</div>;
}

import React, { StrictMode } from "react";            // Why React not inside {}?
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.querySelector("#root");  // Why not getElementById?
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

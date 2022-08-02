import React from "react";
import {createRoot} from "react-dom/client";

import "./index.scss"
const App = React.lazy(() => import(/* webpackChunkName: "app" */ './app'));
import App2 from "./app2";

function Index() {
  return <div>
    <App />
    <App2 />
  </div>
}

const root = createRoot(document.getElementById("root"));
root.render(<Index />);

import React from "react";
import {createRoot} from "react-dom/client";

import "./index.scss"
const App = React.lazy(() => import(/* webpackChunkName: "app" */ './app'));
import App2 from "./app2";
import Hello from "./components/hello";

function Index() {
  return <div>
    <App />
    <App2 />
    <Hello name=""/>
  </div>
}

const root = createRoot(document.getElementById("root"));
root.render(<Index />);

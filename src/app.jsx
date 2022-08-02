import {useState} from "react";

import "./app.css";
import "./app.scss";
import web from "./assets/web.webp";
import testTxt from "./test.txt";

function App() {
  const [count, setCount] = useState(1);

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      hello react
      <p className="count">{count}</p>
      <img src={web} alt="web"/>
      <p>{testTxt}</p>
      <button className="click" onClick={handleClick}>click</button>
    </div>
  );
}

export default App;

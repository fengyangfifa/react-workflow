import {useState} from "react";
import "./app.css"
import "./app.scss"

function App() {
  const [count, setCount] = useState(1);

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      hello react
      <p className="count">{count}</p>
      <button className="click" onClick={handleClick}>click</button>
    </div>
  );
}

export default App;
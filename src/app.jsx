import {useState} from "react";

function App() {
  const [count, setCount] = useState(1);

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      hello react
      <p className="count">{count}</p>
      <button onClick={handleClick}>click</button>
    </div>
  );
}

export default App;

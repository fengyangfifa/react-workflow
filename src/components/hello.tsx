import React, {useState} from "react";

import "./hello.scss";
import web from "@/assets/web.webp";
import {HelloProps} from "./he";

function Hello(props: HelloProps) {
  let a: number = 1;

  const [b, setB] = useState<Array<number>>([])
  type A = string | number;

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log(e)
  }

  return (
    <div className="hello" onClick={handleClick}>
      hello-{a}
      <img src={web} alt=""/>
    </div>
  );
}

export default Hello;

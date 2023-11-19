import React, { useEffect } from "react";
import {Core} from "./racing/Core";

const core = new Core();

function App() {
  useEffect(() => {
    core.onInit();

    core.spawnWheel();

    return () => {
      core.onExit();
    };

  }, []);
  return <div>hello</div>;
}

export { App };

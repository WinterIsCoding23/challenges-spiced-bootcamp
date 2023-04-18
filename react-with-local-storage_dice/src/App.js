import { D6Button } from "./components/D6Button";
import History from "./components/History";
import "./styles.css";
import { rolls, handleRoll } from "../src/components/D6Button/index";
import {getD6Roll} from "./utils";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

export default function App() {  

  const [rolls, setRolls] = useLocalStorageState("rolls", { defaultValue: []});
  
  const handleRoll = () => {
    setRolls([{ value: getD6Roll(), time: Date.now() }, ...rolls]);
  };

  const currentRollValue = rolls[0]?.value;

  return (
    <div className="app">
      <main className="app__main">
        <D6Button value={currentRollValue} onRoll={handleRoll}/>
      </main>
      <aside className="app__aside">
        <History rolls={rolls} />
      </aside>
    </div>
  );
}

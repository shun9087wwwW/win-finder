import "./App.css";
import Search from "./pages/Search";
import FormationList from "./pages/FormationList";
import { memo, useState } from "react";

const App = memo(() => {
  //state
  const [inputValueSent, setInputValueSent] = useState("");

  return (
    <div className="App">
      <Search setInputValueSent={setInputValueSent} />
      <FormationList inputValueSent={inputValueSent} />
    </div>
  );
});

export default App;

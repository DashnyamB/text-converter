import { Route, Switch } from "react-router";
import "./App.scss";
import TextConverterPage from "./modules/core/textConverterPage";
import TreeBankPage from "./modules/core/treeBank";

function App() {
  return (
    <div className="container is-widescreen">
      <Switch>
        <Route path="/treebank">
          <TreeBankPage />
        </Route>
        <Route path="/">
          <TextConverterPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

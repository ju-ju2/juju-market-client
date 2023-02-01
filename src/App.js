import "./App.css";
import Mainpagecomponent from "./main";
import { Switch, Route } from "react-router-dom";
import Upladpage from "./upload";
import Productpage from "./product";

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/">
          <Mainpagecomponent />;
        </Route>
        <Route exact={true} path={"/product/:id"}>
          <Productpage />
        </Route>
        <Route exact={true} path={"/upload"}>
          <Upladpage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

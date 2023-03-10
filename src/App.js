import "antd/dist/antd.css";
import "./App.css";
import Mainpagecomponent from "./main";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import Upladpage from "./upload";
import Productpage from "./product";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import Mainpage from "./main";
function App() {
  const history = useHistory();
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="/images/icons/logo.png" />
          </Link>
          <Button
            size="large"
            onClick={function () {
              history.push("/upload");
            }}
            icon={<DownloadOutlined />}
          >
            상품업로드
          </Button>
        </div>
      </div>
      <div id="body">
        <Switch>
          <Route exact={true} path="/">
            <Mainpage />;
          </Route>
          <Route exact={true} path={"/products/:id"}>
            <Productpage />
          </Route>
          <Route exact={true} path={"/upload"}>
            <Upladpage />
          </Route>
        </Switch>
      </div>

      <div id="footer"></div>
    </div>
  );
}

export default App;

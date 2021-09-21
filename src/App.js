import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Content from "./Pages/Content";
import Forms from "./Pages/Forms";
import Components from "./Pages/Components";

function App() {
  return (
    <>
    <Router >
      <Header />
      <Switch>
        <Route exact path="/" component={Layout}/>
        <Route  path="/content" component={Content}/>
        <Route  path="/forms" component={Forms}/>
        <Route  path="/components" component={Components}/>
      </Switch>
    </Router>
      
    </>
  );
}

export default App;

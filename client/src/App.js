import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/Landing";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import FormActivity from "./components/FormActivity/FormActivity";
import Filter from "./components/Filter/Filter";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path={"/"} render={() => <LandingPage />} />
        <Route exact path={"/home"} render={() => <Home />} />
        <Route exact path={"/countrie/:id"} render={() => <Detail />} />
        <Route exact path={"/create"} render={() => <FormActivity />} />
        <Route exact path={"/filter"} render={() => <Filter />} />
      </div>
    </BrowserRouter>
  );
}

export default App;

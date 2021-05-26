import { Route, Switch } from "react-router";
import AboutMe from "./components/AboutMe/AboutMe";
import Navigation from "./components/Navigation";
import "./App.css";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <header>
        <Navigation />
      </header>
      <div>Here is my portfolio web-app</div>
      <Switch>
        <Route exact path="/" component={AboutMe} />
        <Route exact path="projects" component={Projects} />
      </Switch>
    </div>
  );
}

export default App;

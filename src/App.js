import { Route, Switch } from "react-router";
import AboutMe from "./components/AboutMe/AboutMe";
import Navigation from "./components/Navigation";
import "./App.css";
import Projects from "./components/projects/Projects";
import Intro from "./components/Intro/Intro";
import Resume from "./components/Resume/Resume";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <header>
        <Navigation />
      </header>
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" component={Resume} />
      </Switch>
    </div>
  );
}

export default App;

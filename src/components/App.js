import { BrowserRouter as Router, Route, Switch } from 'react-ruter-dom';
import Signup from './Signup';
import Home from './pages/Home';
import Login from './pages/';
import Result from './pages/Result';
import Layout from './Layout';
function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/result" component={Result} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

//Paginas
import Home from './pages/home'
import News from './pages/news'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/news" component={News} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

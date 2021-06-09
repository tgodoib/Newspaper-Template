import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

//Paginas
import Home from './pages/home'
import News from './pages/news'
import Student_News from './pages/student_movement'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/news" component={News} />
        <Route exact path="/movimento_estudantil" component={Student_News} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

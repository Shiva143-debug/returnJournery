import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Form from './components/Form'
import GreenLightRedLight from './components/GreenLightRedLight'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Form} />
      <Route exact path="/green" component={GreenLightRedLight} />
    </Switch>
  </BrowserRouter>
)

export default App

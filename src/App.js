import {BrowserRouter, Switch} from 'react-router-dom'

import Form from './components/Form'
// import GreenLightRedLight from './components/GreenLightRedLight'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Form />
    </Switch>
  </BrowserRouter>
)

export default App

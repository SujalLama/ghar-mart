import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import PropertyScreen from './screens/Property/PropertyScreen';
function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={PropertyScreen}/>
      </Switch>
  </BrowserRouter>
  );
}

export default App;

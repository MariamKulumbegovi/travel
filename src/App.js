
import './App.css';
import { Navbar } from './components/Navbar';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Products } from './Pages/Products';
import { Services } from './Pages/Services';
import { SignUp } from './Pages/SignUp';
import { Footer } from './components/Footer';


function App() {
  return (
    <BrowserRouter>
     <Navbar/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route  path="/products" component={Products}/>
      <Route  path="/services" component={Services}/>
      <Route  path="/sign-up" component={SignUp}/>
     
    </Switch>
    
     
    </BrowserRouter>
  );
}

export default App;

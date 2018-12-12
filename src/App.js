import React from 'react';
import Counter from './Counter'
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import PassingProps from './PassingProps/PassingProps'


const App = (props) => (

  <div>
    <Router>
<Route path='/'exact component={Counter}/>
<Route path='/counter' component={Counter}/>
<Route path='/passing-props' component={PassingProps}/>

    {/* <Counter
    startValue={3}/>
    <PassingProps
    passingValue={5}
    passingFun={()=>alert('bu!')}
    /> */}
   </Router> 
  </div>
)

export default App;

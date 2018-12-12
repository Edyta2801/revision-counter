import React from 'react';
import Counter from './Counter'
import './App.css';
import PassingProps from './PassingProps/PassingProps'


const App = (props) => (

  <div>
    <Counter
    startValue={3}/>
    <PassingProps
    passingValue={5}
    passingFun={()=>alert('bu!')}
    />
  </div>
)

export default App;

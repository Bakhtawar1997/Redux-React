import React from 'react';
import Check from './components/index'
import Elx from './components/hooks'
//import { connect } from 'react-redux'
import './App.css';


function App() {
  // console.log(props.name)
  // console.log(props.check)
  return (
    <div className="App">
     <Check />
     <Elx />
    </div>
  );
}
export default App;

// const mapStateToProps = (state) => ({
//   name: state.name,
//   check: 'check out'
// })



// export default connect(mapStateToProps, null) (App);

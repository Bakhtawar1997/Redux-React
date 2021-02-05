import React from 'react'
// yeh redux export koi bhi file me kr sakte hain
import {useSelector, useDispatch } from 'react-redux'


const Elx = ()  => {
  const names = useSelector(state => state.name)
  const counters = useSelector(state => state.counter);
  
  const dispatch = useDispatch();
 
  //const picture = useSelector(state => state.pic)
    return(
        <div>
            <h1>Checked</h1>
          <a>{names}</a>
          <br/>
            <a>checking {counters}</a>
           <br />
           

<br />
<br />
            {/* increment button  */}
            <button onClick={(() => dispatch({type: 'INCREMENT'}))}>Click Increment</button>
            <br />
            <button onClick={(() => dispatch({type: 'DECREMENT'}))}>Click Decrement</button>
           
        
           
        </div>
        
    );
   
}



 export default Elx;
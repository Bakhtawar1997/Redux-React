


const clickme = {
    counter: 0,
} 
function adding(state = clickme, action){
    switch(action.type){
        case 'INCREMENT' :
            return {counter: state.counter + 1}
         case 'DECREMENT' :
             return {counter: state.counter - 1}
         default:
             return state
    }

}
 export default adding;

// const working = {
//     work: 'working okey',

// }
//  function checks(state = working, action){
//      switch(action.type){
//          case 'CHECKED':
//           return{work: state.work}
//           default:
//               return state
//      }
//     }

// export default checks;
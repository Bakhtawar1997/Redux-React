import reducer from './reducer';
import adding from './action'
import  {createStore} from 'redux';

const store = createStore(adding)

export default store;
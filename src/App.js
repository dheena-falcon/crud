
import './App.css';
import Container from './Component/Container';

import Sidebar from './Component/Sidebar';
import store from './store'
import { Provider } from 'react-redux'
function App() {

  return (
    <div className="flex">
     
   
      <Provider store={store}>
      <Sidebar/>
     <Container />
    </Provider>,
    </div>
  );
}

export default App;

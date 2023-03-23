import { Provider } from 'react-redux'

import Rotas from "./Router/Rotas";
import store from './Redux/Store'

function App() {
  return (
    <>

      <Provider store={store}>

        <Rotas></Rotas>

      </Provider>

    </>
  );
}

export default App;

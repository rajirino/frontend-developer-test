import * as React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './state/store';
import ScreenRoutes from './view/routes';


const App = () => (
      <Provider store={configureStore}>
       <ScreenRoutes />
      </Provider>
);
  
export default App;
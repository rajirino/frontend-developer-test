import { compose, createStore } from "redux";
import createRootReducer from './ducks';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = createStore(
    createRootReducer(),
    composeEnhancers()
)
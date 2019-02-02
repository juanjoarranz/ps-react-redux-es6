import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default initialState => createStore(
    rootReducer,
    initialState,
    applyMiddleware( reduxImmutableStateInvariant() )
);
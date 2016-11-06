// Redux store
import { createStore, applyMiddleware, compose } from 'redux'
// Middleware
import thunkMiddleware from 'redux-thunk'
import createLoggerMiddleware from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
// Local storage persistance
import throttle from 'lodash/throttle'
// Root reducer
import reducers from './reducers'
// Root saga
import sagas from './sagas'

// Create saga and logger middleware
// const sagaMiddleware = createSagaMiddleware()
const loggerMiddleware = createLoggerMiddleware()
// Apply all middleware
const middleware = applyMiddleware(
	thunkMiddleware,
	loggerMiddleware,
	// sagaMiddleware,
)

const configureStore = () => {
	const store = createStore(
		reducers,
		undefined,
		compose(
			middleware
		)
	)
	// Run the root saga
	// sagaMiddleware.run(sagas)

	return store
}

export default configureStore

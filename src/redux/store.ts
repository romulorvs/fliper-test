import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import dashboardReducer from 'src/pages/Dashboard/dashboard-reducer'
import detailsReducer from 'src/pages/Details/details-reducer'
import headerReducer from 'src/components/Header/header-reducer'

const reducers = combineReducers({
  dashboard: dashboardReducer,
  details: detailsReducer,
  header: headerReducer,
})

const configureStore = () =>
  createStore(reducers, applyMiddleware(thunkMiddleware))

export default configureStore

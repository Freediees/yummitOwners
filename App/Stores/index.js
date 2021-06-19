import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'
import { reducer as MenuReducer } from 'App/Containers/homeContainer/store/reducers'
import { reducer as LoginReducer } from 'App/Containers/loginContainer/store/reducers'
import { reducer as DetailReducer } from 'App/Containers/detailOrderContainer/store/reducers'
import { reducer as ExampleReducer } from './Example/Reducers'

export default () => {
  const rootReducer = combineReducers({
    /**
     * Register your reducers here.
     * @see https://redux.js.org/api-reference/combinereducers
     */
    menu: MenuReducer,
    login: LoginReducer,
    detail: DetailReducer,
  })

  return configureStore(rootReducer, rootSaga)
}

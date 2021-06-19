import { takeLatest, all } from 'redux-saga/effects'
import { ExampleTypes } from 'App/Stores/Example/Actions'
import { StartupTypes } from 'App/Stores/Startup/Actions'

import { fetchUser } from './ExampleSaga'
import { LoginTypes } from 'App/Containers/loginContainer/store/actions'
import { MenuTypes } from 'App/Containers/homeContainer/store/actions'
import { DetailTypes } from 'App/Containers/detailOrderContainer/store/actions'

import { fetchLogin } from 'App/Containers/loginContainer/saga'
import { fetchOrder } from 'App/Containers/homeContainer/saga'
import { acceptOrder } from 'App/Containers/detailOrderContainer/saga'

import { startup } from './StartupSaga'

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),
    // Call `fetchUser()` when a `FETCH_USER` action is triggered
    takeLatest(ExampleTypes.FETCH_USER, fetchUser),
    takeLatest(LoginTypes.FETCH_LOGIN, fetchLogin),
    takeLatest(MenuTypes.FETCH_ORDER, fetchOrder),
    takeLatest(DetailTypes.ACCEPT_ORDER, acceptOrder),
  ])
}

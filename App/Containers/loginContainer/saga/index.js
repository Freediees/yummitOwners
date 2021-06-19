import { call, put } from 'redux-saga/effects'
import LoginActions from '../store/actions'
import { userLogin } from 'App/Services/LoginService'
import NavigationService from 'App/Services/NavigationService'

import AsyncStorage from '@react-native-community/async-storage'

const saveAuth = async (phone, email) => {
  AsyncStorage.setItem('phone', phone)
  AsyncStorage.setItem('email', email)
}

export function* fetchLogin(payload) {
  yield put(LoginActions.loginIsLoading())
  try {
    const json = yield call(userLogin, payload.data)
    console.log('response ', json)
    if (json.data.status === 1) {
      NavigationService.navigate('routeTwo', {
        PhoneNumber: payload.data.PhoneNumber,
        EntityId: json.data.data.EntityId,
      })

      saveAuth(payload.data.PhoneNumber, payload.data.Email)

      yield put(LoginActions.loginIsSuccess(json.data.data))
    } else {
      alert('Login Failed...')
      yield put(LoginActions.loginIsFailure('Error'))
    }
  } catch (e) {
    console.log(e)
    yield put(LoginActions.loginIsFailure(e))
  }
}

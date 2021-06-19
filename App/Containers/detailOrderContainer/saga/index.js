import { call, put } from 'redux-saga/effects'
import DetailActions from '../store/actions'
import { acceptOrders } from 'App/Services/DataService'
import NavigationService from 'App/Services/NavigationService'

export function* acceptOrder(payload) {
  console.log('saga is herer', payload)
  // console.log('payload', payload)
  //   const data = {
  //     Token: '082233688938',
  //     EntityId: 20,
  //     PageNo: 1,
  //     Count: 10,
  //     Status: 'process',
  //   }
  //   yield put(MenuActions.menuIsLoading())
  //   try {
  //     const json = yield call(getOrderData, data)
  //     console.log(json.data.data)
  //     if (json.data.status === 1) {
  //       // NavigationService.navigate('routeTwo')
  //       yield put(MenuActions.menuIsSuccess(json.data.data))
  //       // yield put(MenuActions.menuIsFailure(json.data.data))
  //     } else {
  //       alert('Login Failed...')
  //       yield put(MenuActions.menuIsFailure('Error'))
  //     }
  //   } catch (e) {
  //     console.log(e)
  //     yield put(MenuActions.menuIsFailure(e))
  //   }

  yield put(DetailActions.detailIsLoading())
  try {
    const json = yield call(acceptOrders, payload.data)

    console.log(json)
  } catch (e) {
    console.log(e)
  }
}

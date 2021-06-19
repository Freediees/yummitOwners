import { createReducer } from 'reduxsauce'
import { DetailTypes } from './actions'

const INITIAL_STATE = {
  dataDetail: null,
  isLoading: false,
  errorMessage: null,
}

export const detailIsSuccess = (state, { data }) => ({
  ...state,
  dataDetail: data,
  errorMessage: null,
  isLoading: false,
})

export const detailIsLoading = (state) => ({
  ...state,
  isLoading: true,
})

export const detailIsFailure = (state, { data }) => ({
  ...state,
  errorMessage: data,
  isLoading: false,
})

export const reducer = createReducer(INITIAL_STATE, {
  [DetailTypes.DETAIL_IS_SUCCESS]: detailIsSuccess,
  [DetailTypes.DETAIL_IS_LOADING]: detailIsLoading,
  [DetailTypes.DETAIL_IS_FAILURE]: detailIsFailure,
})

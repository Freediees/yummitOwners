import { createReducer } from 'reduxsauce'
import { LoginTypes } from './actions'

const INITIAL_STATE = {
  dataLogin: null,
  isLoading: false,
  errorMessage: null,
}

export const loginIsSuccess = (state, { data }) => ({
  ...state,
  dataLogin: data,
  errorMessage: null,
  isLoading: false,
})

export const loginIsLoading = (state) => ({
  ...state,
  isLoading: true,
})

export const loginIsFailure = (state, { data }) => ({
  ...state,
  errorMessage: data,
  isLoading: false,
})

export const reducer = createReducer(INITIAL_STATE, {
  [LoginTypes.LOGIN_IS_SUCCESS]: loginIsSuccess,
  [LoginTypes.LOGIN_IS_LOADING]: loginIsLoading,
  [LoginTypes.LOGIN_IS_FAILURE]: loginIsFailure,
})

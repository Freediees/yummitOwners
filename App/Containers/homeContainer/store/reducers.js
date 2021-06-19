import { createReducer } from 'reduxsauce'
import { MenuTypes } from './actions'

const INITIAL_STATE = {
  dataMenu: [],
  isLoading: false,
  errorMessage: null,
}

export const menuIsSuccess = (state, { data }) => ({
  ...state,
  dataMenu: data,
  errorMessage: null,
  isLoading: false,
})

export const menuIsLoading = (state) => ({
  ...state,
  isLoading: true,
})

export const menuIsFailure = (state, { data }) => ({
  ...state,
  errorMessage: data,
  isLoading: false,
})

export const reducer = createReducer(INITIAL_STATE, {
  [MenuTypes.MENU_IS_SUCCESS]: menuIsSuccess,
  [MenuTypes.MENU_IS_LOADING]: menuIsLoading,
  [MenuTypes.MENU_IS_FAILURE]: menuIsFailure,
})

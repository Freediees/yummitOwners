import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  loginIsLoading: null,
  loginIsSuccess: ['data'],
  loginIsFailure: ['data'],
  fetchLogin: ['data'],
})

export const LoginTypes = Types
export default Creators

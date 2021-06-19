import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  menuIsLoading: null,
  menuIsSuccess: ['data'],
  menuIsFailure: ['data'],
  fetchOrder: ['data'],
})

export const MenuTypes = Types
export default Creators

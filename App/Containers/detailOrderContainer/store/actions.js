import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  detailIsLoading: null,
  detailIsSuccess: ['data'],
  detailIsFailure: ['data'],
  acceptOrder: ['data'],
})

export const DetailTypes = Types
export default Creators

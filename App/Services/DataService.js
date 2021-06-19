import axios from 'axios'

export const getOrderData = async (payload) => {
  return await axios
    .post(
      `http://yumm-it.com/v1/owner/listOrder`, // login-phone-number`,
      payload,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    )
    .then((response) => {
      return response
    })
    .catch((error) => error)
}

export const acceptOrders = async (payload) => {
  return await axios
    .post(
      `http://yumm-it.com/v1/owner/acceptOrder`, // login-phone-number`,
      payload,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    )
    .then((response) => {
      return response
    })
    .catch((error) => error)
}

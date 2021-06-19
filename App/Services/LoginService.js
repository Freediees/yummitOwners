import axios from 'axios'
// import { Config } from 'App/Config'
// import AsyncStorage from '@react-native-community/async-storage'

export const userLogin = async (payload) => {
  return await axios
    .post(
      `http://yumm-it.com/v1/owner/login`, // login-phone-number`,
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

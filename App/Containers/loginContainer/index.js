import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import LoginScreen from 'App/Components/organism/loginScreen'
import LoginTypes from './store/actions'
import auth from '@react-native-firebase/auth'

import AsyncStorage from '@react-native-community/async-storage'

const LoginContainer = ({ navigation, loginData, fetchLogin }) => {
  const [isLoading, setIsLoading] = useState(false)
  const goToHome = async (phone, email) => {
    // alert('login')
    'sinsi'
    fetchLogin({
      PhoneNumber: await phone,
      Email: await email,
    })
  }

  const checkLogin = async () => {
    setIsLoading(true)
    if (await AsyncStorage.getItem('phone')) {
      console.log(await AsyncStorage.getItem('phone'))
      setIsLoading(false)
      goToHome(AsyncStorage.getItem('phone'), AsyncStorage.getItem('email'))
      // goToHome('+6285740707517', '')
      setIsLoading(false)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    checkLogin()
  }, [])

  return <LoginScreen goToHome={goToHome} parentLoading={isLoading} />
}

const mapStateToProps = (state) => ({
  loginData: state.login,
})

const mapDispatchToProps = (dispatch) => ({
  fetchLogin: (value) => dispatch(LoginTypes.fetchLogin(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)

// import React, { useState, useEffect } from 'react'
// import { connect } from 'react-redux'
// import { View, Text, TextInput, Button } from 'react-native'
// import LoginScreen from 'App/Components/organism/loginScreen'
// import LoginTypes from './store/actions'
// import auth from '@react-native-firebase/auth'

// const LoginContainer = ({ navigation, loginData, fetchLogin }) => {
//   const goToHome = (phone, email) => {
//     // navigation.navigate('routeTwo')
//     fetchLogin({
//       PhoneNumber: phone,
//       Email: email,
//     })
//   }

//   // return <LoginScreen goToHome={goToHome} />

//   const [confirm, setConfirm] = useState(null)

//   const [code, setCode] = useState('')

//   // Handle the button press
//   async function signInWithPhoneNumber(phoneNumber) {
//     console.log('sini')
//     const confirmation = await auth().signInWithPhoneNumber(phoneNumber)
//     // console.log(confirmation)
//     setConfirm(confirmation)
//   }

//   async function confirmCode() {
//     try {
//       const a = await confirm.confirm(code)
//       console.log(a)
//     } catch (error) {
//       console.log('Invalid code.')
//     }
//   }
//   console.log('confirm: ', confirm)
//   if (!confirm) {
//     return (
//       <Button
//         title="Phone Number Sign In"
//         onPress={() => signInWithPhoneNumber('+6285740707517')}
//       />
//     )
//   } else {
//     return (
//       <View>
//         <TextInput value={code} onChangeText={(text) => setCode(text)} />
//         <Button title="Confirm Code" onPress={() => confirmCode()} />
//       </View>
//     )
//   }
// }

// const mapStateToProps = (state) => ({
//   loginData: state.login,
// })

// const mapDispatchToProps = (dispatch) => ({
//   fetchLogin: (value) => dispatch(LoginTypes.fetchLogin(value)),
// })

// export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)

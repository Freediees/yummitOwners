import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import DefaultTextInput from '../../molecule/defaultInputText'
import CustomButton from '../../molecule/customButton'
import Colors from 'App/Theme/Colors'
// import auth from '@react-native-firebase/auth'
import Spinner from 'App/Components/atom/customSpinner'
import firebaseSetup from 'App/Utils/Firebase'

export default function LoginScreen({ goToHome, parentLoading }) {
  const { auth } = firebaseSetup()

  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('+6282233688938')
  const [confirm, setConfirm] = useState(null)
  const [code, setCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber)
    setConfirm(confirmation)
  }

  async function confirmCode() {
    setIsLoading(true)
    try {
      const a = await confirm.confirm(code)

      let fixData = '+62'
      if (phone[0] == '0') {
        fixData = `+62${phone.substring(1)}`
      } else {
        fixData = phone
      }
      setIsLoading(false)
      goToHome(fixData, email)
    } catch (error) {
      setIsLoading(false)
      alert('Invalid code.')
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <Spinner visible={isLoading === true || parentLoading === true} />
      <View style={styles.container}>
        {!confirm ? (
          <DefaultTextInput
            placeholder="Phone Number"
            onChangeText={(text) => {
              setPhone(text)
            }}
          />
        ) : (
          <DefaultTextInput
            placeholder="OTP Code"
            onChangeText={(text) => {
              setCode(text)
            }}
          />
        )}
        {/* <DefaultTextInput placeholder="Password" onChangeText={() => {}} secure={true} /> */}
        <View style={{ alignSelf: 'flex-end' }}>
          <TouchableOpacity>
            <Text style={{ color: Colors.primary, marginVertical: 8 }}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
        <CustomButton
          onPress={() => {
            // goToHome(phone, email)
            confirm ? confirmCode() : signInWithPhoneNumber(phone)
          }}
          label={confirm ? 'Confirm Code' : 'Login'}
        />
      </View>
      <View
        style={{
          marginVertical: 32,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      ></View>
    </View>
  )
}

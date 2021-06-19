import * as React from 'react'
import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyC4SnfJhlrwIrQN1u8lHn301eKQLSqXsTw',
  authDomain: 'yummitowner.firebaseapp.com',
  projectId: 'yummitowner',
  storageBucket: 'yummitowner.appspot.com',
  messagingSenderId: '658615522755',
  appId: '1:658615522755:web:536967dd4e91616adb9976',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default () => {
  return { firebase, auth }
}

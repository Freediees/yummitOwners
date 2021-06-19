import React from 'react'
import Spinner from 'react-native-loading-spinner-overlay'
import Colors from 'App/Theme/Colors'
var Spinners = require('react-native-spinkit')

const CustomSpinner = ({ visible = false }) => {
  return (
    <Spinner
      visible={visible}
      customIndicator={<Spinners isVisible={true} size={50} type={'Wave'} color={Colors.primary} />}
    />
  )
}

export default CustomSpinner

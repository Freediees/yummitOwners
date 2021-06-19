import React from 'react'
import { View, Text, TextInput } from 'react-native'
import Colors from 'App/Theme/Colors'
import PropTypes from 'prop-types'

function DefaultTextInput({ placeholder, onChangeText, secure }) {
  return (
    <View
      style={{
        padding: 2,
        paddingHorizontal: 16,
        width: '100%',
        backgroundColor: Colors.grey,
        borderRadius: 5,
        marginVertical: 8,
      }}
    >
      <TextInput placeholder={placeholder} onChangeText={onChangeText} secureTextEntry={secure} />
    </View>
  )
}

DefaultTextInput.defaultProps = {
  placeholder: 'Text',
  onChangeText: () => {},
  secure: false,
}

DefaultTextInput.propTypes = {
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  secure: PropTypes.bool,
}

export default DefaultTextInput

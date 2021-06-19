import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import Colors from 'App/Theme/Colors'
import PropTypes from 'prop-types'

const CustomButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        width: '100%',
        paddingVertical: 16,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
      }}
      onPress={onPress}
    >
      <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>{label}</Text>
    </TouchableOpacity>
  )
}

CustomButton.defaultProps = {
  label: '',
  onPress: () => {},
}

CustomButton.propTypes = {
  label: PropTypes.string,
  onPress: PropTypes.func,
}

export default CustomButton

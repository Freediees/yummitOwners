import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import Colors from 'App/Theme/Colors'
import Ionicon from 'react-native-vector-icons/Ionicons'

const CustomHeader = ({ title, onLeftPress, onRightPress, iconLeft, iconRight }) => {
  return (
    <View
      style={{
        height: 80,
        flexDirection: 'row',
        backgroundColor: Colors.primary,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
      }}
    >
      <TouchableOpacity onPress={onLeftPress} style={{ opacity: iconLeft ? 1 : 0 }}>
        <Ionicon name={iconLeft || 'alarm'} size={25} color={'white'} />
      </TouchableOpacity>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>{title}</Text>
      <TouchableOpacity onPress={onRightPress} style={{ opacity: iconRight ? 1 : 0 }}>
        <Ionicon name={iconRight || 'alarm'} size={25} color={'white'} />
      </TouchableOpacity>
    </View>
  )
}

CustomHeader.defaultProps = {
  title: '',
  onLeftPress: () => {},
  onRightPress: () => {},
  iconLeft: null,
  iconRight: null,
}

CustomHeader.propTypes = {
  title: PropTypes.string,
  onLeftPress: PropTypes.func,
  onRightPress: PropTypes.func,
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
}

export default CustomHeader

import React from 'react'
import { View, Text } from 'react-native'
import Colors from 'App/Theme/Colors'
import PropTypes from 'prop-types'

export default function Header({ label }) {
  return (
    <View style={{ height: 40, width: '100%', backgroundColor: Colors.primary }}>
      <Text style={{ color: 'white' }}>{label}</Text>
    </View>
  )
}

Header.defaultProps = {
  label: '',
}

Header.propTypes = {
  label: PropTypes.string,
}

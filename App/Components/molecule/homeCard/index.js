import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import Colors from 'App/Theme/Colors'
import Icon from 'react-native-vector-icons/Ionicons'
import { convertDigit } from 'App/Utils/Functions'

export default function HomeCard({ name, qty, total, status, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={{ justifyContent: 'center', alignItems: 'center', margin: 8 }}>
        {/* <Icon name="clipboard-outline" size={30} color={Colors.primary} /> */}
        <Image
          style={{ height: 35, width: 35 }}
          resizeMode="contain"
          source={
            status == 1
              ? require('App/Assets/Images/delivery.png')
              : require('App/Assets/Images/pickup.png')
          }
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 1,
        }}
      >
        <View style={{ justifyContent: 'center' }}>
          <Text style={{ fontWeight: 'bold' }}>{name}</Text>
          <Text style={{ color: '#ababab' }}>{qty} Item</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'flex-end' }}>
          <Text style={{ fontWeight: 'bold' }}>Rp.{convertDigit(total)}</Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 13,
              color: status === 1 ? Colors.purple : Colors.primary,
            }}
          >
            {status === 1 ? 'Delivery' : 'Self-pickup'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

HomeCard.defaultProps = {
  name: '',
  qty: '',
  total: '',
  status: '',
  onPress: () => {},
}

HomeCard.propTypes = {
  name: PropTypes.string,
  qty: PropTypes.number,
  total: PropTypes.number,
  status: PropTypes.number,
  onPress: PropTypes.func,
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 4,
    flexDirection: 'row',
    marginHorizontal: 4,
    marginVertical: 8,

    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
})

import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import Colors from 'App/Theme/Colors'
import Icon from 'react-native-vector-icons/Ionicons'

export default function HomeCard({ name, price, onPress, imageUrl }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={{ justifyContent: 'center', alignItems: 'center', margin: 8 }}>
        <Image
          style={{ width: 62, height: 62, borderRadius: 5 }}
          resizeMode={'cover'}
          source={{
            uri:
              imageUrl ||
              'https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/phut_0.jpg?itok=h30EAnkk',
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 1,
        }}
      >
        <View style={{ justifyContent: 'center', padding: 8 }}>
          <Text style={{ fontWeight: 'bold', marginBottom: 8 }}>{name}</Text>
          <Text style={{ color: '#ababab' }}>{price} Item</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

HomeCard.defaultProps = {
  name: '',
  price: '',
  onPress: () => {},
}

HomeCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  onPress: PropTypes.func,
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 4,
    flexDirection: 'row',
    marginVertical: 8,

    padding: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
})

import React from 'react'
import { View, Text, Image } from 'react-native'

export default function AvatarCard() {
  return (
    <View
      style={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8,
        marginBottom: 32,
        backgroundColor: 'white',
      }}
    >
      <Image
        style={{ width: 100, height: 100, borderRadius: 50 }}
        source={{
          uri:
            'https://i.guim.co.uk/img/media/5827279817bdc9e8c7b655c8f6798c2d53ca1170/0_21_3000_1801/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=79479e545975b375a2bebfbd2f90df8c',
        }}
        resizeMode="cover"
      />
      <Text style={{ marginVertical: 8, marginTop: 16 }}>Bangkit Cafe</Text>
      <Text style={{ fontSize: 10, color: 'grey' }}>Bangkitsanjaya@gmail.com</Text>
    </View>
  )
}

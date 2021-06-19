import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Colors from 'App/Theme/Colors'
import CustomButton from '../../molecule/customButton'

const OrdersData = ({data }) => {
  return (
    <View style={{ marginTop: 16 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View>
          <Text style={{ color: Colors.darkGrey }}>Phone</Text>
          <Text style={{ fontSize: 14, marginBottom: 15 }}>+62857407077070</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            borderColor: Colors.primary,
            borderRadius: 5,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 16,
            minWidth: 80,
            paddingVertical: 4,
          }}
        >
          <Text style={{ color: Colors.primary }}>Call</Text>
        </TouchableOpacity>
      </View>

      <Text style={{ color: Colors.darkGrey }}>Address</Text>
        <Text style={{ fontSize: 14, marginBottom: 15 }}>{data.restaurant_address}</Text>
      <Text style={{ color: Colors.darkGrey }}>Notes</Text>
      <Text style={{ fontSize: 14, marginBottom: 15 }}>
        
      </Text>
    </View>
  )
}

export default function DetailOrderScreen({ data, acceptOrder, goBack }) {
  const renderItem = () => {
    const a = data.items.map((item) => {
      return (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            marginTop: 10,
          }}
          key={item.id}
        >
          <Text style={{ width: '60%' }}>{item.name}</Text>
          <Text style={{ width: '10%' }}>{item.qty}</Text>
          <Text style={{ width: '30%', textAlign: 'right' }}>Rp. {item.price}</Text>
        </View>
      )
    })

    return a
  }

  const _onAccept = () => {
    
    const payload = {
      Token:"+6282233688938",
      EntityId: data.restaurant_id,
      OrderId: data.order_id,
      OrderStatus: "preparing"
    }

    acceptOrder(payload)
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ padding: 25 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 30,
          }}
        >
          <Icon name="arrow-back" size={20} color={'black'} onPress={()=>{ goBack()}} />
          <TouchableOpacity onPress={()=>{ goBack() }}>
            <Text style={{ color: Colors.primary }}>Cancel</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={{ width: 40, height: 40, borderRadius: 50, marginRight: 8 }}
              resizeMode="cover"
              source={require('App/Assets/Images/purpleOrder.png')}
            />
            <View>
        <Text>{data.user_name}</Text>
        <Text>At {data.placed} </Text>
            </View>
          </View>
        <Text>Order #{data.order_id}</Text>
        </View>
        <OrdersData data={data}/>
      </View>
      <View
        style={{
          width: '100%',
          padding: 25,
          paddingVertical: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 2,
          backgroundColor: 'white',
        }}
      >
        {renderItem()}
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'white',
          width: '100%',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3,

          elevation: 5,
          padding: 25,
          paddingBottom: 10,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 8,
          }}
        >
          <Text style={{ fontSize: 18 }}>Total</Text>
        <Text style={{ fontSize: 18 }}>Rp. {data?.total}</Text>
        </View>
        <CustomButton
          label="ACCEPT"
          onPress={() => {
            _onAccept()
          }}
        />
      </View>
    </View>
  )
}

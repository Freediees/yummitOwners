import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import MenuTypes from './store/actions'
import axios from 'axios'

import HomeScreen from 'App/Components/organism/homeScreen'

const HomeContainer = ({ navigation, menu, login, fetchOrder }) => {

  const [dataProccess, setDataProccess] = useState(null)

  useEffect(() => {
    fetchOrder({
      Token: navigation.getParam('PhoneNumber'),
      EntityId: navigation.getParam('EntityId'),
      PageNo: 1,
      Count: 10,
      Status: 'placed',
    })

    fetchProccess()

  }, [login])

  const fetchProccess = async() => {

    const payload = {
      Token: navigation.getParam('PhoneNumber'),
      EntityId: navigation.getParam('EntityId'),
      PageNo: 1,
      Count: 10,
      Status: 'ongoing',
    }

    return await axios
    .post(
      `http://yumm-it.com/v1/owner/acceptOrder`, // login-phone-number`,
      payload,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    )
    .then((response) => {
      //console.log('responsez', response.data)
      if(response?.data?.data){
        setDataProccess(response.data.data)
      }
      return response
    })
    .catch((error) => error)
  }

  const toDetailOrder = (item) => {
    navigation.navigate('DetailOrderContainer', { detail: item })
  }

  return (
    <View style={{ flex: 1 }}>
      {menu ? <HomeScreen toDetailOrder={toDetailOrder} orderList={menu?.dataMenu || []} dataProccess={dataProccess} /> : null}
    </View>
  )
}

const mapStateToProps = (state) => ({
  menu: state.menu,
  login: state.login,
})

const mapDispatchToProps = (dispatch) => ({
  fetchOrder: (value) => dispatch(MenuTypes.fetchOrder(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)

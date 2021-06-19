import React, { useState, useEffect } from 'react'
import { View, Text, Alert, ScrollView, Image } from 'react-native'
import Header from 'App/Components/molecule/customHeader'
import CustomButton from 'App/Components/molecule/customButton'
import TextInput from 'App/Components/molecule/defaultInputText'
import MenuTypes from 'App/Containers/homeContainer/store/actions'
import { connect } from 'react-redux'

const AddMenuScreen = ({ navigation, menu, addMenus }) => {
  const goBack = () => {
    navigation.goBack()
  }

  const [name, setName] = useState(null)
  const [price, setPrice] = useState(null)
  const [dailyStock, setDailyStock] = useState(null)
  const [totalStock, setTotalStock] = useState(null)
  const [desc, setDesc] = useState(null)

  const addMenu = () => {
    const temp = menu.dataMenu
    temp.push({
      id: menu.length + 1,
      name: name,
      price: price,
      dailyStock: dailyStock,
      totalStock: totalStock,
      desc: desc,
      imageUrl:
        'https://www.health.harvard.edu/media/content/images/cr/8c38e37d-e8b9-48dd-a9a8-65083a6115e5.jpg',
    })

    addMenus(temp)
    Alert.alert('Add menu success')
    navigation.goBack()
  }

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <Header title={'New Menu'} iconLeft={'chevron-back'} onLeftPress={() => goBack()} />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 }}>
          <View style={{ width: 200, height: 120, marginTop: 30, marginBottom: 20 }}>
            <Image
              style={{ width: '100%', height: 100 }}
              resizeMode="stretch"
              source={require('App/Assets/Images/imagePlaceholder.png')}
            />
            <View
              style={{
                height: 25,
                width: '100%',
                backgroundColor: 'grey',
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ color: 'white', fontSize: 12 }}>Choose an Image</Text>
            </View>
          </View>

          <TextInput placeholder={'Enter Menu Name'} onChangeText={(text) => setName(text)} />
          <View style={{ width: '100%', flexDirection: 'row', flex: 1 }}>
            <View style={{ flex: 1, marginRight: 4 }}>
              <TextInput
                placeholder={'Enter Normal Price'}
                onChangeText={(text) => setPrice(text)}
              />
            </View>
            <View style={{ flex: 1, marginLeft: 4 }}>
              <TextInput placeholder={'Daily Stock'} onChangeText={(text) => setDailyStock(text)} />
            </View>
          </View>

          <TextInput placeholder={'Overall Stock'} onChangeText={(text) => setTotalStock(text)} />
          <TextInput placeholder={'Description'} onChangeText={(text) => setDesc(text)} />
          <CustomButton label={'ADD MENU'} onPress={() => addMenu()} />
        </View>
      </View>
    </ScrollView>
  )
}

const mapStateToProps = (state) => ({
  menu: state.menu,
})

const mapDispatchToProps = (dispatch) => ({
  addMenus: (value) => dispatch(MenuTypes.menuIsSuccess(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddMenuScreen)

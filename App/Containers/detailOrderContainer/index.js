import React from 'react'
import DetailOrderScreen from 'App/Components/organism/detailOrderScreen'
import { connect } from 'react-redux'
import DetailTypes from './store/actions'

const DetailOrder = ({ navigation, route, acceptOrder }) => {
  const goBack = () => {
    navigation.goBack()
  }

  const data = navigation.getParam('detail')
  return <DetailOrderScreen data={data} acceptOrder={acceptOrder} goBack={goBack} />
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  acceptOrder: (value) => dispatch(DetailTypes.acceptOrder(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailOrder)

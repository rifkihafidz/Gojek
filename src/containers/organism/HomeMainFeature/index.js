import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MainFeature from '../../../components/molecules/MainFeature'

class HomeMainFeature extends Component {
  render() {
    return (
      <View style={styles.mainFeatureWrapper}>
        <View style={styles.mainFeature}>
          <MainFeature iconMainFeature={require('../../../assets/icon/go-ride.png')} textMainFeature="GO-RIDE" />
          <MainFeature iconMainFeature={require('../../../assets/icon/go-car.png')} textMainFeature="GO-CAR" />
          <MainFeature iconMainFeature={require('../../../assets/icon/go-bluebird.png')} textMainFeature="GO-BLUEBIRD" />
          <MainFeature iconMainFeature={require('../../../assets/icon/go-send.png')} textMainFeature="GO-SEND" />
          <MainFeature iconMainFeature={require('../../../assets/icon/go-deals.png')} textMainFeature="GO-DEALS" />
          <MainFeature iconMainFeature={require('../../../assets/icon/go-pulsa.png')} textMainFeature="GO-PULSA" />
          <MainFeature iconMainFeature={require('../../../assets/icon/go-food.png')} textMainFeature="GO-FOOD" />
          <MainFeature iconMainFeature={require('../../../assets/icon/go-more.png')} textMainFeature="MORE" />
        </View>
      </View>
    )
  }
}

export default HomeMainFeature

const styles = StyleSheet.create({
  mainFeatureWrapper: { marginTop: 18, flexDirection: 'row', flexWrap: 'wrap' },
  mainFeature: { justifyContent: 'space-between', flexDirection: 'row', width: '100%', flexWrap: 'wrap' },
})

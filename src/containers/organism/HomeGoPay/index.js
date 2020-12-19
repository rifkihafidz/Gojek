import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import GopayFeature from '../../../components/molecules/GopayFeature'

class HomeGoPay extends Component {
  render() {
    return (
      <View style={styles.gopayWrapper}>
        <View style={styles.gopayWrapperTop}>
          <Image source={require('../../../assets/icon/gopay.png')} />
          <Text style={styles.saldoGopay}>Rp50.000</Text>
        </View>
        <View style={styles.gopayWrapperBottom}>
          <GopayFeature titleGopayFeature="Pay" iconGopayFeature={require('../../../assets/icon/pay.png')} />
          <GopayFeature titleGopayFeature="Nearby" iconGopayFeature={require('../../../assets/icon/nearby.png')} />
          <GopayFeature titleGopayFeature="Top up" iconGopayFeature={require('../../../assets/icon/topup.png')} />
          <GopayFeature titleGopayFeature="More" iconGopayFeature={require('../../../assets/icon/more.png')} />
        </View>
      </View>
    )
  }
}

export default HomeGoPay

const styles = StyleSheet.create({
  gopayWrapper: { marginHorizontal: 17, marginTop: 8 },
  gopayWrapperTop: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2C5FB8', borderTopLeftRadius: 4, borderTopRightRadius: 4, padding: 14 },
  gopayWrapperBottom: { flexDirection: 'row', paddingTop: 20, paddingBottom: 14, backgroundColor: '#2F65BD', borderBottomLeftRadius: 4, borderBottomRightRadius: 4 },
  saldoGopay: { fontSize: 17, fontWeight: 'bold', color: 'white' },
})

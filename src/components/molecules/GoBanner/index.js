import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import logoGojekPutih from '../../../assets/logo/white.png';
import foodBanner from '../../../assets/dummy/food-banner.jpg';

const GoBanner = () => {
  return (
    <View style={{ padding: 16 }}>
      <View style={{ position: 'relative' }}>
        <Image source={foodBanner} style={{ height: 170, width: '100%', borderRadius: 6 }} />
        <View style={{ height: '100%', width: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.15, borderRadius: 6 }}></View>
        <View style={{ height: 15, width: 60, position: 'absolute', top: 16, left: 16 }}>
          <Image source={logoGojekPutih} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }} />
        </View>
        <View style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16 }}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 8 }}>Free GO-FOOD vouchers</Text>
            <Text style={{ fontSize: 12, fontWeight: '400', color: 'white', paddingBottom: 16 }}>Quick, before they run out!</Text>
          </View>
          <View style={{ flex: 1, paddingLeft: 12 }}>
            {/* Agar button full alignSelf: 'stretch' */}
            <TouchableOpacity style={{ backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'stretch', borderRadius: 4 }}>
              <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>GET VOUCHER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16 }}></View>
    </View>
  )
}

export default GoBanner

const styles = StyleSheet.create({})

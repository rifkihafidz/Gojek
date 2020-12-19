import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import ScrollableItem from '../../../components/molecules/ScrollableItem';
import logoGoFood from '../../../assets/logo/go-food.png';
import gofoodKFC from '../../../assets/dummy/go-food-kfc.jpg';
import gofoodBanka from '../../../assets/dummy/go-food-banka.jpg';
import gofoodGM from '../../../assets/dummy/go-food-gm.jpg';
import gofoodOrins from '../../../assets/dummy/go-food-orins.jpg';
import gofoodPakBoss from '../../../assets/dummy/go-food-pak-boss.jpg';

class ScrollableProduct extends Component {
  render() {
    return (
      <View>
        <View style={{ height: 15, width: 55, marginLeft: 16 }}>
          <Image source={logoGoFood} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, paddingHorizontal: 16 }}>
          <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#1C1C1C' }}>Nearby Restaurants</Text>
          <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#61A756' }}>See All</Text>
        </View>
        <ScrollView horizontal style={{ flexDirection: 'row', paddingLeft: 16 }}>
          <ScrollableItem ImageItem={gofoodKFC} TextItem="KFC Aeon Mall" />
          <ScrollableItem ImageItem={gofoodGM} TextItem="Bakmi GM Aeon Mall" />
          <ScrollableItem ImageItem={gofoodOrins} TextItem="Martabak Orins" />
          <ScrollableItem ImageItem={gofoodBanka} TextItem="Martabak Banka" />
          <ScrollableItem ImageItem={gofoodPakBoss} TextItem="Ayam Bakar Pak Boss" />
        </ScrollView>
        <View style={{ borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16, marginBottom: 20, marginHorizontal: 16 }}></View>
      </View >
    )
  }
}

export default ScrollableProduct

const styles = StyleSheet.create({})

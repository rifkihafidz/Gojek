import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import SearchFeature from './src/components/molecules/SearchFeature';
import GoNews from './src/components/molecules/GoNews';
import GoInfo from './src/components/molecules/GoInfo';
import GoBanner from './src/components/molecules/GoBanner';
import ScrollableProduct from './src/containers/organism/ScrollableProduct';
import NavBar from './src/containers/organism/NavBar';
import HomeMainFeature from './src/containers/organism/HomeMainFeature';
import HomeGoPay from './src/containers/organism/HomeGoPay';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
        {/* Search Bar */}
        <SearchFeature />

        {/* Gopay */}
        <HomeGoPay />

        {/* Main Feature */}
        <HomeMainFeature />

        {/* Lines */}
        <View style={{ height: 17, backgroundColor: '#F2F2F4', marginTop: 20 }}></View>

        {/* News */}
        <GoNews />

        {/* Internal Information Section */}
        <GoInfo />

        {/* GoFood Banner Section */}
        <GoBanner />

        {/* Nearby Go-Food */}
        <ScrollableProduct />

      </ScrollView>

      {/* Bottom Nav */}
      <NavBar />
    </View >
  );
}

const styles = StyleSheet.create({});

export default App;
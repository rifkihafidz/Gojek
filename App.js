import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import iconHomeActive from './icon/home-active.png';
import iconOrder from './icon/order.png';
import iconHelp from './icon/help.png';
import iconInbox from './icon/inbox.png';
import iconAccount from './icon/account.png';
import iconSearch from './icon/search.png';
import iconPromo from './icon/promo.png';
import iconGopay from './icon/gopay.png';
import iconPay from './icon/pay.png';
import iconNearby from './icon/nearby.png';
import iconTopup from './icon/topup.png';
import iconMore from './icon/more.png';
import iconGoRide from './icon/go-ride.png';
import iconGoCar from './icon/go-car.png';
import iconGoBlueBird from './icon/go-bluebird.png';
import iconGoSend from './icon/go-send.png';
import iconGoDeals from './icon/go-deals.png';
import iconGoPulsa from './icon/go-pulsa.png';
import iconGoFood from './icon/go-food.png';
import iconGoMore from './icon/go-more.png';
import newsBola from './dummy/sepak-bola.jpg';
import logoGojekPutih from './logo/white.png';
import logoGojek from './logo/gojek.png';
import foodBanner from './dummy/food-banner.jpg';
import logoFacebook from './dummy/facebook-connect.png';
import logoGoFood from './logo/go-food.png';
import gofoodKFC from './dummy/go-food-kfc.jpg';
import gofoodBanka from './dummy/go-food-banka.jpg';
import gofoodGM from './dummy/go-food-gm.jpg';
import gofoodOrins from './dummy/go-food-orins.jpg';
import gofoodPakBoss from './dummy/go-food-pak-boss.jpg';


const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
        {/* Search Bar */}
        <View style={styles.wrapperSearchBar}>
          <View style={{ position: 'relative', flex: 1 }}>
            <TextInput placeholder="What do you want to eat?" style={styles.searchBar} />
            <Image source={iconSearch} style={styles.iconSearch} />
          </View>
          <View style={styles.iconPromo}>
            <Image source={iconPromo} />
          </View>
        </View>

        {/* Gopay */}
        <View style={styles.gopayWrapper}>
          <View style={styles.gopayWrapperTop}>
            <Image source={iconGopay} />
            <Text style={styles.saldoGopay}>Rp50.000</Text>
          </View>
          <View style={styles.gopayWrapperBottom}>
            <View style={styles.gopayContent}>
              <Image source={iconPay} />
              <Text style={styles.textGopay}>Pay</Text>
            </View>
            <View style={styles.gopayContent}>
              <Image source={iconNearby} />
              <Text style={styles.textGopay}>Nearby</Text>
            </View>
            <View style={styles.gopayContent}>
              <Image source={iconTopup} />
              <Text style={styles.textGopay}>Top-up</Text>
            </View>
            <View style={styles.gopayContent}>
              <Image source={iconMore} />
              <Text style={styles.textGopay}>More</Text>
            </View>
          </View>
        </View>

        {/* Main Feature */}
        <View style={styles.mainFeatureWrapper}>
          <View style={styles.mainFeatureTop}>
            <View style={styles.mainFeature}>
              <View style={styles.mainFeatureIconWrapper}>
                <Image source={iconGoRide} />
              </View>
              <Text style={styles.textFeature}>GO-RIDE</Text>
            </View>
            <View style={styles.mainFeature}>
              <View style={styles.mainFeatureIconWrapper}>
                <Image source={iconGoCar} />
              </View>
              <Text style={styles.textFeature}>GO-CAR</Text>
            </View>
            <View style={styles.mainFeature}>
              <View style={styles.mainFeatureIconWrapper}>
                <Image source={iconGoBlueBird} />
              </View>
              <Text style={styles.textFeature}>GO-BLUEBIRD</Text>
            </View>
            <View style={styles.mainFeature}>
              <View style={styles.mainFeatureIconWrapper}>
                <Image source={iconGoSend} />
              </View>
              <Text style={styles.textFeature}>GO-SEND</Text>
            </View>
          </View>
          <View style={styles.mainFeatureBottom}>
            <View style={styles.mainFeature}>
              <View style={styles.mainFeatureIconWrapper}>
                <Image source={iconGoDeals} />
              </View>
              <Text style={styles.textFeature}>GO-DEALS</Text>
            </View>
            <View style={styles.mainFeature}>
              <View style={styles.mainFeatureIconWrapper}>
                <Image source={iconGoPulsa} />
              </View>
              <Text style={styles.textFeature}>GO-PULSA</Text>
            </View>
            <View style={styles.mainFeature}>
              <View style={styles.mainFeatureIconWrapper}>
                <Image source={iconGoFood} />
              </View>
              <Text style={styles.textFeature}>GO-FOOD</Text>
            </View>
            <View style={styles.mainFeature}>
              <View style={styles.mainFeatureIconWrapper}>
                <Image source={iconGoMore} />
              </View>
              <Text style={styles.textFeature}>MORE</Text>
            </View>
          </View>
        </View>

        {/* Lines */}
        <View style={{ height: 17, backgroundColor: '#F2F2F4', marginTop: 20 }}></View>

        {/* News */}
        <View style={{ paddingTop: 16, paddingHorizontal: 16 }}>
          <View style={{ position: 'relative' }}>
            <Image source={newsBola} style={{ height: 170, width: '100%', borderRadius: 6 }} />
            <View style={{ height: '100%', width: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.15, borderRadius: 6 }}></View>
            <View style={{ height: 15, width: 55, position: 'absolute', top: 16, left: 16 }}>
              <Image source={logoGojekPutih} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }} />
            </View>
          </View>
          <View style={{ paddingTop: 16, paddingBottom: 20, borderBottomColor: '#E8E9ED', borderBottomWidth: 1 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1C1C1C' }}>
              GO-NEWS
            </Text>
            <Text style={{ fontSize: 14, fontWeight: '500', color: '#7A7A7A', marginBottom: 11 }}>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </Text>
            {/* Button resize alignSelf:'center' / 'flex-end' */}
            <TouchableOpacity style={{ backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 4 }}>
              <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>READ</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Internal Information Section */}
        <View style={{ padding: 16, paddingBottom: 0 }}>
          <View style={{ height: 15, width: 55, marginLeft: -2 }}>
            <Image source={logoGojek} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }} />
          </View>
          <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#1C1C1C', marginTop: 15, marginBottom: 20 }}>Complete your profile</Text>
          <View style={{ flexDirection: 'row' }}>
            <View>
              <Image source={logoFacebook} />
            </View>
            <View style={{ marginLeft: 16, flex: 1 }}>
              <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#4A4A4A' }}>Connect with Facebook</Text>
              <Text style={{ fontSize: 15, fontWeight: 'normal', color: '#4A4A4A', width: '70%', marginBottom: 16 }}>Log in faster without verification code</Text>
              <TouchableOpacity style={{ backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 4 }}>
                <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>CONNECT</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16 }}></View>
        </View>

        {/* GoFood Banner Section */}
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

        {/* Nearby Go-Food */}
        <View>
          <View style={{ height: 15, width: 55, marginLeft: 16 }}>
            <Image source={logoGoFood} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, paddingHorizontal: 16 }}>
            <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#1C1C1C' }}>Nearby Restaurants</Text>
            <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#61A756' }}>See All</Text>
          </View>
          <ScrollView horizontal style={{ flexDirection: 'row', paddingLeft: 16 }}>
            <View style={{ marginRight: 16 }}>
              <View style={{ height: 150, width: 150 }}>
                {/* resizeMode: 'cover' untuk memenuhi */}
                <Image source={gofoodKFC} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10 }} />
              </View>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1C1C1C', marginTop: 12 }}>KFC Aeon Mall</Text>
            </View>
            <View style={{ marginRight: 16 }}>
              <View style={{ height: 150, width: 150 }}>
                {/* resizeMode: 'cover' untuk memenuhi */}
                <Image source={gofoodGM} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10 }} />
              </View>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1C1C1C', marginTop: 12 }}>Bakmi GM Aeon Mall</Text>
            </View>
            <View style={{ marginRight: 16 }}>
              <View style={{ height: 150, width: 150 }}>
                {/* resizeMode: 'cover' untuk memenuhi */}
                <Image source={gofoodOrins} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10 }} />
              </View>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1C1C1C', marginTop: 12 }}>Martabak Orins</Text>
            </View>
            <View style={{ marginRight: 16 }}>
              <View style={{ height: 150, width: 150 }}>
                {/* resizeMode: 'cover' untuk memenuhi */}
                <Image source={gofoodBanka} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10 }} />
              </View>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1C1C1C', marginTop: 12 }}>Martabak Banka</Text>
            </View>
            <View style={{ marginRight: 16 }}>
              <View style={{ height: 150, width: 150 }}>
                {/* resizeMode: 'cover' untuk memenuhi */}
                <Image source={gofoodPakBoss} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10 }} />
              </View>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1C1C1C', marginTop: 12 }}>Ayam Bakar Pak Boss</Text>
            </View>
          </ScrollView>
          <View style={{ borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16, marginBottom: 20, marginHorizontal: 16 }}></View>
        </View>
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.wrapperBottomNav}>
        <View style={styles.contentBottomNav}>
          <View>
            <Image style={styles.icons} source={iconHomeActive} />
          </View>
          <Text style={styles.textBottomNavActive}>Home</Text>
        </View>
        <View style={styles.contentBottomNav}>
          <View>
            <Image style={styles.icons} source={iconOrder} />
          </View>
          <Text style={styles.textBottomNav}>Orders</Text>
        </View>
        <View style={styles.contentBottomNav}>
          <View>
            <Image style={styles.icons} source={iconHelp} />
          </View>
          <Text style={styles.textBottomNav}>Help</Text>
        </View>
        <View style={styles.contentBottomNav}>
          <View>
            <Image style={styles.icons} source={iconInbox} />
          </View>
          <Text style={styles.textBottomNav}>Inbox</Text>
        </View>
        <View style={styles.contentBottomNav}>
          <View>
            <Image style={styles.icons} source={iconAccount} />
          </View>
          <Text style={styles.textBottomNav}>Account</Text>
        </View>
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  icons: { width: 26, height: 26 },
  textBottomNav: { fontSize: 10, color: '#545454', marginTop: 4 },
  textBottomNavActive: { fontSize: 10, color: '#43AB4A', marginTop: 4 },
  wrapperBottomNav: { height: 54, backgroundColor: 'white', flexDirection: 'row' },
  contentBottomNav: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  iconSearch: { position: 'absolute', top: 5, left: 12 },
  iconPromo: { width: 35, alignItems: 'center', justifyContent: 'center' },
  wrapperSearchBar: { marginHorizontal: 17, flexDirection: 'row', paddingTop: 15 },
  searchBar: { borderWidth: 1, borderColor: '#E8E8E8', borderRadius: 25, height: 40, fontSize: 13, paddingLeft: 45, paddingRight: 20, backgroundColor: 'white', marginRight: 18 },
  gopayWrapper: { marginHorizontal: 17, marginTop: 8 },
  gopayWrapperTop: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2C5FB8', borderTopLeftRadius: 4, borderTopRightRadius: 4, padding: 14 },
  gopayWrapperBottom: { flexDirection: 'row', paddingTop: 20, paddingBottom: 14, backgroundColor: '#2F65BD', borderBottomLeftRadius: 4, borderBottomRightRadius: 4 },
  textGopay: { color: 'white', fontSize: 13, fontWeight: 'bold', marginTop: 15 },
  gopayContent: { flex: 1, alignItems: 'center' },
  saldoGopay: { fontSize: 17, fontWeight: 'bold', color: 'white' },
  mainFeatureWrapper: { marginTop: 18, flexDirection: 'row', flexWrap: 'wrap' },
  mainFeatureTop: { justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 18 },
  mainFeatureBottom: { justifyContent: 'space-between', flexDirection: 'row', width: '100%' },
  mainFeature: { width: '25%', alignItems: 'center' },
  mainFeatureIconWrapper: { width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center' },
  textFeature: { fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }
});

export default App;
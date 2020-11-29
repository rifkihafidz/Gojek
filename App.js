import React from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
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


const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
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
      </View>

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
    </View>
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
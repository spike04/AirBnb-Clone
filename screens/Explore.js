import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Category from './components/Explore/Category'

const { width, height } = Dimensions.get('window')

class Explore extends Component {
  componentWillMount() {
    this.startHeaderHeight = 80
    if (Platform.OS == 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight
    }
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              height: this.startHeaderHeight,
              backgroundColor: 'white',
              borderBottomWidth: 1,
              borderBottomColor: '#dddddd'
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                padding: 10,
                marginHorizontal: 20,
                backgroundColor: 'white',
                shadowOffset: { width: 0, heigh: 0 },
                shadowColor: 'black',
                shadowOpacity: 0.2,
                elevation: 1,
                marginTop: Platform.OS == 'android' ? 30 : null
              }}
            >
              <Icon name="ios-search" size={20} style={{ marginRight: 10 }} />
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Try New Delhi"
                placeholderTextColor="grey"
                style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' }}
              />
            </View>
          </View>
          <ScrollView scrollEventThrottle={16}>
            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: '700',
                  paddingHorizontal: 20
                }}
              >
                What can we help you find, John?
              </Text>

              <View style={{ flex: 1, height: 130, marginTop: 20 }}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <Category
                    imageUrl={require('../assets/home.jpg')}
                    name="Home"
                  />
                  <Category
                    imageUrl={require('../assets/restaurant.jpg')}
                    name="Restaurant"
                  />
                  <Category
                    imageUrl={require('../assets/experiences.jpg')}
                    name="Experience"
                  />
                </ScrollView>
              </View>

              <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                  Introducing AirBnb Plus
                </Text>
                <Text style={{ fontWeight: '100', marginTop: 10 }}>
                  A new selection of homes verified for quality & comfort
                </Text>

                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                  <Image 
                  source={require('../assets/home.jpg')} style={{flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd'}}/>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    )
  }
}
export default Explore

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

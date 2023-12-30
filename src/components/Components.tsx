import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React from 'react';
import QuickAccess from './QuickAccess';
import History from './History';
import CountryFlag from 'react-native-country-flag';

const DisplayBalance = (): JSX.Element => (
  <View style={styles.balanceContainer}>
    <View style={styles.currencyCountry}>
      <Text style={[styles.textColor, styles.countryFlag]}>
        <CountryFlag isoCode="ng" size={12} />
      </Text>
      <Text style={[styles.textColor, styles.currencyCountryTxt]}>
        Nigeria Naira
      </Text>
    </View>
    <View style={styles.balance}>
      <View>
        <Text style={[styles.textColor, styles.balanceTxt]}>#226.72</Text>
        <Text style={[styles.textColor, styles.lastUpdateTxt]}>
          Last updated 2 min ago.
        </Text>
      </View>
      <View>
        <Image
          source={require('../../assets/icons/more.png')}
          style={styles.iconStyle}
        />
      </View>
    </View>
    <View style={styles.actionButtons}>
      <TouchableHighlight style={[styles.buttonTxt, styles.actionButton]}>
        <View style={styles.actionWrapper}>
          <View style={styles.action}>
            <Text>&#8593;</Text>
          </View>
          <Text style={[styles.textColor, styles.actionButtonTxt]}>
            Transfer
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight style={[styles.buttonTxt, styles.actionButton]}>
        <View style={styles.actionWrapper}>
          <View style={styles.action}>
            <Text>&#43;</Text>
          </View>
          <Text style={[styles.textColor, styles.actionButtonTxt]}>
            Add money
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  </View>
);

const Components = (): JSX.Element => {
  return (
    <ScrollView>
      <View>
        <DisplayBalance />
        <QuickAccess />
        <History />
      </View>
    </ScrollView>
  );
};

export default Components;

const styles = StyleSheet.create({
  textColor: {
    color: 'white',
  },
  balanceContainer: {
    marginVertical: 30,
    paddingHorizontal: 10,
  },
  currencyCountry: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 5,
  },
  countryFlag: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  currencyCountryTxt: {
    fontWeight: '700',
  },
  balance: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  balanceTxt: {
    fontSize: 30,
    fontWeight: '700',
  },
  lastUpdateTxt: {
    marginVertical: 5,
    color: 'gray',
    fontSize: 12,
  },
  actionButtons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionButton: {
    height: 35,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  actionButtonTxt: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTxt: {
    width: 60,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(230, 230, 230, .1)',
    borderRadius: 5,
  },
  iconStyle: {
    width: 25,
    height: 25,
  },
  actionWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 10,
  },
  action: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 15,
    width: 15,
    borderRadius: 100,
  },
});

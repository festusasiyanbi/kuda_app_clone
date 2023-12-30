import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type ItemProps = {title: string; icon: any};

const RenderFeatureAccess = ({title, icon}: ItemProps): JSX.Element => (
  <View>
    <View style={styles.accessWrapper}>
      <Image source={icon} style={styles.iconStyle} />
      <Text style={[styles.textColor, styles.title]}>{title}</Text>
    </View>
  </View>
);

const QuickAccess = () => {
  const FEATURE_ACCESS = [
    {
      id: 1,
      icon: require('../../assets/icons/phone.png'),
      title: 'Airtime',
    },
    {
      id: 2,
      icon: require('../../assets/icons/wifi.png'),
      title: 'Internet',
    },
    {
      id: 3,
      icon: require('../../assets/icons/broadcast.png'),
      title: 'TV',
    },
    {
      id: 4,
      icon: require('../../assets/icons/lightbulb.png'),
      title: 'Electricity',
    },
  ];

  return (
    <View>
      <View style={styles.access}>
        <Text style={[styles.textColor, styles.accessTxt]}>Quick Access</Text>
        <Text style={[styles.textColor, styles.editTxt]}>Edit</Text>
      </View>
      <View style={styles.itemContainer}>
        {FEATURE_ACCESS.map((item, index) => (
          <RenderFeatureAccess
            key={index}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </View>
    </View>
  );
};

export default QuickAccess;

const styles = StyleSheet.create({
  textColor: {
    color: 'white',
  },
  title: {
    fontSize: 10,
    fontWeight: '700',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  accessWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 95,
    rowGap: 10,
    marginHorizontal: 5,
    borderRadius: 2,
    backgroundColor: 'rgba(230, 230, 230, .1)',
  },
  access: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  editTxt: {
    fontWeight: '900',
    fontSize: 15,
  },
  accessTxt: {
    fontSize: 15,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});

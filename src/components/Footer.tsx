import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type ItemProps = {
  title: string;
  icon: any;
  activeElement: number;
  index: number;
};

const RenderFeatureAccess = ({
  title,
  icon,
  activeElement,
  index,
}: ItemProps): JSX.Element => (
  <View style={styles.footerContainer}>
    <View style={styles.footerWrapper}>
      <Image source={icon} style={styles.iconStyle} />
      <Text
        style={activeElement === index ? styles.textColor : styles.grayColor}>
        {title}
      </Text>
    </View>
  </View>
);

const QuickAccess = () => {
  const FEATURE_ACCESS = [
    {
      id: 1,
      icon: require('../../assets/icons/home.png'),
      title: 'Home',
    },
    {
      id: 2,
      icon: require('../../assets/icons/send.png'),
      title: 'Send',
    },
    {
      id: 3,
      icon: require('../../assets/icons/invoice.png'),
      title: 'Pay',
    },
    {
      id: 4,
      icon: require('../../assets/icons/payment.png'),
      title: 'Cards',
    },
    {
      id: 5,
      icon: require('../../assets/icons/app.png'),
      title: 'More',
    },
  ];
  return (
    <View style={styles.mainContainer}>
      {FEATURE_ACCESS.map((item, index) => (
        <View key={index}>
          <RenderFeatureAccess
            title={item.title}
            icon={item.icon}
            activeElement={0}
            index={index}
          />
        </View>
      ))}
    </View>
  );
};

export default QuickAccess;

const styles = StyleSheet.create({
  grayColor: {
    color: 'gray',
    fontSize: 11,
    fontWeight: '700',
  },
  textColor: {
    color: 'white',
    fontSize: 11,
    fontWeight: '700',
  },
  mainContainer: {
    width: '100%',
    height: '8%',
    backgroundColor: 'black',
    borderTopWidth: 1,
    borderTopColor: 'rgba(230, 230, 230, .1)',
    justifyContent: 'space-between',
    marginHorizontal: 'auto',
    paddingVertical: 10,
    flexDirection: 'row',
  },
  footerContainer: {
    marginRight: 8,
    marginHorizontal: 'auto',
    marginBottom: 20,
  },
  footerWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 70,
    rowGap: 5,
    marginHorizontal: 5,
  },
  access: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },
  edit: {
    fontWeight: '700',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});

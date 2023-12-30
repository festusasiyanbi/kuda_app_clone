import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import React, {useEffect, useState} from 'react';

type ItemProps = {
  title: string;
  activeElement: number;
  index: number;
  onPress: (index: number) => void;
};

const RenderFeature = ({
  title,
  activeElement,
  index,
  onPress,
}: ItemProps): JSX.Element => (
  <View style={styles.item}>
    <TouchableHighlight style={styles.buttonTxt} onPress={() => onPress(index)}>
      <Text
        style={[
          activeElement === index ? styles.textColor : styles.grayColor,
          styles.title,
        ]}>
        {title}
      </Text>
    </TouchableHighlight>
  </View>
);
const Header = () => {
  const [name, setName] = useState('');
  const [activeElement, setActiveElement] = useState(0);

  useEffect(() => {
    const getRandomName = () => {
      const names = ['Festus', 'Bolu', 'Tunde'];
      const randomIndex = Math.floor(Math.random() * names.length);
      const randomName = names[randomIndex];
      setName(randomName);
    };
    getRandomName();
  }, [name]);

  const handleClick = (element: number) => {
    setActiveElement(element);
  };
  const FEATURES = [
    {id: 1, title: 'Spend'},
    {id: 2, title: 'Save'},
    {id: 3, title: 'Borrow'},
    {id: 4, title: 'Invest'},
  ];

  const imageUrl =
    'https://images.prismic.io/monito/f1aa6af4-cc37-4d13-8c0a-3bd1c497cbd3_Kudabank_Logo-10.png?auto=compress,format&rect=0,0,1500,1500&w=2400&h=2400';
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.profile}>
          <Image
            source={{
              uri: imageUrl,
            }}
            style={styles.image}
          />
          <Text style={[styles.textColor, styles.usernameTxt]}>Hi, {name}</Text>
        </View>
        <View style={styles.profileIcon}>
          <Image
            source={require('../../assets/icons/comment.png')}
            style={styles.iconStyle}
          />
        </View>
      </View>
      <FlatList
        data={FEATURES}
        numColumns={4}
        renderItem={({item, index}) => (
          <RenderFeature
            title={item.title}
            activeElement={activeElement}
            index={index}
            onPress={handleClick}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textColor: {
    color: 'white',
  },
  grayColor: {
    color: 'gray',
  },
  container: {
    paddingHorizontal: 10,
    height: '12%',
  },
  top: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
  },
  profile: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    width: 45,
    height: 45,
    resizeMode: 'cover',
    borderRadius: 50,
  },
  profileIcon: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  usernameTxt: {
    fontSize: 17,
    fontWeight: '800',
    paddingLeft: 10,
  },
  item: {
    paddingRight: 20,
  },
  buttonTxt: {
    width: 55,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(237, 237, 237, .1)',
    borderRadius: 5,
  },
  title: {
    fontWeight: '600',
    fontSize: 12,
  },
  iconStyle: {
    width: 25,
    height: 25,
  },
});

export default Header;

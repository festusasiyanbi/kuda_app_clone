import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type ItemProps = {
  time: string;
  image: string;
  username: string;
  amount: string;
  status: string;
};

const RenderTransactionItem = ({
  time,
  image,
  username,
  amount,
  status,
}: ItemProps) => (
  <View style={styles.transactionWrapper}>
    <View style={styles.transactionDetails}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.timeStamp}>
        <Text style={[styles.textColor, styles.usernameTxt]}>{username}</Text>
        <Text style={[styles.textColor, styles.timeTxt]}>{time}</Text>
      </View>
    </View>
    <View>
      <Text
        style={[
          status === 'credit' ? styles.creditStatus : styles.textColor,
          styles.amountTxt,
        ]}>
        {status === 'credit' ? '+' : ''}&#35;{amount}.00
      </Text>
    </View>
  </View>
);

const History = () => {
  const HISTORY = [
    {
      id: 1,
      date: '12/28/23',
      time: '11:57 AM',
      image:
        'https://i0.wp.com/anetravels.com/home/wp-content/uploads/2023/02/hVkLGMQo2I5nyUCEgAymMQhw6iDCQFm-Xo8xvMu2enzFAMvIGZh30ICC4FPbYO5fB_U.png?w=512&ssl=1',
      username: 'Boluwatife Olaifa',
      amount: '10,000',
      status: 'credit',
    },
    {
      id: 2,
      date: '12/28/23',
      time: '10:21 AM',
      image:
        'https://i0.wp.com/newstip.ng/wp-content/uploads/2023/07/GTWorld.jpg?fit=600%2C300&ssl=1',
      username: 'Festus Asiyanbi',
      amount: '20,000',
      status: 'debit',
    },
    {
      id: 3,
      date: '12/14/23',
      time: '11:57 AM',
      image:
        'https://asset.brandfetch.io/idPXJmyni4/idYP3xad9_.png?updated=1667560957752',
      username: 'Babatunde Akinwobi',
      amount: '10,000',
      status: 'debit',
    },
    {
      id: 4,
      date: '12/14/23',
      time: '10:21 AM',
      image:
        'https://i0.wp.com/anetravels.com/home/wp-content/uploads/2023/02/hVkLGMQo2I5nyUCEgAymMQhw6iDCQFm-Xo8xvMu2enzFAMvIGZh30ICC4FPbYO5fB_U.png?w=512&ssl=1',
      username: 'Alade Mutairu',
      amount: '20,000',
      status: 'credit',
    },
    {
      id: 5,
      date: '12/07/23',
      time: '12:12 AM',
      image:
        'https://i0.wp.com/newstip.ng/wp-content/uploads/2023/07/GTWorld.jpg?fit=600%2C300&ssl=1',
      username: 'David Asiyanbi',
      amount: '10,000',
      status: 'credit',
    },
    {
      id: 6,
      date: '12/07/23',
      time: '8:21 PM',
      image:
        'https://asset.brandfetch.io/idPXJmyni4/idYP3xad9_.png?updated=1667560957752',
      username: 'Boluwatife Olaifa',
      amount: '20,000',
      status: 'debit',
    },
    {
      id: 7,
      date: '11/09/23',
      time: '6:04 PM',
      image:
        'https://i0.wp.com/anetravels.com/home/wp-content/uploads/2023/02/hVkLGMQo2I5nyUCEgAymMQhw6iDCQFm-Xo8xvMu2enzFAMvIGZh30ICC4FPbYO5fB_U.png?w=512&ssl=1',
      username: 'Festus Asiyanbi',
      amount: '10,000',
      status: 'credit',
    },
    {
      id: 8,
      date: '11/09/23',
      time: '09:24 AM',
      image:
        'https://asset.brandfetch.io/idPXJmyni4/idYP3xad9_.png?updated=1667560957752',
      username: 'Olaiya Gbadebo',
      amount: '20,000',
      status: 'credit',
    },
  ];

  return (
    <View style={styles.historyWrapper}>
      {HISTORY.map((item, index) => (
        <View key={index}>
          {index === 0 || HISTORY[index - 1].date !== item.date ? (
            <View style={styles.dateWrapper}>
              <Text style={[styles.textColor, styles.dateTxt]}>
                {item.date}
              </Text>
            </View>
          ) : null}
          <RenderTransactionItem
            time={item.time}
            image={item.image}
            username={item.username}
            amount={item.amount}
            status={item.status}
          />
        </View>
      ))}
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  textColor: {
    color: 'white',
  },
  creditStatus: {
    color: '#2ecc72',
  },
  historyWrapper: {
    marginVertical: 30,
    flexDirection: 'column',
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
    borderRadius: 50,
    marginRight: 15,
  },
  dateWrapper: {
    backgroundColor: 'rgba(230, 230, 230, .1)',
    fontSize: 12,
    height: 25,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  dateTxt: {
    fontSize: 12,
    paddingLeft: 10,
    color: 'gray',
    fontWeight: '500',
  },
  transactionWrapper: {
    width: '100%',
    paddingVertical: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(230, 230, 230, .1)',
  },
  transactionDetails: {
    width: 150,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  usernameTxt: {
    fontSize: 15,
    fontWeight: '700',
  },
  timeStamp: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  amountTxt: {
    fontSize: 15,
    fontWeight: '600',
    paddingRight: 10,
  },
  timeTxt: {
    fontSize: 12,
    paddingTop: 3,
    color: 'gray',
  },
});

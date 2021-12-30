import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../config/colors';
import CustomIcons from './CustomIcons';

const HeaderBar: FC = () => {
  return (
    <View style={styles.statusContainer}>
      <CustomIcons.FontAwesome5
        name={'bars'}
        color={'#fff'}
        size={20}
        style={styles.barStyle}
      />
      <Text style={styles.text}>Creativa</Text>
      <CustomIcons.FontAwesome5
        name={'shopping-basket'}
        color={'#fff'}
        size={20}
        style={styles.basketStyle}
      />
      <CustomIcons.FontAwesome5
        name={'bell'}
        color={'#fff'}
        size={20}
        style={styles.bellStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  barStyle: {
    marginHorizontal: 18,
  },
  basketStyle: {marginHorizontal: 18},
  bellStyle: {marginRight: 18},
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.statusBar,
  },
  text: {
    flex: 1,
    fontSize: 26,
    color: '#fff',
    fontWeight: '700',
  },
});

export default HeaderBar;

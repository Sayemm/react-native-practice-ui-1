import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import CustomIcons from './CustomIcons';

interface Props {
  image: object;
  title: string;
}

const Weekly: FC<Props> = props => {
  return (
    <View style={styles.container}>
      <Image source={props.image} style={styles.imageStyle} />
      <Text style={styles.textDeal}>HOT DEALS</Text>
      <Text style={styles.textTitle}>{props.title}</Text>
      <CustomIcons.FontAwesome5 name={'arrow-left'} color={'red'} size={10} />
      <Text style={styles.textExplore}>EXPLORE & SHOP</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 215,
    borderColor: 'lightgrey',
    borderWidth: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  imageStyle: {
    width: '100%',
    height: 180,
    marginRight: 15,
  },
  textDeal: {
    marginTop: 10,
    fontWeight: '900',
    color: 'black',
  },
  textTitle: {
    marginTop: 8,
    marginLeft: 8,
    fontWeight: '900',
    color: 'black',
  },
  textExplore: {
    fontWeight: '600',
    color: 'red',
  },
});

export default Weekly;

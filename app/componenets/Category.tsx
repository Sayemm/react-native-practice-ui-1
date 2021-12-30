import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

interface Props {
  image: object;
  title: string;
}

const Category: FC<Props> = props => {
  return (
    <View style={styles.container}>
      <Image source={props.image} style={styles.imageStyle} />
      <Text style={styles.textStyle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
  },
  imageStyle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
    top: 10,
    marginLeft: 12,
  },
  textStyle: {
    marginTop: 10,
    fontWeight: '900',
    color: 'black',
  },
});

export default Category;

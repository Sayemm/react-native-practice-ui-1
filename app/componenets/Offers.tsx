import React, {FC} from 'react';
import {Image, StyleSheet} from 'react-native';

interface Props {
  image: object;
}

const Offers: FC<Props> = props => {
  return <Image source={props.image} style={styles.imageStyle} />;
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 150,
    height: 150,
    borderRadius: 3.5,
    marginLeft: 12,
  },
});

export default Offers;

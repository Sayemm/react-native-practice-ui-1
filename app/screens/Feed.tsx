import React, {FC} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Category from '../componenets/Category';
import HeaderBar from '../componenets/HeaderBar';
import Offers from '../componenets/Offers';
import SearchBar from '../componenets/SearchBar';
import Weekly from '../componenets/Weekly';
import {imageItemsOne, imageItemsThree, imageItemsTwo} from '../data/data';

const Feed: FC = () => {
  return (
    <View style={styles.container}>
      <HeaderBar />
      <SearchBar />
      <FlatList
        data={imageItemsOne}
        horizontal
        keyExtractor={item => item.text}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return <Category image={item.image} title={item.text} />;
        }}
      />
      <FlatList
        data={imageItemsTwo}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return <Offers image={item} />;
        }}
      />

      <Text style={styles.textWeekly}>Weekly Finds for You</Text>

      <FlatList
        data={imageItemsThree}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return <Weekly image={item.image} title={item.text} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  textWeekly: {
    marginLeft: 12,
  },
});

export default Feed;

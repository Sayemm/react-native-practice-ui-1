import React, {FC} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import CustomIcons from '../componenets/CustomIcons';
import {colors} from '../config/colors';
const SearchBar: FC = () => {
  return (
    <View
      style={{
        backgroundColor: colors.lightBlue,
      }}>
      <View style={styles.searchContainer}>
        <CustomIcons.FontAwesome5
          name={'search'}
          size={20}
          style={styles.searchStyle}
        />
        <TextInput
          style={styles.searchText}
          placeholder="Search for Product, Brand and More"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    margin: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 6,
  },
  searchStyle: {
    marginHorizontal: 12,
  },
  searchText: {
    flex: 1,
    fontWeight: '700',
    fontSize: 15,
  },
});

export default SearchBar;

import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import React, {useCallback} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import useFetchData from '../hooks/useFetchData';

type ItemType = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

const FetchData = () => {
  const {handleLoadData, memoizedData} = useFetchData();
  const keyExtractor = useCallback((item: ItemType) => item.id.toString(), []);

  const renderItem = useCallback(
    ({item}: {item: ItemType}) => (
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Image source={{uri: item.url}} style={styles.itemImage} />
      </View>
    ),
    [],
  );

  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, {paddingBottom: insets.bottom + 48}]}>
      {memoizedData.length === 0 ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={'large'} color={'#800080'} />
          <Text style={styles.loadingText}>Loading data..</Text>
        </View>
      ) : (
        <FlatList
          data={memoizedData}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          ListFooterComponent={() => (
            <TouchableOpacity
              onPress={handleLoadData}
              style={[styles.footerButton, {marginBottom: insets.bottom}]}>
              <Text style={styles.footerButtonText}>Fetch more data</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    fontSize: 18,
    color: '#800080',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  itemTitle: {
    color: 'black',
    flex: 1,
  },
  itemImage: {
    height: 70,
    width: 70,
  },
  footerButton: {
    height: 48,
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#aaaaaa',
  },
  footerButtonText: {
    color: 'white',
  },
});

export default FetchData;

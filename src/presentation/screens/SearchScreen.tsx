/* eslint-disable prettier/prettier */

import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const SearchScreen: React.FC = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/top_rated?api_key=b4ab745f6c12d5da939e8be29a965ea5'
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopRatedMovies();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('MovieDetail', { movieId: item.id })}>
      <View style={styles.itemContainer}>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w92${item.poster_path}` }}
          style={styles.poster}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.year}>{item.release_date.split('-')[0]}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.screenContainer}>
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#9D9C9C" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar IMDb"
          placeholderTextColor="#9D9C9C"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={filteredMovies}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    height: 60,
    marginBottom: 20,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
    color: '#9D9C9C',
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  poster: {
    width: 50,
    height: 95,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  year: {
    color: 'gray',
  },
});

export default SearchScreen;

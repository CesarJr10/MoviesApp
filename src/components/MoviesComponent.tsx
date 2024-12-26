/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFavorites } from '../context/FavoritesContext';

const MoviesComponent: React.FC = () => {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return <Text style={styles.noFavoritesText}>No hay películas favoritas</Text>;
  }

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={favorites}
      renderItem={({ item }) => (
        <View style={styles.movieCard}>
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
            style={styles.movieImage}
          />
          <Text style={styles.movieRating}>
            <Icon name="star" size={12} color="#FFD700" /> {item.vote_average.toFixed(1)}
          </Text>
          <Text style={styles.movieTitle}>{item.title}</Text>
        </View>
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  movieCard: { marginRight: 20, width: 120 },
  movieImage: { width: 120, height: 200, borderRadius: 8 },
  movieRating: { marginTop: 5, fontSize: 12 },
  movieTitle: { fontSize: 14, fontWeight: 'bold' },
  noFavoritesText: { fontSize: 16, textAlign: 'center', padding: 20 },
});

export default MoviesComponent;
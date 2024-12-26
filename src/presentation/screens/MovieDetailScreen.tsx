/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, ScrollView, ToastAndroid } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFavorites } from '../../context/FavoritesContext';
import SectionLine from '../../components/SectionLine';
import Movie from '../../interfaces/movie';


const MovieDetailScreen: React.FC = ({ route }) => {
  const { movieId } = route.params;
  const [movieDetails, setMovieDetails] = useState<Movie | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const { favorites, addFavorite, removeFavorite } = useFavorites();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=b4ab745f6c12d5da939e8be29a965ea5`
        );
        setMovieDetails(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const isFavorite = favorites.some((movie) => movie.id === movieId);

  const toggleFavorite = () => {
    if (movieDetails) {
      if (isFavorite) {
        removeFavorite(movieDetails.id);
        ToastAndroid.show('Película removida de favoritos', ToastAndroid.SHORT);
      } else {
        addFavorite(movieDetails);
        ToastAndroid.show('Película agregada a favoritos', ToastAndroid.SHORT);
      }
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <ScrollView style={styles.container}>
      {movieDetails && (
        <>
          <View style={styles.mainContent}>
            <View style={styles.titleSection}>
              <SectionLine />
              <Text style={styles.title}>{movieDetails.title}</Text>
            </View>
            <Text style={styles.subtitle}>{movieDetails.original_title}</Text>
            <Text style={styles.tagline}>{movieDetails.tagline}</Text>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}` }}
              style={styles.backdrop}
            />
            <View style={styles.posterSection}>
              <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}` }}
                style={styles.poster}
              />
              <View style={styles.contentRight}>
                <View style={styles.infoContainer}>
                  {movieDetails.genres.map((genre) => (
                    <Text key={genre.id} style={styles.genre}>
                      {genre.name}
                    </Text>
                  ))}
                  <View style={styles.ratingContainer}>
                    <Icon name="star" size={20} color="gold" />
                    <Text style={styles.rating}>{movieDetails.vote_average.toFixed(1)}</Text>
                  </View>
                </View>
                <Text numberOfLines={4} style={styles.overview}>{movieDetails.overview}</Text>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <Icon.Button
                name={isFavorite ? 'star' : 'star-o'}
                backgroundColor={isFavorite ? 'gold' : '#ccc'}
                onPress={toggleFavorite}
              >
                {isFavorite ? 'Remover de mi lista de seguimiento' : 'Agregar a mi lista de seguimiento'}
              </Icon.Button>
            </View>
          </View>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContent: {
    padding: 15,
  },
  titleSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginBottom:1,
  },
  subtitle: {
    paddingLeft:25,
    fontSize: 14,
    color: 'gray',
  },
  tagline: {
    fontSize: 14,
    fontStyle: 'italic',
    paddingLeft:25,
  },
  backdrop: {
    width: '100%',
    height: 230,
    marginTop:20,
    marginBottom: 10,
  },
  posterSection: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  poster: {
    width: 100,
    height: 150,
    borderRadius: 8,
  },
  contentRight: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 5,
  },
  genre: {
    backgroundColor: '#eee',
    borderRadius: 4,
    paddingHorizontal: 14,
    paddingVertical: 8,
    fontSize: 12,
    color: 'gray',
    marginRight: 5,
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  rating: {
    fontSize: 16,
    marginLeft: 5,
    color: '#000',
  },
  overview: {
    fontSize: 14,
    textAlign: 'justify',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 40,
    
  },
});

export default MovieDetailScreen;
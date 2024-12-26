/* eslint-disable prettier/prettier */
import React, {createContext, useContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Movie from '../interfaces/movie';

interface FavoritesContextType {
  favorites: Movie[];
  addFavorite: (movie: Movie) => void;
  removeFavorite: (movieId: number) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined,
);

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

export const FavoritesProvider: React.FC = ({children}) => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const storedFavorites = await AsyncStorage.getItem('@favorites');
        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites));
        }
      } catch (error) {
        console.error('Error loading favorites:', error);
      }
    };

    loadFavorites();
  }, []);

  const saveFavorites = async (newFavorites: Movie[]) => {
    try {
      await AsyncStorage.setItem('@favorites', JSON.stringify(newFavorites));
    } catch (error) {
      console.error('Error saving favorites:', error);
    }
  };

  const addFavorite = (movie: Movie) => {
    setFavorites((currentFavorites) => {
      const updatedFavorites = [...currentFavorites, movie];
      saveFavorites(updatedFavorites);
      return updatedFavorites;
    });
  };

  const removeFavorite = (movieId: number) => {
    setFavorites((currentFavorites) => {
      const updatedFavorites = currentFavorites.filter(
        (movie) => movie.id !== movieId
      );
      saveFavorites(updatedFavorites);
      return updatedFavorites;
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
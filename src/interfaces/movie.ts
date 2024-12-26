/* eslint-disable prettier/prettier */

export default interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  genres: Array<{id: number; name: string}>;
  vote_average: number;
  original_title: string;
  release_date: string;
  tagline: string;
};

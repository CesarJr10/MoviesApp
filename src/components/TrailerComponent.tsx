/* eslint-disable prettier/prettier */

import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';

const TrailerComponent = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://ca-times.brightspotcdn.com/dims4/default/303e7a9/2147483647/strip/true/crop/1800x1200+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fa9%2Fab%2Fd33a100d453ba7cb0b496d4f84b3%2Fstranger-things-1.jpg' }}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <Image
            source={{ uri: 'https://resizing.flixster.com/Owpm25O_9oTkb1WufoBzmKeyS9w=/206x305/v2/https://resizing.flixster.com/0xxuABVVuzJrUT130WFHKE-irEg=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vNzUyMTFhOTktZTU4Ni00ODkyLWJlYjQtZTgxYTllZmU2OGM0LmpwZw==' }}
            style={styles.overlayImage}
          />
        </View>

      </ImageBackground>
      <View style={styles.textContainer}>
          <Text style={styles.title}>Stranger Things</Text>
          <Text style={styles.subtitle}>Trailer Oficial</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom:30,
  },
  backgroundImage: {
    flex: 1,
    width:'100%',
    height: 230,
  },
  overlay: {
    flexDirection: 'row',
    alignItems:'center',
    paddingLeft:20,
  },
  overlayImage: {
    width: 120,
    height: 170,
    marginTop:140,
  },
  textContainer: {
    paddingTop:10,
    paddingLeft:160,
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  subtitle: {
    color: 'gray',
  },
});

export default TrailerComponent;
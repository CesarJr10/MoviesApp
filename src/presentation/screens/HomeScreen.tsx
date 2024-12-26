/* eslint-disable prettier/prettier */

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MoviesComponent from '../../components/MoviesComponent';
import TrailerComponent from '../../components/TrailerComponent';
import SectionLine from '../../components/SectionLine';

const HomePage: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <TrailerComponent/>
        <View style={styles.section}>
          <View style={styles.sectionContainer} >
            <SectionLine/>
            <Text style={styles.sectionTitle}>
              Las mejores selecciones</Text>
          </View>
        <MoviesComponent/>
        </View>
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  section: { padding: 20, marginTop:40 },
  sectionContainer: { flexDirection: 'row', alignItems: 'center', marginBottom:30 },
  sectionTitle: { fontSize: 24, fontWeight: 'bold', color:'black' },
});

export default HomePage;
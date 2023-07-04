import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';

const PropertyDetailScreen = ({ route }) => {
  const { property } = route.params;

  return (
    <View style={styles.container}>
      <Header title='Detalles de la Propiedad' />
      <Text style={styles.title}>{property.title}</Text>
      <Text>{property.address}</Text>
      <Text>{property.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default PropertyDetailScreen;

import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const PropertyCard = ({ property, onFavoritePress }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: property.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{property.title}</Text>
      <Text>{property.address}</Text>
      <Text>{property.price}</Text>
      <Button title="Favorito" onPress={onFavoritePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
  },
});

export default PropertyCard;

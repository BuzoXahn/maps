import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Header from '../components/Header';
import PropertyCard from '../components/PropertyCard';

const HomeScreen = () => {
  const property = {
    title: 'Casa hermosa en el centro',
    address: 'Calle 123, Ciudad de México',
    price: '$1,000,000',
    latitude: 19.4326,
    longitude: -99.1332,
  };

  return (
    <View style={styles.container}>
      <Header title="Inicio" />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: property.latitude,
          longitude: property.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: property.latitude,
            longitude: property.longitude,
          }}
          title={property.title}
          description={property.address}
        />
      </MapView>
      <PropertyCard property={property} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    flex: 1,
  },
});

export default HomeScreen;

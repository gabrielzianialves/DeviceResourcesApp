import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import ImagePickerComponent from '../components/ImagePickerComponent';
import ContactsComponent from '../components/ContactsComponent';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImagePickerComponent />
      <ScrollView>
        <ContactsComponent />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0'
  },
});

export default Home;

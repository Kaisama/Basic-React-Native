import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const ActionCards = () => {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Cards</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>What's new in JS 21</Text>
          <Image
            source={{
              uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ',
            }}
            style={styles.cardImage}
          />
          <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam in commodi voluptatum eius eveniet, nobis adipisci
              excepturi deleniti, magni, provident dolores natus voluptatem! A,
              laudantium aliquid dolorum consequatur dolor temporibus.
            </Text>
          </View>
          <View style={styles.footerContainer}>
            <TouchableOpacity onPress={() => openWebsite('www.google.com')}>
              <Text style={styles.social}>Read More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ActionCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  card: {
    width: 350,
    height: 300,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
  },
  headingContainer: {},
  headerText: {},
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  social: {
    color: 'white',
    backgroundColor: 'blue',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  bodyContainer: {},
  footerContainer: {},
});

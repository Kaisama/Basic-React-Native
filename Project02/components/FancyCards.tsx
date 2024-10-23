import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FancyCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={styles.cardContainer}>
        <View style={[styles.card, styles.cardElevated]}>
          <Image
            source={{
              uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ',
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Taj Mahal</Text>
            <Text style={styles.cardLabel}>Taj Mahal Label</Text>
            <Text style={styles.cardDescription}>
              Taj Mahal Description Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Accusantium quis quae debitis facere doloribus
              deserunt facilis adipisci necessitatibus perferendis, molestias
              cum unde, quas exercitationem laborum odio, expedita perspiciatis.
              Odit, possimus!
            </Text>
            <Text style={styles.cardFooter}>Taj Mahal Footer</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FancyCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 3,
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardLabel: {
    fontSize: 14,
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 12,
    marginBottom: 12,
  },
  cardFooter: {
    fontSize: 10,
  },
});

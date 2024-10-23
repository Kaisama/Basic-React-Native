import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ContactList = () => {
  const contacts = [
    {
      uid: 1,
      name: 'Hitesh Choudhary',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      status: 'I ❤️ To Code and Teach!',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(contact => (
          <View key={contact.uid} style={styles.userCard}>
            <View>
              <Image
                source={{
                  uri: contact.imageUrl,
                }}
                style={styles.userImage}
              />
            </View>
            <View>
              <Text style={styles.userName}>{contact.name}</Text>
              <Text style={styles.userStatus}>{contact.status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 3,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {width: 50, height: 50, borderRadius: 60 / 2, marginRight: 14},
  userName: {
    fontSize: 16,
    fontWeight: '600',
  },
  userStatus: {
    fontSize: 14,
  },
});

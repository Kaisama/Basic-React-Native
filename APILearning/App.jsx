import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const App = () => {
  const [data, setData] = useState(undefined);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const response = await fetch(url);
    const newResponse = await response.json();
    //console.warn(newResponse);
    setData(newResponse);
  };

  return (
    // <ScrollView>
    //   <View>
    //  {data?.length ? data.map((item)=>(
    //   <View>
    //     <Text>id:{item.id}</Text>
    //     <Text>title:{item.title}</Text>
    //     <Text>body:{item.body}</Text>
    //   </View>
    //  )):null}
    // </View>
    // </ScrollView>

    //now using flatlist

    <View>
      {data?.length?
    <FlatList
    data={data}
    renderItem={({item})=>(
      <View>
        <Text>{item.id}</Text>
      </View>
    )}
    />  :null
    }
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});

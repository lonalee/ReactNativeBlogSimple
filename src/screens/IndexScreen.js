import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Context } from '../context/BlogContext'
// import { Context as ExamContext } from '../context/ImgContext'

const IndexScreen = () => {

    const { state, addBlogPost } = useContext(Context)
    
    return (
        <View>
            <Text>
                Index Screen
            </Text>
            <Text> </Text>
            <Button onPress={addBlogPost} title="ADD STH !!" />
            <Text> </Text>
            <FlatList
             data={state}
             keyExtractor={(blog) => blog.title}
             renderItem={({ item }) => {
                return <Text>
                 {item.title}
                 </Text>
                 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({});

export default IndexScreen;
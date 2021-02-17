import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {

    const { state } = useContext(Context)
    
    const blogPost = state.find((blog) => blog.id === navigation.getParam('id'))
    
    return (
        <View>
            <Text>
              ID : {blogPost.id}</Text>
              <Text>
              TITLE : {blogPost.title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({});

export default ShowScreen;
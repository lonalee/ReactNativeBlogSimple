import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Context } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {

    const { state } = useContext(Context)
    
    const blogPost = state.find((blog) => blog.id === navigation.getParam('id'))
    
    return (
        <View>
            <Text>
              ID : {blogPost.id}</Text>
              <Text>
              {blogPost.title}
            </Text>
            {console.log(blogPost)}
            <Text>
              {blogPost.content}
            </Text>
        </View>
    )
}

ShowScreen.navigationOptions = () => {
    return {
        headerRight: () => (
            <TouchableOpacity>
                <EvilIcons name="pencil" size={30} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({});

export default ShowScreen;
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
    
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const { addBlogPost } = useContext(Context)

    return (
        <View>
            <Text style={styles.label}>
                Enter Title :
            </Text>
            <TextInput value={title} style={styles.input} onChangeText={text => setTitle(text)} />
            <Text style={styles.label}>
                Enter Content :
            </Text>
            <TextInput value={content} style={styles.input} onChangeText={text => setContent(text)} />
            <Button onPress={() => {
                addBlogPost(title, content, () => {
                    navigation.navigate('Index');
                });
                }} title="Add Blog Post" />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'blue',
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 10,
        // marginLeft: 10
        marginHorizontal: 10,
    },
    label: {
        fontSize: 20,
        marginHorizontal: 10,
        // marginTop: 10,
    }
});

export default CreateScreen;
import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext'
// import { Context as ExamContext } from '../context/ImgContext'
import { Feather } from '@expo/vector-icons'

const IndexScreen = ({ navigation }) => {
    const { state, addBlogPost, deleteBlogPost } = useContext(Context)
    
    return (
        <View>
            <Text> </Text>
            <Button onPress={addBlogPost} title="ADD STH" />
            <Text> </Text>
            <FlatList
             data={state}
             keyExtractor={(blog) => blog.title}
             renderItem={({ item }) => {
                return (
                <TouchableOpacity 
                    onPress={
                        () => navigation.navigate('Show', { id: item.id})
                        }>
                    <View style={styles.row}>
                        <Text style={styles.title}>{item.title} - {item.id}</Text>
                        <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                            <Feather style={styles.icon} name="trash" />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>)
                 }}
            />
        </View>
    )
}

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
              <Feather name="plus" size={30} style={styles.icon} />
            </TouchableOpacity>
          ),
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'red'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24,
        marginRight: 10
    }
});

export default IndexScreen;
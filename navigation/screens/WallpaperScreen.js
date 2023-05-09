import * as React from 'react';
import {StyleSheet, Image, View, Text, TouchableNativeFeedback, Button, FlatList, PermissionsAndroid, Platform } from 'react-native';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import { A } from '@expo/html-elements';


export default function WallpaperScreen({ navigation }) {
    const { categoryId } = route.params;
    const [images, setImages] = React.useState(() => {
        const Url = `http://localhost:8000/image_json?category_id=${categoryId}`
        fetch(Url)
        .then(response => response.json())
        .then(data => setImages(data.image))
        .catch(error => console.error(error))
    }, [categoryId])

    const renderitem = ({ item }) => (
        <ScrollView>
        <TouchableHighlight>
            <View style={styles.con}>
            <View>
                <Image 
                    source={{
                        width: '100%',
                        height: 250,
                        uri: item.image
                    }}
                />
            <Button title={'Download'} onPress={() => {
                            }} />
            </View>
            </View>
            </TouchableHighlight>
            </ScrollView>
    )
    return (
        
       <FlatList
       data={images}
       renderItem={renderitem}
       keyExtractor={item => item.category_id}
        />
        
    )
}

const styles = StyleSheet.create({
    con:{
        flexDirection:'column-reverse',
        flex:1,
        gap:3
    },
})
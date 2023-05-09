import * as React from 'react';
import {StyleSheet, View, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MainContainer from '../MainContainer';


export default function HomeScreen({ navigation }) {
    const [images, setImages] = React.useState([]);
    React.useEffect(() => {
    const JsonUrl = 'http://localhost:8000/category_json/';
    fetch(JsonUrl)
    .then(response => response.json())
    .then(data => setImages(data))
    .catch(error => console.error(error));
    },
    [])
    return (
        <ScrollView>
        <View>
            <View >
                {images.map((item, index) =>      
                <Text style={styles.imgCon}  onPress={() => navigation.navigate('Wallpapers', {categoryId : item.id} )}>
                <Image
                key={index}
                source={{
                    uri: item.profile
                }}
                style={styles.catImage}
                 />
                 </Text>  )}         
            </View>
        </View>
        
        </ScrollView>
    );
}


const styles = StyleSheet.create({

    text:{
        fontSize:20,
        fontWeight:600,
        fontFamily:''
    },
    catImage:{
        width:'100%', 
        height:300,
        resizeMode: 'cover',
    }

})
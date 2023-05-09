import * as React from 'react';
import {StyleSheet, Image, View, Text, TouchableNativeFeedback } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { A } from '@expo/html-elements';

export default function SettingsScreen({ navigation }) {
    return (
        
        
        <ScrollView>
        {/* main div */}
            <View style={styles.maindiv}>


                {/* //1st div */}
                <View style={styles.div}>
                    <View style={{flexDirection:'row', }}>
                        <Image source={require('./logo.jpg')}
                            style={{width:100, height:100, borderTopRightRadius:50}}
                        />
                        <View style={{display:"flex", width:'65%'}}>
                            <Text style={{paddingLeft:20, paddingTop:5, fontSize:30, fontWeight:'bold'}}>Ocean Team</Text>
                            <Text style={{paddingLeft:20, color:'grey'}}>We are the fastest growing anime commuinity</Text>
                        </View>
                    </View>
                </View>
                
                {/* //2nd div */}
                <Text style={styles.h1}>App Setting</Text>
                <View style={{gap:10}}>

                        <A href='#' style={styles.links}>
                            <Text><Image style={styles.icons} source={require('./icon/storage.png')} /> Storage</Text>
                        </A>
                    
                    </View>

                {/* //3rd View */}
                <View style={styles.div}>
                <Text style={styles.h1}>Social</Text>
                    <View style={{gap:10}}>
                        <A href='https://t.me/Aime_Ocean_Backup' style={styles.links}>
                            <Text><Image style={styles.icons} source={require('./icon/telegram.png')} /> Telegram</Text>
                        </A>
                        <A href='https://Animezia.com' style={styles.links}>
                            <Text><Image style={styles.icons} source={require('./icon/stream.png')} /> Streaming Site</Text>
                        </A>
                       
                        <A href='https://t.me/Anime_Chat_Ocean' style={styles.lastlinks}>
                            <Text><Image style={styles.icons} source={require('./icon/community.png')} /> Ocean's Community</Text>
                        </A>
                        
                    </View>
                <Text style={styles.h1}>Other</Text>
                <View style={{gap:10}}>
                        <A href='#' style={styles.links}>
                            <Text><Image style={styles.icons} source={require('./icon/rate.png')} /> Rate us</Text>
                        </A>
    
                        <A href='#' style={styles.links}>
                            <Text><Image style={styles.icons} source={require('./icon/share.png')} /> Share app</Text>
                        </A>
                       
    
                        <A href='#' style={styles.lastlinks}>
                            <Text><Image style={styles.icons} source={require('./icon/support.png')} /> Help and Support</Text>
                        </A>
                        
                    </View>
                </View>

                {/* //4th view */}
                <View style={styles.div}>
                    <Text style={styles.copyright}>
                    © All rights reserved | Anime Ocean 2023
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}


// designs
const styles = StyleSheet.create({
    maindiv:{
        flex:1,
        flexDirection:'column',
        padding:20,
        justifyContent:"space-between", 
        gap:20
    },

    h1:{
        fontSize:20,
        fontWeight: 'bold',
        marginBottom:5,
    },
    links:{
        paddingLeft:20, 
        color:'grey', 
        fontSize:20,
        gap:5,
    },
    lastlinks:{
        paddingLeft:20, 
        color:'grey', 
        fontSize:20,
        paddingBottom:20,
    },
    copyright:{
        marginTop:15,
        alignSelf:'center',
        color:'tomato'
    },
    icons:{
        width:30,
        height:30,
        resizeMode:'contain',
        paddingLeft:5,
        opacity:0,
        margin:5,
    },

})
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function Mypostcard(){
    return(
        <View style={mycard.main_container}>
            <View style={mycard.name_dp}>
                <Image style={mycard.user_dp} source={{uri:"https://picsum.photos/200"}}/>
                <Text style={mycard.user_name}>nerdnightboy</Text>
            </View>
            <Image style={mycard.user_post} source={{uri:"https://picsum.photos/200"}}/>
            <View style={{flex:0,flexDirection:"row"}}>
                <Image style={{top:15,width:30, height:30,margin:10}} source={require("./image/heart.png")}/>
                <Image style={{top:20,width:15, height:15,margin:10}} source={require("./image/chat_bubble.png")}/>
            </View>
            <Text style={mycard.name_description}>
            <Text style={mycard.user_name}>nerdnightboy</Text>
            <Text> </Text>
            This is my description.
            </Text>
    </View>
    );
}

const mycard = StyleSheet.create({
    main_container:{
        marginTop:30,
        margin:10,
        width:"95%",
        height:450,
        borderRadius:20,
        borderColor:"#dcdee0",
        borderWidth:1,
    },
    name_dp:{
        height:60,
        backgroundColor:"#dcdee0",
        flex:0,
        flexDirection:"row",
        alignItems:"center",
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        padding:20,
    },
    user_dp:{
        width:40,
        aspectRatio:1,
        resizeMode:"cover",
        borderRadius:30,
    },
    user_name:{
        flex:0,
        flexDirection:"column", 
        paddingLeft:10,
        fontWeight:"700",
        fontSize:18,
    },
    user_post:{
        width:"100",
        aspectRatio:1,
    },
    name_description:{
        paddingHorizontal:10,
        fontSize:17,
    }
});
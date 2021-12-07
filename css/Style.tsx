import { StyleSheet } from "react-native";


export const estilo = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'100%',
        flex:1,
        backgroundColor:'white'
    },
    header:{
        width:'100%',
        backgroundColor:'white',
        borderTopWidth:10,
        borderTopColor:'#e1090a',
        borderBottomWidth:5,
        borderBottomColor:'#e1090a',
        position:'absolute',
        top:0,
        alignItems:'center'
    },
    logoHeader:{
        width:300,
        height:100,
        resizeMode:'contain',
        position:'relative',
    },
    body:{
        alignItems:'center',
        justifyContent:'center',

    },
    txtBody:{
        textTransform:'uppercase'
    },
    input:{
        backgroundColor:'#e1090a',
        borderWidth:1,
        borderRadius:10,
        width:200,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        color:'white',
        fontSize:18
    }
})
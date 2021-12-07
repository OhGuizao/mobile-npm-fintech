import * as React from "react";
import { Text, View } from "react-native";
import { estilo } from "../css/Style";

export default function Home(){

    return(
<View style={estilo.container}>
    <View>
    <Text style={estilo.txtBody}>
        bem-vindo de volta
    </Text>
    </View>
</View>
    )
}
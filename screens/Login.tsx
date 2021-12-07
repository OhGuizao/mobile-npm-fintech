//importação do react, que vai permitir criar as telas
import * as React from "react";
//importação do react native, que vai permitir usar os componentes para criar as telas
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { servidor } from "../config/Caminho";
//importação do css
import { estilo } from "../css/Style";

//Variaveis globais
let ocpf = ""
let pw = ""
let resultado:any [];

export default function Login({ navigation }) {

    const [cpf,setCpf] = React.useState("");
    const [senha,setSenha] = React.useState("");

    return (
        <View style={estilo.container} >
            <View style={estilo.header}>
                <Image source={require("../img/logoHeader.png")} style={estilo.logoHeader}></Image>
            </View>
            <View style={estilo.body}>

                <TextInput placeholder='CPF' placeholderTextColor='white' textAlign='center' style={estilo.input}></TextInput>

                <TextInput placeholder='Senha' placeholderTextColor='white'  textAlign='center' style={estilo.input} place></TextInput>

                <TouchableOpacity
                onPress={()=>{
                    //Aqui ele irá fazer a verificação de cpf e senha
                    ocpf = cpf;
                    pw = senha;
                    let retorno = efetuarLogin();

                    if (retorno[0] == "Logado") {
                        navigation.navigate("Home",{dados:retorno})
                    }

                }}>
                    <Text>Login</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

function efetuarLogin() {
    fetch(`${servidor}/login`, {
        method: "POST",
        headers: {
            accept: "application/json",
            "content-type": "application/json"
        },
        body: JSON.stringify({
            usuario: ocpf,
            senha: pw
        })
    })
        .then(response => response.json())
        .then(resp => {
            resultado[0] = resp.output;
            resultado[1] = resp.payload;
            resultado[2] = resp.token;
        })
        .catch((erro) => console.error(`Erro ao tentar buscar a api ->${erro}`))
    return resultado;
}
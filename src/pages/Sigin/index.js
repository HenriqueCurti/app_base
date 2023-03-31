import React from "react";
import {StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";

import { useNavigation} from "@react-navigation/native";

import * as Animatable from "react-native-animatable";


export default function Sigin(){
    return <View style={ styles.container }>
       <Animatable.View animation={"fadeInLeft"} delay={500} style={styles.containerHeader}>
          <Text style={styles.message}> Bem Vindo(a)</Text>
        </Animatable.View> 

        <Animatable.View animation={"fadeInUp"} style={styles.containerForm}>
          <Text style={styles.title}>E-mail</Text>
          <TextInput
             placeholder="Digite um e-mail"
             style={styles.input}
          />
          <Text style={styles.title}>Senha</Text>
          <TextInput
             placeholder="Sua senha"
             style={styles.input}
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonTexto}>Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonCad}>
            <Text style={styles.buttonTextoCad}>Não possui uma conta? Cadastre-se!</Text>
          </TouchableOpacity>


        </Animatable.View>
    </View>
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : "#38a69d",
        flex : 1,
    },
    containerHeader : {
        marginTop : "14%",
        marginBottom : "8%",
        paddingStart : "5%"
    },
    message : {
        fontSize : 28,
        fontWeight : "bold",
        color : "#FFF"
    },
    containerForm : {
        flex : 1,
        backgroundColor : "white",
        borderRadius : 25,
        paddingStart : "5%",
        paddingEnd : "5%",
    },
    title : {
        fontSize : 20,
        marginTop : 28,        
    },
    input : {
        borderBottomWidth : 1,
        height : 40,
        marginBottom : 12,
        fontSize : 16
    },
    button : {
        backgroundColor : "#38a69d",
        width : "100%",
        borderRadius : 4,
        paddingVertical : 8,
        marginTop : 8,
        justifyContent : "center",
        alignItems : "center",
    },
    buttonTexto : {
        color : "#FFF",
        fontWeight : "bold",
        fontSize : 18,
    },
    buttonCad : {
        marginTop : 14,
        alignSelf : "center",        
    },
    buttonTextoCad : {
        color : "#a1a1a1"
    }
});
import React from "react";
import { TouchableOpacity, Image, StyleSheet, View, Text } from "react-native";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

import logo from "../../assets/logo.png"


export default function Welcome(){
    const navigation = useNavigation();
    return <View style={ styles.container }>       
       <View style={ styles.containerLogo}>
         <Animatable.Image
           animation={"flipInY"} 
           source={ logo } 
           style={{ width : "100%"}}
           resizeMode="contain" 
          />
         <Text> Tela Bem Vindo </Text>  
       </View>

       <Animatable.View delay={600} animation={"fadeInUp"} style={ styles.containerForm}>
          <Text style={ styles.titulo }> Monitore e Organize seus Gastos de Qualquer Lugar</Text>
          <Text style={ styles.texto}> Faça Login para Começar </Text>
       </Animatable.View> 

       <TouchableOpacity 
         style={ styles.button}
         onPress={() => navigation.navigate("Login")}>
         <Text style={ styles.buttonTexto}>Acessar</Text>
       </TouchableOpacity>      
    </View>
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#38a69d"
    },
    containerLogo : {
        flex : 2,
        justifyContent : "center",
        alignItems : "center",
    },
    containerForm : {
        flex : 1,
        backgroundColor : "white",
        borderTopLeftRadius : 25,
        borderTopRightRadius : 25,
        paddingStart : "5%",
        paddingEnd : "5%",
    },
    titulo : {
        fontSize : 25,
        fontWeight : "bold",
        marginTop : 28,
        marginBottom : 12
    },
    texto : {
        color : "#a1a1a1",
    },
    button : {
        position : "absolute",
        backgroundColor : "#38a69d",
        borderRadius : 50,
        paddingVertical : 8,
        width : "60%",
        alignSelf : "center",
        bottom : "3%",
        alignItems : "center",
        justifyContent : "center"
    },
    buttonTexto : {
        color : "#FFF",
        fontWeight : "bold",
        fontSize : 18
    },

    imagem : {

    }

});
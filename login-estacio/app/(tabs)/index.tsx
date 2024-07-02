import { View,TextInput,  Text,TouchableOpacity,Image, StyleSheet, Platform } from 'react-native';

import React  from 'react';
import { useState } from 'react';

export default function HomeScreen() {
  return (
    <View  >
      <View  style={styles.container}>
        <Image 
        style={styles.estacioLogo}
        source={require("./logo_estacio.jpg")}>
        </Image>
        <Text style={styles.titulos}>SIA - Sistemas de Informações Acadêmicas</Text>
        <Text style={styles.titulos}>Quinta, 23 de maio de 2024</Text>
        <TouchableOpacity style={styles.btEmail}>     
        
        <Text style={styles.txtBtn}>Entrar com email de estudante</Text></TouchableOpacity>  
        <Text style={{color:"#b5b4b1", margin:18}}>________________________OU________________________</Text>
        <Text style ={styles.txtMatricula}>Matrícula:</Text>
        <TextInput
        style ={styles.fields}
        placeholder='digite sua matrícula...'></TextInput>
        <Text style={styles.linkMatr}>Não sei ou esqueci a matrícula</Text>
        <Text style ={styles.txtSenha}>Senha:</Text>
        <TextInput
        style ={styles.fields}
        placeholder='sua senha...'></TextInput>
        <Text style ={styles.linkSenha}>Esqueci minha senha/Cadastrar primeira senha</Text>
        <TouchableOpacity style={styles.btnEntrar}>
          <Text style={styles.txtBtn}>Entrar</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent:'center',
    alignContent:'center',
    backgroundColor:'white',
    
  },
  txtBtn:{
    color:'white',
    fontWeight:"bold",
    alignContent:'center',
  },
  txtMatricula:{
    paddingRight:240,
    paddingStart:"2%",
    fontSize:16,
  },
  txtSenha:{
    paddingRight:260,
    paddingStart:"2%",
    fontSize:16,
  },
  fields:{
    backgroundColor:"#cfdefa",
    borderColor:'#b5b4b1',
    borderRadius:3,
    width:300,
    height:40,
  },
  linkSenha:{
    color:"#05c1ff",
    fontSize:12,
    paddingLeft:52,
  },
  linkMatr:{
    color:"#05c1ff",
    fontSize:12,
    paddingLeft:130,
  },
  btnEntrar:{},
  btEmail:{
    borderRadius:5,
    backgroundColor: "#0008ff",
    marginTop:20,
    padding:14,
    width:300,
    height:50,
    alignItems:'center',
    
    
  },
  titulos: {

    color:"#353635",
    margin:3,
   
  },
  estacioLogo: {
    height: 170,
    width: 290,
    
    alignContent:'center',
  
  },
});

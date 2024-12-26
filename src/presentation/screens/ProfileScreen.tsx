/* eslint-disable prettier/prettier */

import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>IMDb</Text>
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Usuario</Text>
        <TextInput style={styles.input} placeholder="Ingrese su usuario" />

        <Text style={styles.label}>Contraseña</Text>
        <TextInput style={styles.input} secureTextEntry placeholder="Ingrese su contraseña" />

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>¿Olvidaste la contraseña?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Ó podes ingresar con</Text>
        
        <View style={styles.socialIcons}>
          <Icon name="apple" size={30} color="black" style={styles.icon} />
          <Icon name="facebook" size={30} color="blue" style={styles.icon} />
          <Icon name="google" size={30} color="red" style={styles.icon} />
        </View>

        <Text style={styles.registerText}>
          ¿No tenes cuenta? <Text style={styles.registerLink}>Regístrate</Text>
        </Text>

        <Text style={styles.guestText}>Continuar como invitado</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5c518',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
  },
  inputContainer: {
    width: '80%',
  },
  label: {
    fontSize: 16,
    color: 'gray',
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  forgotPassword: {
    textAlign: 'right',
    color: 'gray',
    marginTop: 5,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: 'gray',
    borderRadius: 5,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
  },
  orText: {
    textAlign: 'center',
    color: 'gray',
    marginBottom: 10,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  icon: {
    marginHorizontal: 10,
  },
  registerText: {
    textAlign: 'center',
    color: 'gray',
  },
  registerLink: {
    color: 'blue',
    fontWeight: 'bold',
  },
  guestText: {
    textAlign: 'center',
    color: 'black',
    marginTop: 20,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
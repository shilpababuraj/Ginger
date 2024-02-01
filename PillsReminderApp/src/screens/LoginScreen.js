import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

const LoginScreen =({navigation})  => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('https://mypillsreminder.com/v1/api/login', {
        method: 'POST',
        headers: {
          'content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          fcm_token:
         'UsPwAT6Ksx4sul7tFuQ:APA91bEV_bvpaSXqiRrmguV6_bjTiyc05US9ksXXyj49EZI58ga9hKiYh_wU769kXMcZIMaHxx4HpY_fb4CHebbs4PIB9DYGEY7VtV9nlogVyV7R9DJQ-Ou-sByha4Y1i0yNwiFEX9Fq',
          zone: 'Asia/Kolkata',
        }),
      });

      if (!response.ok) {
        if (response.status === 400) {
          throw new Error('Invalid data,plaease check your Email and password');
        } else {
          throw new Error('failed to login.please try again later');
        }
      }
      setEmail('');
      setPassword('');

      const data = await response.json();
      console.log(data);
      navigation.navigate('Home')
    } catch (error) {
      console.error(error);
      Alert.alert('Error', error.message);
      setEmail('');
      setPassword('');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.backgroundShape}></View>
      {/* Login Form */}

      <View style={styles.formContainer}>
        <TextInput
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          style={styles.input}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.Text}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  formContainer: {
    width: '70%',
    maxWidth: 400,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 2,
    zIndex: 1,
  },
  backgroundShape: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#3eb16e',
    borderTopLeftRadius: 200,
    borderBottomRightRadius: 200,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 0.5,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  button: {
    width: '80%',
    margin: 25,
    padding: 10,
    backgroundColor: '#3eb16e',
    borderRadius: 5,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
  },
  Text: {
    color: 'gray',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
  },
});

import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function Register() {
  const onPress = () => {
    // console.warn('pressed');
    router.back();
  };

  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  return (
    <View>
      <View>Welcome Back</View>

      <View>

      <View>
          <Text>Full Name</Text>
          <TextInput style={styles.input} placeholder='John Doe' />
        </View>

        <View>
          <Text>Email</Text>
          <TextInput style={styles.input} placeholder='john@doe.com' />
        </View>

        <View>
          <Text>Phone Number</Text>
          <TextInput style={styles.input} placeholder='08000000000' />
        </View>

        <View>
          <Text>Password</Text>
          <View style={[styles.input, styles.passwordInput]}>
          <TextInput placeholder='********' secureTextEntry={!showPassword}  />
          <AntDesign name={showPassword ? "eyeo" : "eye"} onPress={() => {setShowPassword(showPassword)}} />
          </View>
        </View>
      </View>

      <View>
        <Pressable>Register</Pressable>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#eeeeee"
  },

  passwordInput: {
    flexDirection: "row"
  }
});

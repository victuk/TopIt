import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Settings() {

  const router = useRouter();

  return (
    <View>
      <View style={{ marginVertical: 10 }}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Settings</Text>
      </View>

      <ScrollView>
        <Pressable
          style={styles.buttons}
        >
          <Text style={styles.buttonText} onPress={() => {router.push("/settings/profile")}}>Profile</Text>
          <AntDesign name="caretright" />
        </Pressable>

        <Pressable
          style={styles.buttons}
        >
          <Text style={styles.buttonText} onPress={() => {router.push("/settings/about")}}>About</Text>
          <AntDesign name="caretright" />
        </Pressable>

        {/* <Pressable style={styles.buttons} onPress={() => {router.push("/settings")}}>
          <Text style={styles.buttonText}>Contact</Text>
          <AntDesign name="caretright" />
        </Pressable> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 5,
    padding: 10,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 20
  }
});

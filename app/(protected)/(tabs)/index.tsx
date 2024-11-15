import { View, Text, Pressable, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import FiguresComponent from "@/components/FiguresComponent";
import { useFigures } from "@/store/figures";
import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Services from "@/components/Services";
import Network from "@/components/Network";
import { Dropdown } from "react-native-element-dropdown";

export default function Index() {
  const [tab, setTab] = useState("airtime");

  const [airtimeNetwork, setAirtimeNetwork] = useState("");
  const [dataNetwork, setDataNetwork] = useState("");

  const [dataPlanChoosen, setDataPlanChoosen] = useState("");

  const showFigures = useFigures((state) => state.showFigures);
  const toggleFigure = useFigures((state) => state.toggleFigures);

  return (
    <ScrollView>
      <View style={{ padding: 10 }}>
        <View style={styles.blueContainer}>
          
            <Text style={styles.headerTitle}>Welcome Victor</Text>
            <View style={styles.headerAmount}>
              <FiguresComponent
                style={{ color: "white", fontSize: 25, fontWeight: "bold" }}
                amount={20000}
              />
              <Pressable onPress={toggleFigure}>
                <Text style={{ color: "white" }}>
                  {showFigures ? (
                    <FontAwesome name="eye-slash" size={25} />
                  ) : (
                    <FontAwesome name="eye" size={25} />
                  )}
                </Text>
              </Pressable>
            </View>
         
          <Pressable
            style={{
              backgroundColor: "white",
              padding: 10,
              width: 120,
              borderRadius: 20,
              alignItems: "center",
            }}
          >
            <Text style={{ color: Colors.blue }}>Topup Balance</Text>
          </Pressable>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          gap: 20,
          marginTop: 20,
          padding: 20,
        }}
      >
        <Services
          title="Airtime"
          onPress={() => {
            setTab("airtime");
          }}
          style={tab == "airtime" ? styles.selectedTab : styles.unselectedTab}
          textColor={tab == "airtime" ? { color: "white" } : { color: "black" }}
        />
        <Services
          title="Data"
          onPress={() => {
            setTab("data");
          }}
          style={tab == "data" ? styles.selectedTab : styles.unselectedTab}
          textColor={tab == "data" ? { color: "white" } : { color: "black" }}
        />
      </View>

      <View style={{ padding: 20 }}>
        {tab == "airtime" && (
          <View style={{ rowGap: 20 }}>
            <View>
              <Network
                networkValue={airtimeNetwork}
                setNetworkValue={setAirtimeNetwork}
              />
            </View>

            <View>
              <Text>Phone Number</Text>
              <TextInput style={styles.input} />
            </View>

            <View>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Buy</Text>
              </Pressable>
            </View>
          </View>
        )}

        {tab == "data" && (
          <View style={{ rowGap: 20 }}>
            <View>
              <Network
                networkValue={dataNetwork}
                setNetworkValue={setDataNetwork}
              />
            </View>

            <View>
              <Dropdown
                style={[styles.input, { paddingVertical: 10 }]}
                data={[
                  {
                    label: "320 GB N400",
                    value: "320",
                  },
                ]}
                value={dataPlanChoosen}
                onChange={setDataPlanChoosen}
                labelField="label"
                valueField="value"
                placeholder="Item"
              />
            </View>

            <View>
              <Text>Phone Number</Text>
              <TextInput style={styles.input} />
            </View>

            <View>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Buy</Text>
              </Pressable>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  blueContainer: {
    backgroundColor: Colors.blue,
    height: 140,
    width: "100%",
    borderRadius: 25,
    justifyContent: "center",
    padding: 20,
    gap: 10,
  },
  headerTitle: {
    color: "white",
    fontSize: 14,
  },
  headerAmount: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  unselectedTab: {
    backgroundColor: "white",
  },
  selectedTab: {
    backgroundColor: Colors.blue,
    color: "white",
  },
  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 4,
    borderRadius: 5,
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: Colors.blue,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

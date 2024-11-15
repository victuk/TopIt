import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Colors } from '@/constants/Colors';

interface INetwork {
    networkValue: string;
    setNetworkValue: (value: string) => void;
}

export default function Network({networkValue, setNetworkValue}: INetwork) {

    const networks = [
        {
            name: "Airtel"
        },
        {
            name: "MTN"
        },
        {
            name: "Glo"
        },
        {
            name: "9Mobile"
        }
    ];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{columnGap: 20}}>
        {networks.map((network, index) => (
        <Pressable key={index} onPress={() => {setNetworkValue(network.name)}} style={[{backgroundColor: networkValue == network.name ? Colors.blue : "white"}, styles.network]}>
            <Text style={{color: networkValue == network.name ? "white" : "black"}}>{network.name}</Text>
        </Pressable>
        ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    network: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 10
    }
});
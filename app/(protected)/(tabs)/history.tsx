import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import FiguresComponent from '@/components/FiguresComponent';

export default function History() {

    const purchaseHistory = [
        {
            name: "2.5GB",
            amount: 2000,
            status: "Paid"
        },
        {
            name: "2.5GB",
            amount: 2000,
            status: "Paid"
        },
        {
            name: "2.5GB",
            amount: 2000,
            status: "Paid"
        },
        {
            name: "2.5GB",
            amount: 2000,
            status: "Paid"
        },
        {
            name: "2.5GB",
            amount: 2000,
            status: "Paid"
        }
    ];

  return (
    <View style={{padding: 10}}>
        <View style={{marginVertical: 10}}>
      <Text style={{fontWeight: "bold", fontSize: 20}}>History</Text>
        </View>

        <ScrollView>
            {purchaseHistory.map((data, index) => (
                <View style={{justifyContent: "space-between", flexDirection: "row", marginVertical: 5, padding: 10, backgroundColor: "white"}} key={index}>
                    <Text>{data.name} <FiguresComponent amount={data.amount} /></Text>
                    <Text style={{color: "green"}}>{data.status}</Text>
                </View>
            ))}
        </ScrollView>
    </View>
  )
}
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../../Screens/Home'
import Routines from '../../Screens/Routines'
import Progress from '../../Screens/Progress'
import { View, Text, StyleSheet } from 'react-native'
import theme from '../../theme'


function TabItem({ name, icon }: { name: string, icon: any }) {
    return (
        <View>
            <Text style={styles.tabText}>{name}</Text>
        </View>
    )
}

export default function Navigation() {
    return (
        <View style={styles.container}>
            <TabItem name='Inicio' icon="icon" />
            <TabItem name='Rutina' icon="icon" />
            <TabItem name='Progreso' icon="icon" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.color.black,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    tabText: {
        color: theme.color.white
    }
})
import React, { useEffect, useState } from "react";
import { Text, View, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import firebase from "firebase/compat/app";
const RideListScreen = ({ navigation }) => {

    const [rideList, setRideList] = useState([])

    useEffect(() => {
        getRideList();
    }, [])

    function getRideList() {
        firebase.firestore().collection('Rides').get()
            .then(snapshot => {
                let collection = []
                snapshot.docs.forEach((doc) => {
                    collection.push({ ...doc.data(), id: doc.id })
                })
                setRideList(collection)
            });

    }

    const RideItem = ({ Item }) => (
        <TouchableOpacity onPress={() => {
            navigation.navigate('PickupDandT', { rideItem: Item })
        }} style={styles.listContainer}>
            <View style={styles.listRowView}>
                <View style={styles.listRowView1}>
                    <Text style={styles.txtName}>{Item.name}</Text>
                    <Text style={styles.txtKmDriven}>{Item.km_driven}k kms driven</Text>
                </View>
                <View style={styles.listRowView2}>
                    <Image style={{
                        height: 70,
                        width: 70
                    }} resizeMode='cover' source={{ uri: Item.image }} />
                </View>
            </View>
            <View style={styles.horizontalViewLine} />
            <Text style={styles.txtPrice}>{Item.price} Rs/Hr</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.Container}>
            <FlatList
                data={rideList}
                renderItem={({ item }) => <RideItem key={item.id} Item={item} />}
                keyExtractor={item => item.id}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        marginTop: '15%',
        backgroundColor: '#f5f5f5'
    },
    listContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        marginBottom: '5%',
        padding: 10
    },
    listRowView: {
        flex: 1,
        flexDirection: 'row'
    },
    listRowView1: {
        flex: 1.5,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    listRowView2: {
        flex: 0.5,
        justifyContent: 'center',
    },
    txtName: {
        color: '#1c1c1c',
        fontWeight: '700',
        fontSize: 17
    },
    txtKmDriven: {
        color: '#aeaeae',
        fontWeight: '400',
        fontSize: 14,
        marginTop: '2%'
    },

    horizontalViewLine: {
        height: '1%',
        backgroundColor: '#aeaeae',
        marginTop: '5%'
    },
    txtPrice: {
        color: '#1c1c1c',
        fontWeight: '700',
        fontSize: 19,
        marginTop: '5%',
        marginBottom: '4%'
    }
})

export default RideListScreen
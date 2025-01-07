import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAP_KEY } from "../constants/googleMapKey";
import imagePath from "../constants/imagePath";

const Home = ({ navigation }) => {
    //   const GOOGLE_MAP_API = "AIzaSyD0NSpXHMCN8l6gRO6KXOW1t7yiPUamLA"; // Replace with your API key

    const [locations, setLocations] = useState({
        pickup: {
            latitude: 30.7046,
            longitude: 76.7179,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        },
        dropoff: {
            
        },
    });

    const { pickup, dropoff } = locations;


    const onPressLocation = () => {
        //    navigation.navigate("chooselocation" ,{getcordinates: fetchValues})
        navigation.navigate("chooselocation", { getCordinates: fetchValues });

    }

    // const fetchValues = (data) => {
    //     setLocations({
    //         pickup: {
    //             latitude: data.pickup.latitude,
    //             longitude: data.pickup.longitude,
    //         },

    //         dropoff: {
    //             latitude: data.dropoff.latitude,
    //             longitude: data.dropoff.longitude
    //         }

    //     })

    //     console.log("data ======>>", data)
    // }
    const fetchValues = (data) => {
        if (data && data.pickup && data.dropoff) {
            setLocations({
                pickup: {
                    latitude: data.pickup.latitude,
                    longitude: data.pickup.longitude,
                },
                dropoff: {
                    latitude: data.dropoff.latitude,
                    longitude: data.dropoff.longitude,
                }
            });
            console.log("Updated data ======>>", data);  // Debugging the data to check the coordinates
        } else {
            console.warn("Invalid data received:", data);  // Handle invalid data
        }
    };
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <MapView
                    style={StyleSheet.absoluteFill}
                    initialRegion={pickup}
                    showsUserLocation={true}
                    followsUserLocation={true}
                >
                    {/* Pickup Marker */}
                    <Marker
                        coordinate={pickup}
                        image={imagePath.icCurLoc}
                    />

                    {/* Dropoff Marker */}
                    <Marker
                        coordinate={dropoff}
                        image={imagePath.icGreenMarker}
                    />

                    {/* Directions */}
                    <MapViewDirections
                        origin={pickup}
                        destination={dropoff}
                        apikey={GOOGLE_MAP_KEY}
                        strokeWidth={4}
                        strokeColor="blue"
                        onError={(error) => console.log("Directions Error:", error)}
                    />
                </MapView>
            </View>

            <View style={styles.bottomCard}>
                <Text>Where are you going</Text>
                <TouchableOpacity
                    style={styles.inputStyle}
                    onPress={onPressLocation}
                >
                    <Text>Choose your Location</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bottomCard: {
        backgroundColor: "white",
        width: '100%',
        padding: 30,
        borderTopEndRadius: 24,
        borderTopStartRadius: 24,
        marginTop: 16,

    },
    inputStyle: {
        backgroundColor: "white",
        borderRadius: 4,
        borderWidth: 1,
        alignItems: 'center',
        height: 48,
        justifyContent: 'center',

    }
});

export default Home;


// import React, { useState } from "react";
// import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
// import MapView, { Marker } from "react-native-maps";
// import MapViewDirections from "react-native-maps-directions";
// import { GOOGLE_MAP_KEY } from "../constants/googleMapKey";
// import imagePath from "../constants/imagePath";

// const Home = ({ navigation }) => {
//     const [locations, setLocations] = useState({
//         pickup: {
//             latitude: 30.7046,
//             longitude: 76.7179,
//             latitudeDelta: 0.01,
//             longitudeDelta: 0.01,
//         },
//         dropoff: {
//             latitude: 30.7333,
//             longitude: 76.7794,
//             latitudeDelta: 0.01,
//             longitudeDelta: 0.01,
//         },
//     });

//     const { pickup, dropoff } = locations;

//     const onPressLocation = () => {
//         navigation.navigate("chooselocation", { getCordinates: fetchValues });
//     };

//     const fetchValues = (data) => {
//         if (data?.pickup && data?.dropoff) {
//             setLocations({
//                 pickup: {
//                     latitude: data.pickup.latitude,
//                     longitude: data.pickup.longitude,
//                     latitudeDelta: 0.01,
//                     longitudeDelta: 0.01,
//                 },
//                 dropoff: {
//                     latitude: data.dropoff.latitude,
//                     longitude: data.dropoff.longitude,
//                     latitudeDelta: 0.01,
//                     longitudeDelta: 0.01,
//                 },
//             });

//             console.log("Updated Locations:", data);
//         } else {
//             console.error("Invalid data passed to fetchValues:", data);
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <View style={{ flex: 1 }}>
//                 <MapView
//                     style={StyleSheet.absoluteFill}
//                     initialRegion={pickup}
//                     showsUserLocation={true}
//                     followsUserLocation={true}
//                 >
//                     {/* Pickup Marker */}
//                     <Marker coordinate={pickup} image={imagePath.icCurLoc} />

//                     {/* Dropoff Marker */}
//                     <Marker coordinate={dropoff} image={imagePath.icGreenMarker} />

//                     {/* Directions */}
//                     {pickup.latitude && pickup.longitude && dropoff.latitude && dropoff.longitude && (
//                         <MapViewDirections
//                             origin={pickup}
//                             destination={dropoff}
//                             apikey={GOOGLE_MAP_KEY}
//                             strokeWidth={4}
//                             strokeColor="blue"
//                             onError={(error) => console.log("Directions Error:", error)}
//                         />
//                     )}
//                 </MapView>
//             </View>

//             <View style={styles.bottomCard}>
//                 <Text>Where are you going?</Text>
//                 <TouchableOpacity style={styles.inputStyle} onPress={onPressLocation}>
//                     <Text>Choose your Location</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     bottomCard: {
//         backgroundColor: "white",
//         width: "100%",
//         padding: 30,
//         borderTopEndRadius: 24,
//         borderTopStartRadius: 24,
//         marginTop: 16,
//     },
//     inputStyle: {
//         backgroundColor: "white",
//         borderRadius: 4,
//         borderWidth: 1,
//         alignItems: "center",
//         height: 48,
//         justifyContent: "center",
//     },
// });

// export default Home;

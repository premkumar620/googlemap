import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAP_KEY } from "../constants/googleMapKey";

const AddressPicker = ({
    placeholder, fetchAddress
}) => {

     const onPressAddress = (data, details) => {
    //  console.log("details ====>>>" , details);
     
     const lat = details.geometry.location.lat;
     const lng = details.geometry.location.lng;
     fetchAddress(lat, lng);
     }

    


    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder={placeholder}
                onPress={onPressAddress}
                fetchDetails={true}
                query={{
                    key: GOOGLE_MAP_KEY,
                    language: 'en',
                }}
                styles={{
                    textInputContainer:styles.containerStyle,
                    textInput : styles.textInputstyles
                }}
            />
        </View>

    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    containerStyle:{
        backgroundColor:'white',
        

    },
    textInputstyles:{
        height:48,
        color:'black',
        fontSize:16,
        backgroundColor:'#F3F3F3'
    }

})

export default AddressPicker;
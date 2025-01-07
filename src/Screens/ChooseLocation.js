import React , {useState} from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import AddressPicker from "../components/AddressPicker";
import CustomeBtn from "../components/CustomeBtn";

import { useNavigation } from '@react-navigation/native'; 
import { ShowError } from "../helper/HelperFunction";

const ChooseLocation = (props) => {
    const navigation = useNavigation();

    const [state, setState] = useState({
      pickup:{},
      dropoff:{},

    })
    const {pickup, dropoff} = state;

    const checkValid = () => {
      if(Object.keys(pickup).length===0){
        ShowError('Please Enter Your Pickup Location');
        return false;
      }
      if(Object.keys(dropoff).length===0){
        ShowError('Please Enter Your Drop Location Location');
        return false;
      }
      return true;
    }

    // const onDone = () => {
    //   props.route.params.getCordinates({pickup,dropoff})
    //     // Navigate back when Done is pressed
    //     // navigation.goBack();
    // };

    const onDone = () => {

      const isValid = checkValid()
      console.log("is valid", isValid)
      if (isValid){
        const getCordinates = props.route.params?.getCordinates;
      if (typeof getCordinates === 'function') {
          getCordinates({ pickup, dropoff });
      } else {
          console.warn('getCordinates function is not defined.');
      }
      navigation.goBack(); // Uncomment if navigation back is needed
      }
      
  };

    const fetchAddressCords = (lat,lng) =>{
        // console.log("latitude", lat);
        // console.log("longitude", lng);
        setState({
          ...state,pickup:{
            latitude:lat,
            longitude:lng
          }
        })
    }

    const fetchDestinationCords = (lat,lng) =>{
        // console.log("latitude", lat);
        // console.log("longitude", lng);
        setState({
          ...state,dropoff:{
            latitude:lat,
            longitude:lng
          }
        })
        
    }
    console.log("props =====>>>>", props)
    // console.log("pickup cords ===>>>", pickup);
    // console.log("Destination Cords cords ===>>>", dropoff);
  return (
    <View style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{ backgroundColor: "white", flex: 1, padding: 24 }}
      >
        <AddressPicker placeholder="Enter Pickup Location"
        fetchAddress = {fetchAddressCords} />
        <View style={{ marginBottom: 16 }}></View>

        <AddressPicker placeholder="Enter Destination Location" 
            fetchAddress={fetchDestinationCords}
        />
        <CustomeBtn btnText="Done" btnStyle={{ marginTop: 24 }}
        OnPress={onDone}
         />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ChooseLocation;

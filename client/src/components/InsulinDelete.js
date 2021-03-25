import React, { useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar
} from "react-native";
import AppContext from "../context/AppContext";
import styles from "../styles";

const InsulinDeleteComponent = ({navigation, route}) => {
  const { state:{insulin},getInsulin,deleteInsulin } = useContext(AppContext);
  getInsulin();
  var i;
  for (const ins of insulin) {
    if(ins._id == route.params.id){
      i = ins;
    }
  }
  return (
    <View>
      <StatusBar style="auto" />
      <Text style={styles.title}>Do you want to delete this record?</Text>
      <View>
        <Text style={styles.label}>Time</Text>
        <Text>{i.date}</Text>
      </View>
      <View>
        <Text style={styles.label}>Insulin Type</Text>
        <Text>{i.insulin}</Text>
      </View>
      <View>
        <Text style={styles.label}>Dosage (Amount)</Text>
        <Text>{i.dosage}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => { 
        navigation.goBack(); 
        }}>
        <Text style={styles.buttonLabel}>Don't delete</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        //let d = route.params.day;
        //d.removeInsulin(route.params.i);
        deleteInsulin(i);
        navigation.goBack();
        }}>
          <Text style={styles.buttonLabel}>Confirm and delete</Text>
        </TouchableOpacity>
    </View>
  );
}

export default InsulinDeleteComponent;
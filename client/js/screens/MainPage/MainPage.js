import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import propTypes from "prop-types";

const MainPage = ({ navigation }) => {
  return (
    <View>
      <Text>I am the MainPage Screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("WorkoutSession");
        }}
      >
        <Text>To WorkoutSession</Text>
      </TouchableOpacity>
    </View>
  );
};

MainPage.propTypes = {
  navigation: propTypes.object.isRequired
};

export default MainPage;

import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Pressable,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import questions from "../data/questions";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
const ResultsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const data = questions;
  const totalQuestions = data.length;
  // console.log(route.params);
  return (
    <SafeAreaView style={{ margin: 10 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text>Your Results</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 14,
          }}
        >
          <Text>Share</Text>
          <AntDesign
            style={{ marginLeft: 4 }}
            name="sharealt"
            size={18}
            color="black"
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 10,
        }}
      >
        <Text>Questions Answered</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 14,
          }}
        >
          <Text>{totalQuestions}</Text>
        </View>
      </View>
      <Pressable
        style={{
          backgroundColor: "white",
          height: 350,
          borderRadius: 7,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: "magenta",
            fontSize: 15,
            fontWeight: "500",
            textAlign: "center",
            marginTop: 8,
          }}
        >
          Score Card
        </Text>

        <FlatList
          style={{ marginTop: 10 }}
          numColumns={2}
          data={route.params.answers}
          renderItem={({ item, i }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                margin: 10,
                flexDirection: "row",
                alignItems: "center",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Text>{item.question}</Text>
              {item.answer === true ? (
                <AntDesign
                  style={{ marginLeft: 10 }}
                  name="checkcircle"
                  size={20}
                  color="green"
                />
              ) : (
                <AntDesign
                  style={{ marginLeft: 10 }}
                  name="closecircle"
                  size={20}
                  color="red"
                />
              )}
            </View>
          )}
        />

        <Pressable
          onPress={() => navigation.navigate("Home")}
          style={{
            backgroundColor: "green",
            padding: 8,
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 20,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Continue</Text>
        </Pressable>
      </Pressable>
    </SafeAreaView>
  );
};

export default ResultsScreen;

const styles = StyleSheet.create({});

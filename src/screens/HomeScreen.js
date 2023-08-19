import { StyleSheet, Text, View, Image, Pressable, Button } from "react-native";
import React, { useEffect } from "react";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="w-full">
      <LottieView
        className="w-80 m-4 mt-8"
        source={require("../styles/animations/quiz.json")}
        autoPlay
      />
      {/* <Image
        style={{
          marginTop: 40,
          height: 370,
          width: "100%",
          resizeMode: "contain",
        }}
        source={{
          uri: "https://gshelper.com/wp-content/uploads/2017/09/Quiz-Logo.png",
        }}
      /> */}

      <View className="p-3 mt-20">
        <Text className="item-center text-center text-lg font-semibold text-black">
          QUIZ RULES
        </Text>

        <View className="bg-pink-400 align-text-top mt-3 p-3 rounded-lg">
          <View className="flex-row items-center my-2">
            <Text className="text-white ">
              <AntDesign name="arrowright" size={15} color="white" />
            </Text>
            <Text className="text-black font-medium text-sm ml-2">
              For each correct answer you get 5 points
            </Text>
          </View>

          <View className="flex-row items-center my-2">
            <Text className="text-white ">
              <AntDesign name="arrowright" size={15} color="white" />
            </Text>
            <Text className="text-black font-medium text-sm ml-2">
              There is no negative marking for wrong answer
            </Text>
          </View>

          <View className="flex-row items-center my-2">
            <Text className="text-white ">
              <AntDesign name="arrowright" size={15} color="white" />
            </Text>
            <Text className="text-black font-medium text-sm ml-2">
              Each question has a time limit of 25 sec
            </Text>
          </View>

          <View className="flex-row items-center my-2">
            <Text className="text-white ">
              <AntDesign name="arrowright" size={15} color="white" />
            </Text>
            <Text className="text-black font-medium text-sm ml-2">
              You should answer all the questions compulsarily
            </Text>
          </View>
        </View>
      </View>
      <Pressable
        onPress={() => navigation.navigate("Quiz")}
        className="bg-pink-400 p-4 w-32 rounded-2xl mx-auto mt-8"
      >
        <Text className="text-white font-bold items-center text-center">
          Start Quiz
        </Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

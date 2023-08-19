import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import LottieView from "lottie-react-native";

const SplashScreen = (props) => {
  const [authLoading, setAuthLoading] = useState(false);
  const [animationLoad, setAnimationLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAuthLoading(true);
    }, 5000);
  }, []);

  useEffect(() => {
    if (authLoading && animationLoad) {
      props.navigation.replace("Home");
    }
  }, [animationLoad, authLoading, props.navigation]);

  const onAnimationFinish = () => {
    setAnimationLoad(true);
  };
  return (
    <View className="flex-1 items-center justify-center">
      <LottieView
        source={require("../styles/animations/splash.json")}
        autoPlay
        loop={false}
        onAnimationFinish={onAnimationFinish}
      />
    </View>
  );
};
export default SplashScreen;

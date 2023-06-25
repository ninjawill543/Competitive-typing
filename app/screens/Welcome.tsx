import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import colors from "../colors";
import BlueButton from "../components/BlueButton";
import WhiteButton from "../components/WhiteButton";
import "../locales/index";
import { useTranslation } from "react-i18next";
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from './RootStackParams';

import {
  useFonts,
  Roboto_400Regular as Regular,
  Roboto_500Medium as Medium,
  Roboto_700Bold as Bold,
} from "@expo-google-fonts/roboto";

type WelcomeScreenProp = StackNavigationProp<RootStackParamList, 'Welcome'>;


const Welcome = () => {
  const navigation = useNavigation<WelcomeScreenProp>();

  const { t, i18n } = useTranslation(); // destructure i18n here

  const [isButton1Visible, setButton1Visible] = useState(true);
  const [isButton2Visible, setButton2Visible] = useState(false);

  const toggleButtons = () => {
    setButton1Visible(!isButton1Visible) ;
    if (isButton1Visible){
      i18n.changeLanguage('fr');
    }else{
      i18n.changeLanguage('en');
    }
    setButton2Visible(!isButton2Visible);
  };

  return (
    useFonts({
      Regular,
      Medium,
      Bold,
    }),
    (
      <View style={styles.container}>
        <View style={styles.main}>
          <View>
            {isButton1Visible && (
              <TouchableOpacity style={styles.language} onPress={toggleButtons}>
                <Image
                  source={require("../assets/language.png")}
                  style={styles.languageSign}
                />
                <Text style={styles.languageText}>English</Text>
              </TouchableOpacity>
            )}
            {isButton2Visible && (
              <TouchableOpacity style={styles.language} onPress={toggleButtons}>
                <Image
                  source={require("../assets/language.png")}
                  style={styles.languageSign}
                />
                <Text style={styles.languageText}>French</Text>
              </TouchableOpacity>
            )}
          </View>
          <Image source={require("../assets/home.png")} style={styles.image} />
          <Text style={styles.title}>{t("Welcome.title")}</Text>
          <Text style={styles.littleText}>
          {t("Welcome.desc")}
          </Text>
          <BlueButton buttonText={t("Welcome.log")} bottomPadding={"6.67%"} onPress={() => navigation.navigate('LogPhone')}/>
          <WhiteButton
            buttonText={t("Welcome.sign")}
            bottomPadding={"26%"}
            onPress={() => navigation.navigate('Phone')}
          />
        </View>
      </View>
    )
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    width: "90%",
    height: "100%",
    // backgroundColor: 'red',
    alignItems: "center",
    justifyContent: "flex-end",
    // paddingBottom: '26%',
  },
  littleText: {
    fontSize: 18,
    fontFamily: "Regular",
    textAlign: "center",
    marginBottom: "7.36%",
  },
  title: {
    fontSize: 32,
    fontFamily: "Bold",
    textAlign: "center",
    marginBottom: "7.8%",
  },
  image: {
    width: 362,
    height: 291.77,
    alignSelf: "flex-start",
    marginBottom: "17.48%",
  },
  language: {
    backgroundColor: colors.four,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.two,
    marginBottom: "20%",
    marginLeft: "66%",
    width: 131,
    height: 41,
    flexDirection: "row",
  },
  languageText: {
    fontSize: 18,
    fontFamily: "Regular",
    textAlign: "center",
  },
  languageSign: {
    width: 22.25,
    height: 21,
    marginRight: 10,
  },
});

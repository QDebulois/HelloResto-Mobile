import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';

import { Text, View } from "../../components/Themed";
import Separator from "../../components/Separator/Separator";

import React, { useState } from "react";
import RadioGroup, { RadioButtonProps } from "react-native-radio-buttons-group";
import Checkbox from "expo-checkbox";
import Slider from "@react-native-community/slider";

export default function ModalFitlers() {
  const navigation = useNavigation();
  const [slideValue, setSliderValue] = useState<number>(10);
  const [isChecked, setChecked] = useState<boolean>(false);
  const [selectedRadioButtons, setSelectedRadioButtons] = useState("Rien");
  const [radioButtons, setRadioButtons] = useState<RadioButtonProps[]>([
    {
      id: "1", // acts as primary key, should be unique and non-empty string
      label: "Restaurant traditionnel",
      value: "traditionnel",
    },
    {
      id: "2",
      label: "Restaurant gastronomique",
      value: "gastronomique",
    },
  ]);

  function onPressRadioButton(radioButtonsArray: RadioButtonProps[]) {
    setRadioButtons(radioButtonsArray);
    setSelectedRadioButtons(
      radioButtonsArray.find((e) => e.selected)?.value ?? "Rien"
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.Wrapper}>
        <Text style={styles.title}>Filtres avancés</Text>
        <Text style={styles.info}>
          Imaginons que ce soit pour filtrer au mieux...
        </Text>

        <Separator />

        <Text style={styles.text}>Type de restaurant:</Text>
        <Text style={styles.info}>Choix:{selectedRadioButtons}</Text>
        <RadioGroup radioButtons={radioButtons} onPress={onPressRadioButton} />

        <Separator />

        <Text style={styles.text}>Possibilitée de venir sans reserver:</Text>
        <Text style={styles.info}>{isChecked ? "👍 Ok" : "👎 Nope"}</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#4630EB" : undefined}
          />
          <Text style={[styles.info, { fontStyle: "normal", color: "black" }]}>
            Sans réservation
          </Text>
        </View>

        <Separator />
        <Text style={styles.text}>Prix d'un repas moyen:</Text>
        <Text style={styles.info}>Prix: {slideValue}€</Text>
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={10}
          maximumValue={120}
          step={1}
          value={10}
          onValueChange={setSliderValue}
        />

        <Separator />

        <TouchableOpacity
          onPress={() => {
            Alert.alert("Filtres théoriquement validés");
            navigation.goBack();
          }}
          style={[styles.Button, { backgroundColor: "#118C42" }]}
        >
          <Text style={[styles.ButtonText, { color: "#fff" }]}>
            Valider
          </Text>
        </TouchableOpacity>

        {/* Use a light status bar on iOS to account for the black space above the modal */}
        <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    margin: 8,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Wrapper: {
    width: "90%",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    fontSize: 18,
    textAlign: "center",
  },
  info: {
    color: "darkgrey",
    fontSize: 14,
    fontStyle: "italic",
  },
  Button: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  ButtonText: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 2,
    fontSize: 16,
  },
});

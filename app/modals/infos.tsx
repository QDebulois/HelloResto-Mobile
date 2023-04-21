import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import Separator from "../../components/Separator/Separator";

export default function ModalInfos() {
  return (
    <View style={styles.container}>
      <View style={styles.Wrapper}>

        <Text style={styles.title}>Informations</Text>

        <Separator />

        <Text style={styles.text}>
          Cette application ne sert que d'exemple de ce qu'il est possible de
          faire avec react native.
        </Text>

        <Separator />

        <Text style={styles.author}>Réalisé par Débulois Quentin.</Text>

        {/* Use a light status bar on iOS to account for the black space above the modal */}
        <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Wrapper: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
  author: {
    fontSize: 18,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

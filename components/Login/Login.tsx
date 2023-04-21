import { StyleSheet } from "react-native";
import { View, Text, ScrollView } from "../Themed";
import { TextInput } from "react-native";
import Separator from "../Separator/Separator";
import { TouchableOpacity, Alert, useColorScheme } from "react-native";
import { useState } from "react";

import { FontAwesome } from "@expo/vector-icons";

function Icon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome style={{ paddingRight: 10 }} size={32} {...props} />;
}

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChangeUsername = (text: string) => {
    setUsername(text);
  };

  const handleOnChangePassword = (text: string) => {
    setPassword(text);
  };

  const colorScheme = useColorScheme();

  return (
    <ScrollView style={{ width: "85%" }}>
      <View style={styles.InputWrapper}>
        <TextInput
          style={[
            styles.Input,
            { color: colorScheme === "light" ? "black" : "white" },
          ]}
          placeholder="Username"
          multiline={false}
          numberOfLines={1}
          onChangeText={handleOnChangeUsername}
        />
        <TextInput
          style={[
            styles.Input,
            { color: colorScheme === "light" ? "black" : "white" },
          ]}
          placeholder="Password"
          secureTextEntry={true}
          multiline={false}
          numberOfLines={1}
          onChangeText={handleOnChangePassword}
        />

        <TouchableOpacity
          onPress={() => {
            Alert.alert(`Connection\nUser: ${username}\nPass: ${password}`);
          }}
          style={[styles.LoginWith, { backgroundColor: "#3B71CA" }]}
        >
          <Text style={styles.LoginWithText}>Se connecter</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.LoginSeparator}>
        <Separator />
        <Text>OU</Text>
        <Separator />
      </View>

      <View style={styles.LoginWithWrapper}>
        <TouchableOpacity
          onPress={() => {
            Alert.alert("Google");
          }}
          style={[styles.LoginWith, { backgroundColor: "#DC4C64" }]}
        >
          <Icon name="google" color="white" />
          <Text style={styles.LoginWithText}>Continuer avec Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            Alert.alert("Facebook");
          }}
          style={[styles.LoginWith, { backgroundColor: "#3B71CA" }]}
        >
          <Icon name="facebook-square" color="white" />
          <Text style={styles.LoginWithText}>Continuer avec Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            Alert.alert("Github");
          }}
          style={[styles.LoginWith, { backgroundColor: "#1F2937" }]}
        >
          <Icon name="github" color="#fff" />
          <Text style={[styles.LoginWithText, { color: "#fff" }]}>
            Continuer avec GitHub
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  InputWrapper: {
    marginTop: 60,
    flex: 1,
    gap: 30,
    width: "100%",
  },
  Input: {
    height: 60,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderColor: "#777",
    borderRadius: 6,
    fontSize: 16,
  },
  LoginSeparator: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    paddingVertical: 20,
  },
  LoginWithWrapper: {
    flex: 1,
    gap: 30,
    width: "100%",
  },
  LoginWith: {
    display: "flex",
    flexDirection: "row",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  LoginWithText: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 2,
    fontSize: 16,
  },
});

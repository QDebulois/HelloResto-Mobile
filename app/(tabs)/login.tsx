import { StyleSheet } from "react-native";
import { useState } from "react";
import { ScrollView, Text } from "../../components/Themed";
import Login from "../../components/Login/Login";

export default function TabLogin() {
  return (
    <ScrollView>
      <Login/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});

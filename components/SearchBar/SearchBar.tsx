import { StyleSheet, TextInput, Button, Alert } from "react-native";
import { View, Text } from "../Themed";
import { Link } from 'expo-router';
import { useColorScheme,  TouchableOpacity, TouchableHighlight } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

function Icon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return (
    <FontAwesome
      style={{ marginHorizontal: 5, marginVertical: 10 }}
      size={20}
      {...props}
    />
  );
}

export default function SearchBar({
  search,
  handleOnChangeSearch,
  handleOnclickSort,
}: {
  search: any;
  handleOnChangeSearch: any;
  handleOnclickSort: any;
}) {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.SearchContainer}>

      <View style={styles.SearchBar}>
        <View style={styles.SearchBarIcon}>
          <Icon name={"search"} color={"#777"} />
        </View>
        <TextInput
          defaultValue={search}
          style={[
            styles.SearchInput,
            { color: colorScheme === "light" ? "black" : "white" },
          ]}
          onChangeText={(text) => handleOnChangeSearch(text)}
          multiline={false}
          numberOfLines={1}
        ></TextInput>
      </View>

      <View>
        <View style={styles.SortButtonWrapper}>

          <TouchableOpacity
            style={styles.SortButton}
            onPress={() => {
              handleOnclickSort("nom");
            }}
          >
            <Text style={styles.SortButtonText}>Trie par nom</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.SortButton}
            onPress={() => {
              handleOnclickSort("date");
            }}
          >
            <Text style={styles.SortButtonText}>Trie par Date</Text>
          </TouchableOpacity>

        <Link href="modals/filters" asChild>
          <TouchableOpacity
            style={styles.SortButton}
            onPress={() => {}}
          >
            <Text style={styles.SortButtonText}>+ de filtres</Text>
          </TouchableOpacity>
          </Link>

        </View>
      </View>

    </View>
  );
}

const borderSize = 1;
const borderRadius = 6;
const borderColor = "#777";
const fontSize = 16;
const paddingInput = 4;

const styles = StyleSheet.create({
  SearchContainer: {
    paddingTop: 20,
    width: "80%",
  },
  SearchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  SearchBarIcon: {
    padding: paddingInput,
    borderBottomWidth: borderSize,
    borderTopWidth: borderSize,
    borderLeftWidth: borderSize,
    borderBottomLeftRadius: borderRadius,
    borderTopLeftRadius: borderRadius,
    borderColor: borderColor,
  },
  SearchInput: {
    flex: 1,
    height: 50,
    fontSize: fontSize,
    padding: paddingInput,
    borderColor: borderColor,
    borderTopWidth: borderSize,
    borderBottomWidth: borderSize,
    borderRightWidth: borderSize,
    borderBottomRightRadius: borderRadius,
    borderTopRightRadius: borderRadius,
  },
  SortButtonWrapper: {
    marginTop: 20,
    marginBottom: 5,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  SortButton: {
    borderWidth: borderSize,
    borderRadius: borderRadius,
    padding: 4,
    borderColor: borderColor
  },
  SortButtonText: {
    color: borderColor,
  }

});

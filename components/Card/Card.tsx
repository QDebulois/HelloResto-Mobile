import Separator from "../Separator/Separator";
import { View, Text } from "../Themed";
import { StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight, Linking } from "react-native";

interface ICard {
  title: string;
  localisation: string;
  infos: string;
  photoUri: string;
  url: string;
}

export default function Card({title, localisation, infos, photoUri, url }: ICard) {
  return (
    <TouchableWithoutFeedback onPress={() => Linking.openURL(url)}>
      <View style={styles.CardContainer}>
        <Image
          source={{uri: photoUri}}
          style={styles.CardImage}
        />
        <View style={styles.CardMain}>
          <Text style={styles.CardTitle}>
            {title}
          </Text>
          <Separator />
          <Text style={styles.CardText}>
            {localisation}
          </Text>
          <Text style={styles.CardInfo}>
            {infos}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  CardContainer: {
    flex: 1,
    height: 350,
    borderRadius: 8,
    width: "90%",
    borderWidth: 2,
    borderColor: "#D42A46DD",
    marginVertical: 10,
    shadowColor: "darkgrey",
    shadowOffset: {width: 4, height: 6},
    shadowOpacity: 1,
  },
  CardImage: {
    width: "100%",
    height: 150,
    resizeMode: 'cover',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  CardMain: {
    flex: 1,
    justifyContent: "space-around",
    padding: 15,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  CardTitle: {
    fontSize: 18,
    color: "#777",
    textAlign: "center",
  },
  CardText: {
    fontSize: 14,
    color: "#555",
  },
  CardInfo: {
    fontSize: 12,
    color: "#333",
  },
})

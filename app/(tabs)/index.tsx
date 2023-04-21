import { StyleSheet, Image } from "react-native";
import { Text, ScrollView, View } from "../../components/Themed";
import Separator from "../../components/Separator/Separator";

export default function TabIndex() {
  return (
    <ScrollView>
      <View style={styles.MainWrapper}>
        <Image style={[styles.ImageLogo, styles.Logo]} source={{uri: "https://www.helloresto.fr/assets/images/logo-header.826b6a13.png"}}/>
        <Separator />
        <Text style={styles.Title}>
          Restaurant à Roanne ou dans la Loire, Helloresto le trouve pour vous !
        </Text>
        <Text style={styles.Info}>Restaurant et Gastronomie !</Text>
        <Image
          source={{
            uri: "https://www.helloresto.fr/assets/images/helloresto-3.76db75e7.jpg",
          }}
          style={styles.Image}
        />
        <Separator />
        <Text style={styles.Title}>
          Découvrir ou redécouvrir le terroir de notre belle région roannaise
        </Text>
        <Text style={styles.Text}>
          Sans être (trop) chauvin, il est vrai que le département de la Loire,
          dont le roannais, compte de très bonnes tables, et ce, dans toutes les
          fourchettes de prix. Les gens du pays ont l’amour des bons produits,
          et nos restaurateurs savent particulièrement bien les mettre en
          valeur.{"\n\n"}Sur notre site vous trouverez naturellement des
          restaurants, mais aussi un magazine couvrant l’actualité de ces
          établissements, un service de chèque cadeaux, et d’exquises recettes
          dévoilées par nos chefs !{"\n\n"} Bien sûr, tout le monde connaît le
          restaurant étoilé Trois Gros, mais nous pourrions citer également le
          Tourdion à Roanne ou l’auberge Costelloise pour une cuisine
          gastronomique, les Remparts ou l’Auberge des délices à Roanne pour la
          cuisine traditionnelle, et tant d’autres encore où des repas de
          qualité vous serons servis.
        </Text>
        <Image
          source={{
            uri: "https://www.helloresto.fr/assets/images/back-acc-2.7cea98ee.jpg",
          }}
          style={styles.Image}
        />
        <Separator />
        <Text style={styles.Title}>La gastronomie roannaise à l’honneur</Text>
        <Text style={styles.Text}>
          Chaque mois, des articles décrivent un ou plusieurs restaurants. Une
          autre façon de mettre la gastronomie, le terroir, et le talent de nos
          chefs ligériens en avant. Le Mag’ Helloresto a été créé pour parler de
          nos coups de cœur et vous les faire découvrir… Vous pouvez également
          suivre notre actualité sur notre page Facebook. Les meilleurs
          restaurants Roanne sont sur Helloresto, cliquez, trouvez !
        </Text>
        <Image
          source={{
            uri: "https://www.helloresto.fr/assets/images/back-acc.93a6ae2d.jpg",
          }}
          style={styles.Image}
        />
        <Separator />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  MainWrapper: {
    alignItems: "center",
    width: "100%",
  },
  Image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginVertical: 10,
  },
  ImageLogo: {
    width: "70%",
    height: 150,
    resizeMode: "contain",
  },
  Logo: {
    marginTop: 20,
  },
  Title: {
    width: "90%",
    marginVertical: 20,
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
  Text: {
    width: "90%",
    fontSize: 14,
  },
  Info: {
    width: "90%",
    fontSize: 12,
    textAlign: "center",
    fontStyle: "italic",
  },
});

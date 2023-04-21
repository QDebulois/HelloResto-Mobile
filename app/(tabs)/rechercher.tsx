import { StyleSheet } from "react-native";
import { useState } from "react";
import { restaurants } from "../../data/data";
import { View, ScrollView, Text } from "../../components/Themed";
import Search from "../../components/SearchBar/SearchBar";
import Separator from "../../components/Separator/Separator";
import Card from "../../components/Card/Card";

export default function TabRechercher() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<SortBy>("nom");

  const handleOnChangeSearch = (text: string) => {
    setSearch(text);
  };

  const selectedRetaurants: Restaurant[] = restaurants.filter((e) =>
    e.nom.toLowerCase().includes(search.toLowerCase())
  );

  if (sortBy === "nom") {
    selectedRetaurants.sort((a, b) => (a.nom <= b.nom ? -1 : 1));
  } else if (sortBy === "date") {
    selectedRetaurants.sort((a, b) => (a.date < b.date ? -1 : 1));
  }

  return (
    <ScrollView>
      <Search
        handleOnChangeSearch={handleOnChangeSearch}
        handleOnclickSort={setSortBy}
        search={search}
      />
      <Separator />
      {selectedRetaurants.length === 0 && <Text>Aucun résultat.</Text>}
      {selectedRetaurants.map((restaurant, index) => {
        return (
          <Card
            key={index}
            title={restaurant.nom}
            localisation={restaurant.localisation}
            photoUri={restaurant.photoUri}
            infos={restaurant.shortDescription}
            url={restaurant.url}
          />
        );
      })}
      <Separator />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});

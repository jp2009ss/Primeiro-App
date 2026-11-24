import { StyleSheet, Text, View } from "react-native";

export default function Homescreen() {
  return (
    <View style={style.container}>
      <Text style={style.titulo}>Olá mundo!</Text>
    </View>
  );
}

const style = StyleSheet.create({
  titulo: {
    color: "blue",
    fontSize: 30,
    fontFamily: "Bold",
  },

  container: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

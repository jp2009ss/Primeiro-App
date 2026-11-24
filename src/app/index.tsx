import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Primeiro Aplicativo!</Text>

      <Text style={styles.subtitulo}>Desenvolvido com React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ff3ae5",
  },

  subtitulo: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ffffff",
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
    backgroundImage: "linear-gradient(to right, #fd5ae7, #000000)",
  },
});

import { Image, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logoBIDU.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.titulo}>BIDU</Text>

      <Text style={styles.subtitulo}>
        Quando a fome aperta, você pede um Delivery. E quando seu melhor amigo
        pede um passeio?
      </Text>

      <Text style={styles.descricao}>
        Quando a fome aperta, você pede um delivery. Mas e se, quando o seu
        melhor amigo pede um passeio, você fizesse o mesmo? Levando inovação e
        praticidade até a sua casa, o Bidu é um serviço de passeio pensado
        exclusivamente para o seu pet.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 90,
    height: 90,
    // alignSelf: "center",
    marginBottom: 16,
  },

  descricao: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "i",
    textAlign: "center",
    color: "#ffffff",
    marginTop: 20,
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fa6209",
  },

  subtitulo: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ffa702",
    marginTop: 16,
  },

  container: {
    flex: 1,
    backgroundColor: "#8f400c",
    backgroundImage: "linear-gradient(to bottom, #ff422a, #000000)",
  },
});

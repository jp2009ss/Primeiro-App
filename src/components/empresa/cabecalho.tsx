import { StyleSheet, Text, View } from "react-native";

export default function Cabecalho() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>BIDU</Text>

      <Text style={styles.subtitulo}>
        Quando a fome aperta, você pede um Delivery. E quando seu melhor amigo
        pede um passeio?
      </Text>
    </View>
  );
}

// Header

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1D4ED8",
    padding: 24,
    borderRadius: 16,
    alignItems: "center",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  subtitulo: {
    fontSize: 14,
    color: "#DBEAFE",
    marginTop: 8,
    textAlign: "center",
  },
});

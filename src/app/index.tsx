import { ScrollView, StyleSheet, View } from "react-native";

import Cabecalho from "../components/empresa/cabecalho";
import Rodape from "../components/empresa/rodape";
import Servico from "../components/empresa/servico";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Cabecalho />
        <Servico />
        <Servico />
        <Servico />
      </ScrollView>
      <Rodape />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F5F9",
  },
  conteudo: {
    padding: 20,
  },
  secao: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0F172A",
    marginTop: 28,
  },
});

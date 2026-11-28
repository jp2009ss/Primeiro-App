import { ScrollView, StyleSheet, View } from "react-native";

import Biduservicos from "../components/empresa/biduservicos";
import Cabecalho from "../components/empresa/cabecalho";
import Rodape from "../components/empresa/rodape";
import Servico from "../components/empresa/servico";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Cabecalho />
        <Servico
          titulo="Serviço 1"
          descricao="Descrição do serviço 1"
          preco={100}
        />
        <Servico
          titulo="Serviço 2"
          descricao="Descrição do serviço 2"
          preco={200}
        />
        <Servico
          titulo="Serviço 3"
          descricao="Descrição do serviço 3"
          preco={300}
        />
        <Biduservicos />
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

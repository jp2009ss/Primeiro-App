import { StyleSheet, Text, View } from "react-native";

type ServicoProps = {
  titulo: string;
  descricao: string;
  preco: number;
};

export default function Servico({ titulo, descricao, preco }: ServicoProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.descricao}>{descricao}</Text>
      <Text style={styles.preco}>Preço: R$ {preco.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 12,
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0F172A",
    marginBottom: 8,
  },
  descricao: {
    fontSize: 15,
    color: "#475569",
    lineHeight: 23,
  },
  preco: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#059669",
    marginTop: 8,
  },
});

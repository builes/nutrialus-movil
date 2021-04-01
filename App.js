import { Button, StyleSheet, Text, View } from "react-native";
import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import { Appbar, Card, Title, Paragraph } from "react-native-paper";

const App = () => {
  const [usuario, setUsuario] = useState({});

  async function obtenerUsuario() {
    try {
      const res = await axios.get(
        "https://0q27loouph.execute-api.us-east-1.amazonaws.com/"
      );
      console.log(res.data);
      setUsuario(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    obtenerUsuario();
  }, []);

  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title="Mauricio Builes" />
      </Appbar.Header>
      <Card style={styles.centrar}>
        <Card.Title title="Rest Nutrialus" />

        <Card.Cover source={usuario.image} style={styles.imagen} />
        <Card.Content>
          <Title>
            Name: <Paragraph>{usuario.name}</Paragraph>
          </Title>
          <Title>
            Email: <Paragraph>{usuario.email}</Paragraph>
          </Title>
          <Title>
            Phone: <Paragraph>{usuario.phone}</Paragraph>
          </Title>
          <Title>
            Nutritionist: <Paragraph>{usuario.nutritionist}</Paragraph>
          </Title>
        </Card.Content>
        <Card.Actions>
          <Button title="Obtener  nuevo Paciente" onPress={obtenerUsuario}>
            Ok
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  centrar: {
    textAlign: "center",
  },
  imagen: {
    height: "300px",
  },
});

export default App;

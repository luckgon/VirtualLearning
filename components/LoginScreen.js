import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useFonts, Nunito_700Bold, Nunito_600SemiBold, Nunito_400Regular } from "@expo-google-fonts/nunito";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function LoginScreen() {
  const [fontLoaded] = useFonts({
    Nunito_700Bold,
    Nunito_600SemiBold,
    Nunito_400Regular,
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.tx1}>Acesse</Text>
      <Text style={{ fontFamily: "Nunito_600SemiBold" }}>
        Com e-mail e senha para entrar
      </Text>

      <View>
        <Text style={styles.mail}>E-mail</Text>
        <TextInput style={styles.textInput} placeholder="Digite seu e-mail" />
      </View>
      <View>
        <Text style={styles.pw}>Senha</Text>
        <TextInput style={styles.textInput} secureTextEntry={true} placeholder="Digite sua senha"/>
      </View>

      <View style={styles.opcoes}>
        <BouncyCheckbox
          marginRight={50}
          fillColor="#0283AC"
          size={25}
          color="blue"
          text="Lembrar minha senha"
          textStyle={{
            textDecorationLine: "none",
            fontSize: 13,
            fontFamily: 'Nunito_400Regular',
            color: "black",
          }}
        />
        <TouchableOpacity>
          <Text style={styles.opText}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.botoes}>
        <TouchableOpacity style={styles.btEntrar}>
          <Text style={styles.txEntrar}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btCadastrar}>
          <Text style={styles.txCadastrar}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    paddingBottom: 10,
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  tx1: {
    fontSize: 50,
    fontFamily: "Nunito_700Bold",
  },
  textInput: {
    backgroundColor: "#eaeced",
    color: "#BEC3C7",
    height: 60,
    width: 370,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    alignSelf: "center",
    borderRadius: 5,
    fontFamily: "Nunito_400Regular",
  },
  btEntrar: {
    backgroundColor: "#0283AC",
    padding: 65,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 5,
    marginRight: 20,
  },
  txEntrar: {
    color: "white",
    fontSize: 20,
    fontFamily: 'Nunito_600SemiBold'
  },
  btCadastrar: {
    borderColor: "#9e9e9e",
    borderWidth: 1,
    padding: 40,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 5,
  },

  txCadastrar: {
    color: "black",
    fontSize: 20,
    fontFamily: 'Nunito_600SemiBold'
  },

  botoes: {
    rowGap: 100,
    flexDirection: "row",
  },
  checkbox: {
    alignSelf: "center",
  },

  opcoes: {
    alignItems: "center",
    gap: 30,
    flexDirection: "row",
  },

  opText: {
    fontSize: 13,
    fontFamily: 'Nunito_400Regular'
  },

  mail: {
    marginLeft: 30,
  },
  pw: {
    marginLeft: 30,
  },
  box: {
    size: 25,
    fillColor: "red",
    unfillColor: "#FFFFFF",
    text: "Custom Checkbox",
    borderColor: "red",
    borderWidth: 2,
    fontFamily: "JosefinSans-Regular",
  },
});

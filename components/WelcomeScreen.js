import { StatusBar } from "expo-status-bar";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useFonts, Nunito_700Bold, Nunito_600SemiBold, Nunito_400Regular } from "@expo-google-fonts/nunito";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const [fontLoaded] = useFonts({
    Nunito_700Bold,
    Nunito_600SemiBold,
    Nunito_400Regular
  });

  if (!fontLoaded) {
    return null;
  }

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Image source={require("../assets/RoboMeditando.png")} style={styles.img}/>
      </View>
      <Text style={styles.txt}>Seja bem vindo!</Text>
      <View style={styles.botoes}>
        <TouchableOpacity style={styles.togoogle}>
          <Image source={require("../assets/LogoGoogle.png")} style={{width: 40, height: 40}}/>
          <Text style={styles.txtBtnGoogle}>Entrar com o Google</Text>
        </TouchableOpacity>
        <Text style={styles.ou}>ou</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Access")} style={styles.toemail}>
          <Text style={styles.txtBtnEmail}>Entrar com E-mail</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  img: {
    height: 350,
    width: 300,
  },
  txt: {
    fontSize: 30,
    fontFamily: 'Nunito_700Bold',
  },
  botoes: {
    alignItems: "center",
  },
  togoogle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#0283AC',
    width: 350,
    height: 60,
    borderRadius: 10,
    padding: 10,
  },
  txtBtnGoogle: {
    paddingLeft: 65,
    flex: 1,
    justifyContent: "center",
    color: '#FFFFFF',
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 16
  },
  ou: {
    margin: 15,
    fontFamily: 'Nunito_400Regular',
    fontSize: 16
  },
  toemail: {
    borderWidth: 1,
    width: 350,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 100
  },
  txtBtnEmail: {
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 16
  }
});

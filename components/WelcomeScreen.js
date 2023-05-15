import { StatusBar } from "expo-status-bar";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useFonts, Nunito_700Bold, Nunito_600SemiBold } from '@expo-google-fonts/nunito';
import { useNavigation } from '@react-navigation/native';
import LoginScreen from './LoginScreen'




export default function WelcomeScreen() {

    const [fontLoaded] = useFonts({
        Nunito_700Bold,
        Nunito_600SemiBold
    });

    if (!fontLoaded) {
        return null;
    }

    const navigation = useNavigation()

    function telaLogin() {
        navigation.navigate(LoginScreen);
    }

    return (
        <View style={styles.container}>
            <View>
                <Image source={require('../assets/RoboMeditando.png')} style={styles.img} />
            </View>
            <Text style={styles.txt}>Seja bem vindo!</Text>
            <TouchableOpacity style={styles.TouchOpac}>
                <Image source={require('../assets/LogoGoogle.png')} />
                <Text style={styles.txTouchOp}>Entrar com o Google</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={'telaLogin'}>
                <Text style={styles.txTouchOp}>Entrar com E-mail</Text>
               
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 5,
        paddingBottom: 10,
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: "center",
        justifyContent: 'space-around'
    },
    img: {
        paddingTop: 0,
        width: 300,
    },
    txt: {
        fontFamily: 'Nunito_700Bold',
        fontSize: 30,
    },
    TouchOpac:{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderColor: "#000000",
        borderWidth: 2,
        
    },
    txTouchOp: {
        paddingTop: 100,
        fontFamily: 'Nunito_600SemiBold',
        height: 200,
        alignItems: 'center',

    }

});
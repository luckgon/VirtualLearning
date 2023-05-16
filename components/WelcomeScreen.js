import { StatusBar } from "expo-status-bar";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useFonts, Nunito_700Bold, Nunito_600SemiBold } from '@expo-google-fonts/nunito';


export default function WelcomeScreen() {

    const [fontLoaded] = useFonts({
        Nunito_700Bold,
        Nunito_600SemiBold
    });

    if (!fontLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View>
                <Image source={require('../assets/RoboMeditando.png')} style={styles.img} />
            </View>
            <View style={styles.textos}>
                <Text style={styles.titulo}>Seja bem vindo!</Text>
                <View style={styles.containerGoogle}>
                    <TouchableOpacity style={styles.TOGoogle}>
                        <Image source={require('../assets/LogoGoogle.png')} style={styles.imgGoogle}/>
                        <Text style={styles.txTOGoogle}>Entrar com o Google</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.ou}>ou</Text>
                <View>
                    <TouchableOpacity style={styles.TOEmail}>
                        <Text style={styles.txTOEmail}>Entrar com E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 5,
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#ffffff',
        alignItems: "center",
        justifyContent: 'space-around'
    },
    img: {
        width: 300,
    },
    textos: {
        borderWidth: 5,
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        width: 400,
    },
    titulo: {
        fontFamily: 'Nunito_700Bold',
        fontSize: 30,
    },
    containerGoogle: {
        height: 50,
    },
    imgGoogle: {
        
    },
    TOGoogle: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 5,
        width: 300,
        height: 100,
        backgroundColor: '#0283AC',
        alignItems: "center",
        padding: 10,
    },
    txTOGoogle: {
        fontFamily: 'Nunito_600SemiBold',
        color: '#000000',
    },
    TOEmail: {

    },
    txTOEmail: {
        fontFamily: 'Nunito_600SemiBold',
        color: '#000000',
    },


});
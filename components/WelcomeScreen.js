import { StatusBar } from "expo-status-bar";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useFonts, Nunito_700Bold, Nunito_600SemiBold } from '@expo-google-fonts/nunito';
import { useNavigation } from '@react-navigation/native';





export default function WelcomeScreen() {

    const [fontLoaded] = useFonts({
        Nunito_700Bold,
        Nunito_600SemiBold
    });

    if (!fontLoaded) {
        return null;
    }

    const navigation = useNavigation()

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
            <TouchableOpacity onPress={()=> navigation.navigate("Acess")}>
                <Text style={styles.txTouchOp}>Entrar com E-mail</Text>
               
            </TouchableOpacity>
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

// =======
//         justifyContent: "space-between",
//         borderColor: "#000000",
//         borderWidth: 2,
        
//     },
    txTouchOp: {
        paddingTop: 100,
        fontFamily: 'Nunito_600SemiBold',
        height: 200,
        alignItems: 'center',

    }
})
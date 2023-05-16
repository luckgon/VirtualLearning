
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { Button } from "react-native-web";


export default function LoginScreen() {
    return(
        <View style={styles.container}>
            <Text>Acesse</Text>
            <Text>Com e-mail para entrar</Text>
            <TextInput style={styles.textInput}/>
            <TextInput style={styles.textInput} secureTextEntry={true}/>

            <View style={styles.botoes}>
                <TouchableOpacity style={styles.btEntar}>
                    <Text style={styles.txEntar}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btCadastrar} >
                    <Text>Cadastrar</Text>
                </TouchableOpacity>
            </View>    
            <TouchableOpacity>
                <Text>Esqueci minha senha</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Entrar</Text>
            </TouchableOpacity>

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
    textInput: {
        backgroundColor: '#eaeced',
        color: 'black',
        height: 40,
        width: 300,
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        alignSelf: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#9e9e9e',
        borderWidth: 2,

      },
      btEntar: {
        backgroundColor:'#33caff',
        padding: 45,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 5,
        

      },
      txEntar: {
        color: 'white',
      },
      btCadastrar: {
        borderWidth: 2,
        padding: 30,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 5,
        

      },
      botoes:{
        justifyContent:'space-between',
        

      },
})    
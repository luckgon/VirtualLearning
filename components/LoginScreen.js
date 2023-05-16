
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, CheckBox } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";



export default function LoginScreen() {
    return(
        <View style={styles.container}>
            <Text>Acesse</Text>
            <Text>Com e-mail para entrar</Text>

            <View >
                <Text style={styles.mail}>E-mail</Text>
                <TextInput style={styles.textInput}/>
            </View>
            <View >
                <Text style={styles.pw}>Senha</Text>
                <TextInput style={styles.textInput} secureTextEntry={true}/>

            </View>

            <View style={styles.opcoes}>

                
                <BouncyCheckbox
                    
                    marginRight={50}
                    fillColor="#3b82ab"
                    size={25}
                    color="blue"
                    text="Lembrar minha senha"
                    textStyle={{
                        textDecorationLine: "none",
                        fontSize: 13,
                        color: 'black',
                        
                      }}
                />
                <TouchableOpacity>
                    <Text>Esqueci minha senha</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.botoes}>
                <TouchableOpacity style={styles.btEntar}>
                    <Text style={styles.txEntar}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btCadastrar} >
                    <Text>Cadastrar</Text>
                </TouchableOpacity>
            </View>    
            
            


            
            <TouchableOpacity>
                <Text>ou continue com</Text>
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
        height: 60,
        width: 370,
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 20,
        alignSelf: 'center',
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: '#9e9e9e',
        borderWidth: 2,

      },
      btEntar: {
        backgroundColor:'#3b82ab',
        padding: 75,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 5,
        marginRight: 10,
        

      },
      txEntar: {
        color: 'white',
      },
      btCadastrar: {
        borderWidth: 2,
        padding: 50,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 5,
        

      },
      botoes:{
        
        rowGap: 100,
        flexDirection: 'row',

      },
      checkbox: {
        alignSelf: 'center',
      },

      opcoes: {
        alignItems: 'center',

        flexDirection: 'row',
      },

      mail: {
        marginLeft: 30,
      },
      pw: {
        marginLeft: 30,
      },
      box: {
        size:25,
        fillColor:"red",
        unfillColor:"#FFFFFF",
        text:"Custom Checkbox",
        borderColor: "red",
        borderWidth: 2,
        fontFamily: "JosefinSans-Regular",
        
      },


})    
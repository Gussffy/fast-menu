import {View, Text, TouchableOpacity, StyleSheet, Dimensions} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import {colors} from "@/src/styles/global";
import {useState} from "react";
import {router} from "expo-router";
import Input from "@/src/components/Input";

const { height } = Dimensions.get('window');

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [table, setTable] = useState("");

    const handleRegister = () => {
        console.log({name, email, cpf, table});
        router.push("/");
    };

    return (
        <LinearGradient
            colors={['#FFF193', '#F71C1C']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}
        >
            <View style={styles.topContainer}>
                <Text style={styles.title}>FastMenu</Text>
            </View>

            <View style={styles.formContainer}>
                <View style={styles.inputsWrapper}>
                    <Input
                        placeholder="Nome"
                        value={name}
                        onChangeText={setName}
                    />
                    <Input
                        placeholder="CPF"
                        value={cpf}
                        onChangeText={setCpf}
                        keyboardType="numeric"
                    />
                    <Input
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                    <Input
                        placeholder="Mesa"
                        value={table}
                        onChangeText={setTable}
                        keyboardType="numeric"
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topContainer: {
        flex: 0.3, // 30% do espaço para o título
        justifyContent: "flex-end",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    title: {
        fontSize: 42,
        fontWeight: "bold",
        color: colors.light,
        textAlign: "center",
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
        paddingBottom: 50,
    },
    formContainer: {
        flex: 0.7, // 70% do espaço para o formulário
        backgroundColor: colors.light,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 25,
        paddingTop: 30,
        paddingBottom: 30,
        justifyContent: "space-between", // Espaça o conteúdo e o botão
        shadowColor: colors.dark,
        shadowOffset: {
            width: 0,
            height: -3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 10,
    },
    inputsWrapper: {
        width: '100%',
    },
    button: {
        backgroundColor: colors.buttons,
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 15,
        shadowColor: colors.dark,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 3,
    },
    buttonText: {
        color: colors.light,
        fontSize: 18,
        fontWeight: "bold",
    },
});
import Input from "@/src/components/Input";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import styles from "./styles";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [table, setTable] = useState("");
  const greetingName = name.trim() || "usuario";

  const handleRegister = () => {
    console.log({ name, email, cpf, table });
    router.push("../");
  };

  return (
    <LinearGradient
      colors={["#FFF193", "#F71C1C"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.topContainer}>
        <Text style={styles.title}>Ola, {greetingName}</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputsWrapper}>
          <Input placeholder="Nome" value={name} onChangeText={setName} />
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
};

export default Register;

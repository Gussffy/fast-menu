import Input from "@/src/components/Input";
import { useUser } from "@/src/context/UserContext";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

import CustomHeader from "../CutomHeader";
import styles from "./styles";

const UserDatas = () => {
  const { userData, clearUserData } = useUser();

  const handleLogout = () => {
    clearUserData();
    router.replace("/(tabs)/Home");
  };

  const handleGoToRegister = () => {
    router.push("/(tabs)/Home/Register");
  };

  if (!userData) {
    return (
      <LinearGradient
        colors={["#fcee91", "#EF2A39"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
      >
        <CustomHeader />
        <View style={styles.topContainer}>
          <Text style={styles.title}>Perfil</Text>
        </View>
        <View style={styles.formContainer}>
          <Text style={{ textAlign: 'center', color: '#666', fontSize: 16, marginTop: 20, marginBottom: 30 }}>
            Nenhum dado de usuário encontrado.
          </Text>
          
          <TouchableOpacity 
            style={{
              backgroundColor: '#FFF193',
              paddingVertical: 15,
              paddingHorizontal: 24,
              borderRadius: 8,
              alignItems: 'center',
              borderWidth: 2,
              borderColor: '#EF2A39'
            }} 
            onPress={handleGoToRegister}
          >
            <Text style={{ color: '#EF2A39', fontSize: 16, fontWeight: '600' }}>
              Cadastrar Dados
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient
      colors={["#fcee91", "#EF2A39"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <CustomHeader />
      <View style={styles.topContainer}>
        <Text style={styles.title}>{userData.name}</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputsWrapper}>
          <Input placeholder="Nome" value={userData.name} />
          <Input
            placeholder="CPF"
            value={userData.cpf}
            keyboardType="numeric"
          />
          <Input
            placeholder="Email"
            value={userData.email}
            keyboardType="email-address"
          />
          <Input placeholder="Mesa" value={userData.table} keyboardType="numeric" />
        </View>

        <TouchableOpacity 
          style={{
            backgroundColor: '#EF2A39',
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderRadius: 8,
            marginTop: 20,
            alignItems: 'center'
          }} 
          onPress={handleLogout}
        >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>
            Sair da Conta
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default UserDatas;

import Input from "@/src/components/Input";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";

import CustomHeader from "../CutomHeader";
import styles from "./styles";

const UserDatas = () => {
  return (
    <LinearGradient
      colors={["#fcee91", "#EF2A39"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <CustomHeader />
      <View style={styles.topContainer}>
        <Text style={styles.title}>João Silva</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputsWrapper}>
          <Input placeholder="Nome" value={"João Silva"} />
          <Input
            placeholder="CPF"
            value={"087-890-098-00"}
            keyboardType="numeric"
          />
          <Input
            placeholder="Email"
            value={"email@gmail.com"}
            keyboardType="email-address"
          />
          <Input placeholder="Mesa" value={"4"} keyboardType="numeric" />
        </View>
      </View>
    </LinearGradient>
  );
};

export default UserDatas;

import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
const Signup = () => {
  const [user_email, setUserEmail] = useState<string>("");
  const [password, SetPassword] = useState<string>("");

  const handleSubmit = () => {
    console.log({ user_email, password });
  };
  return (
    <View>
      <Text>Username:</Text>
      <TextInput value={user_email} onChangeText={setUserEmail} />

      <Text>Password:</Text>
      <TextInput value={password} onChangeText={SetPassword} />

      <TouchableOpacity onPress={handleSubmit}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;

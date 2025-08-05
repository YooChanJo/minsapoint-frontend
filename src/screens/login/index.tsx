import UserAPI from "@/src/api/user";
import { useAuth } from "@/src/components/auth-provider";
import LinkWrapper from "@/src/components/link-wrapper";
import { StackActions } from "@react-navigation/native";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

function LoginScreen() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { currentUser, userLoggedIn, accessToken } = useAuth();
  console.log(currentUser, userLoggedIn, accessToken);

  const OnLoginButtenPress = async () => {
    const result = await UserAPI.signUserIn(email, password);
    console.log(result);
  };

  const onLogOutButtenPress = async () => await UserAPI.signUserOut();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Login screen</Text>
      <View style={{ borderWidth: 1, padding: 20, margin: 10 }}>
        <Text style={{ textAlign: "center" }}>
          User Logged In: {String(userLoggedIn)}
        </Text>
        <Text>AccessToken: {accessToken}</Text>
      </View>
      <View style={{ borderWidth: 1, padding: 20, margin: 10, gap: 10 }}>
        <TextInput
          style={{ borderWidth: 1, padding: 5 }}
          onChangeText={setEmail}
          value={email}
          placeholder="Enter Email"
        />
        <TextInput
          style={{ borderWidth: 1, padding: 5 }}
          onChangeText={setPassword}
          value={password}
          placeholder="Enter Password"
          secureTextEntry={true}
        />
      </View>

      <Button onPress={OnLoginButtenPress} title="Login Button" />
      <Button onPress={onLogOutButtenPress} title="Log Out" />

      <View style={{ borderWidth: 1, padding: 20, margin: 10 }}>
        <LinkWrapper screen="Home" action={StackActions.popTo("Home")}>
          <Text style={{ color: "blue" }}>Go Back to Home</Text>
        </LinkWrapper>
      </View>
    </View>
  );
}

export default LoginScreen;

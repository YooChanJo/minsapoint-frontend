import UserAPI from "@/src/api/user";
import { useAuth } from "@/src/components/auth-provider";
import { Button, Text, View } from "react-native";

function LoginScreen() {
  const { currentUser, userLoggedIn, accessToken } = useAuth();
  console.log(currentUser, userLoggedIn, accessToken);

  const onDebugButtonPress = async () => {
    const result = await UserAPI.signUserIn(
      "jo.yoochani@gmail.com",
      "helloworld"
    );
    console.log(result);
  };

  const onLogOutButtenPress = async () => await UserAPI.signUserOut();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Login screen</Text>
      <View style={{ borderWidth: 1, padding: 20, margin: 10 }}>
        <Text>User Logged In: {String(userLoggedIn)}</Text>
        <Text>AccessToken: {accessToken}</Text>
      </View>

      <Button onPress={onDebugButtonPress} title="Debug Button" />
      <Button onPress={onLogOutButtenPress} title="Log Out" />
    </View>
  );
}

export default LoginScreen;

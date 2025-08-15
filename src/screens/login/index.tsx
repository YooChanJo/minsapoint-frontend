import PlatformAPI from "@/src/api/platform";
import UserAPI from "@/src/api/user";
import { useAuth } from "@/src/components/auth-provider";
import LinkWrapper from "@/src/components/link-wrapper";
import { StackActions } from "@react-navigation/native";
import { useState } from "react";
import { Button, ScrollView, Text, TextInput, View } from "react-native";

function LoginScreen() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [newPasswordCheck, setNewPasswordCheck] = useState<string>("");

  const { currentUser, userLoggedIn, accessToken } = useAuth();
  console.log(currentUser, userLoggedIn, accessToken);

  const OnLoginButtenPress = async () => {
    try {
      const result = await UserAPI.signUserIn(email, password);
      console.log(result);
      alert("success");
    } catch (e) {
      alert("Failed to sign in");
    }
  };

  const onPasswordChangeButtonPress = async () => {
    if (newPassword !== newPasswordCheck) {
      console.error("onPasswordChangePress error: Two Passwords do not match");
      alert("Two passwords do not match");
      return;
    }
    try {
      const result = await UserAPI.changeUserPassword(newPassword);
      console.log(result);
      alert("success");
    } catch (e) {
      alert("Failed to change password");
    }
  };

  const onLogOutButtenPress = async () => {
    try {
      await UserAPI.signUserOut();
      alert("success");
    } catch (e) {
      alert("Failed to sign out");
    }
  };

  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Login screen</Text>
        <View style={{ borderWidth: 1, padding: 20, margin: 10 }}>
          <Text style={{ textAlign: "center" }}>User Logged In: {String(userLoggedIn)}</Text>
          <Text>AccessToken: {accessToken}</Text>
        </View>
        <View style={{ borderWidth: 1, padding: 20, margin: 10, gap: 10 }}>
          <TextInput
            style={{ borderWidth: 1, padding: 5 }}
            onChangeText={setEmail}
            value={email}
            placeholder="Enter Email"
            onKeyPress={e => {
              if (PlatformAPI.getCurrentPlatform() === "web" && e.code == "Enter")
                OnLoginButtenPress();
            }}
          />
          <TextInput
            style={{ borderWidth: 1, padding: 5 }}
            onChangeText={setPassword}
            value={password}
            placeholder="Enter Password"
            secureTextEntry={true}
            onKeyPress={e => {
              if (PlatformAPI.getCurrentPlatform() === "web" && e.code == "Enter")
                OnLoginButtenPress();
            }}
          />
          <Button onPress={OnLoginButtenPress} title="Login Button" />
        </View>
        <View style={{ borderWidth: 1, padding: 20, margin: 10, gap: 10 }}>
          <TextInput
            style={{ borderWidth: 1, padding: 5 }}
            onChangeText={setNewPassword}
            value={newPassword}
            placeholder="New Password"
            secureTextEntry={true}
            onKeyPress={e => {
              if (PlatformAPI.getCurrentPlatform() === "web" && e.code == "Enter")
                onPasswordChangeButtonPress();
            }}
          />
          <TextInput
            style={{ borderWidth: 1, padding: 5 }}
            onChangeText={setNewPasswordCheck}
            value={newPasswordCheck}
            placeholder="New Password Check"
            secureTextEntry={true}
            onKeyPress={e => {
              if (PlatformAPI.getCurrentPlatform() === "web" && e.code == "Enter")
                onPasswordChangeButtonPress();
            }}
          />
          <Button onPress={onPasswordChangeButtonPress} title="Change Password" />
        </View>

        <Button onPress={onLogOutButtenPress} title="Log Out" />

        <View style={{ borderWidth: 1, padding: 20, margin: 10 }}>
          <LinkWrapper screen="Home" action={StackActions.popTo("Home")}>
            <Text style={{ color: "blue" }}>Go Back to Home</Text>
          </LinkWrapper>
        </View>
      </View>
    </ScrollView>
  );
}

export default LoginScreen;

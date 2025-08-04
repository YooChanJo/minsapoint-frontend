// import React from "react";
// import { VStack } from '../components/vstack';

// import { commonStyles } from "../constants/ThemeStyles";

import { useAuth } from '@/src/components/auth-provider';
import { Text, View } from 'react-native';

// import UserLoginButton from "@/api/components/UserLoginButton";

function LoginScreen() {
  const { currentUser, userLoggedIn, accessToken } = useAuth();
  console.log(currentUser, userLoggedIn, accessToken);

  return (
    <View>
      <Text>Login screen</Text>
    </View>
    //   <Center style={commonStyles.container}>
    //     <Heading
    //       style={{
    //         ...commonStyles.titleText,
    //         marginBottom: 4,
    //         marginTop: 140,
    //       }}
    //     >
    //       MinsaPoint
    //     </Heading>
    //     <Text style={{ ...commonStyles.subtitleText, marginBottom: 32 }}>
    //       LOGIN
    //     </Text>

    //     {/* <Box style={commonStyles.shadowBox}> */}
    //     {/* <VStack space="md"> */}
    //     {/* <Box>
    //           <Text style={[commonStyles.labelText, { marginBottom: 40 }]}>
    //             ID
    //           </Text>
    //           <Input style={commonStyles.input}>
    //             <InputField placeholder="Enter ID" />
    //           </Input>
    //         </Box>

    //         <Box>
    //           <Text style={[commonStyles.labelText, { marginBottom: 40 }]}>
    //             Password
    //           </Text>
    //           <Input style={commonStyles.input}>
    //             <InputField placeholder="Enter Password" secureTextEntry />
    //           </Input>
    //         </Box> */}

    //     <UserLoginButton style={[commonStyles.button, { marginTop: 16 }]}>
    //       <Text style={commonStyles.buttonText}>Sign In with Google</Text>
    //     </UserLoginButton>
    //     <Button
    //       onPress={() => {
    //         /* signUserOut(accessToken); */
    //       }}
    //       style={[commonStyles.button, { marginTop: 16 }]}
    //     >
    //       <Text style={commonStyles.buttonText}>Debug button: logout</Text>
    //     </Button>
    //     {/* </VStack> */}
    //     {/* </Box> */}
    //     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    //       <Text>Login Screen</Text>
    //       <View style={{ borderWidth: 1, padding: 20, margin: 10 }}>
    //         <LinkWrapper screen="Home" action={StackActions.popTo("Home")}>
    //           <Text style={{ color: "blue" }}>Go to Home</Text>
    //         </LinkWrapper>
    //       </View>
    //     </View>
    //   </Center>
  );
}

export default LoginScreen;

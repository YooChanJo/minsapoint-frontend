// import { Button, Center, Heading, Text } from "@gluestack-ui/themed";
// import React from "react";
// // import { VStack } from '../components/vstack';

// import { commonStyles } from "../constants/ThemeStyles";

// import { useAuth } from "@/api/contexts/authContext";

// import UserLoginButton from "@/api/components/UserLoginButton";

// const LoginScreen = () => {
//     const { currentUser, userLoggedIn, accessToken } = useAuth();
//     console.log(currentUser, userLoggedIn, accessToken);

//     return (
//         <Center style={commonStyles.container}>
//             <Heading
//                 style={{
//                     ...commonStyles.titleText,
//                     marginBottom: 4,
//                     marginTop: 140,
//                 }}
//             >
//                 MinsaPoint
//             </Heading>
//             <Text style={{ ...commonStyles.subtitleText, marginBottom: 32 }}>
//                 LOGIN
//             </Text>

//             {/* <Box style={commonStyles.shadowBox}> */}
//             {/* <VStack space="md"> */}
//             {/* <Box>
//             <Text style={[commonStyles.labelText, { marginBottom: 40 }]}>
//               ID
//             </Text>
//             <Input style={commonStyles.input}>
//               <InputField placeholder="Enter ID" />
//             </Input>
//           </Box>

//           <Box>
//             <Text style={[commonStyles.labelText, { marginBottom: 40 }]}>
//               Password
//             </Text>
//             <Input style={commonStyles.input}>
//               <InputField placeholder="Enter Password" secureTextEntry />
//             </Input>
//           </Box> */}

//             <UserLoginButton style={[commonStyles.button, { marginTop: 16 }]}>
//                 <Text style={commonStyles.buttonText}>Sign In with Google</Text>
//             </UserLoginButton>
//             <Button
//                 onPress={() => {
//                     /* signUserOut(accessToken); */
//                 }}
//                 style={[commonStyles.button, { marginTop: 16 }]}
//             >
//                 <Text style={commonStyles.buttonText}>
//                     Debug button: logout
//                 </Text>
//             </Button>
//             {/* </VStack> */}
//             {/* </Box> */}
//         </Center>
//     );
// };

// export default LoginScreen;

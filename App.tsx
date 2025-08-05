/* Vendors */
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text, View } from "react-native";

/* Configs */
import { AppLinking } from "./src/config/deep-linking";

/* APIs */
import PlatformAPI from "./src/api/platform";
import NavigationAPI from "./src/api/navigation";

/* Components */
import LinkWrapper from "./src/components/link-wrapper";

/* Screens */
import { AuthProvider, useAuth } from "./src/components/auth-provider";
import NotFoundScreen from "./src/screens/not-found";
import LoginScreen from "./src/screens/login";

function HomeScreen() {
  const { userLoggedIn } = useAuth();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome to Home Screen</Text>
      <View style={{ borderWidth: 1, padding: 20, margin: 10 }}>
        <Text style={{ textAlign: "center" }}>
          User Logged In: {String(userLoggedIn)}
        </Text>
      </View>
      <View style={{ borderWidth: 1, padding: 20, margin: 10 }}>
        <LinkWrapper screen="Login">
          <Text style={{ color: "blue" }}>Go to Login screen</Text>
        </LinkWrapper>
      </View>
      <View style={{ borderWidth: 1, padding: 20, margin: 10 }}>
        <LinkWrapper screen="PlatformCheck" params={{ myParam: "Hello World" }}>
          <Text style={{ color: "blue" }}>Go to PlatformCheck</Text>
        </LinkWrapper>
      </View>
    </View>
  );
}

function PlatformCheckScreen({ route }: { route: any }) {
  const { myParam } = route.params;

  NavigationAPI.useCompatibleEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(json => alert(JSON.stringify(json)));
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Your platform is: {PlatformAPI.getCurrentPlatform()}</Text>
      <Text>My param is: {myParam}</Text>
      <LinkWrapper screen="Home" action={StackActions.popTo("Home")}>
        <Text style={{ color: "blue" }}>Go Back to Home</Text>
      </LinkWrapper>
    </View>
  );
}

const Stack = createNativeStackNavigator();
function RootStack() {
  return (
    /* Debug screens */
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="PlatformCheck"
        component={PlatformCheckScreen}
        initialParams={{ myParam: "My Param" }}
      />

      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} />
    </Stack.Navigator>
  );
}

/* Manually toggling all of light mode, but would want to use both light & dark mode */
function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer
        linking={AppLinking}
        fallback={<Text>Loading...</Text>}
      >
        <AuthProvider>
          <RootStack />
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;

/* Debug App screen */
// function App() {
//   // NavigationAPI.useCompatibleEffect(() => {
//   //   fetch('https://jsonplaceholder.typicode.com/todos/1')
//   //     .then(response => response.json())
//   //     .then(json => console.log(json))
//   // }, []);
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Hello world</Text>
//     </View>
//   );
// }
/* 
  TODO for deployment
  Add new SHA-1 signing for google auth of firebase ---> deploy if we are going to use google login
*/

/* Stack Navigator only registers screens --> these are stacked */
/* 
  To add a screen unless it is same as current screen: navigation.navigate(SCREEN_NAME, {PARAMS})
  To add a screen regardless of current screen: navigation.push(SCREEN_NAME)
  go back: navigation.goBack()
  pop to: navigation.popTo(SCREEN_NAME)
  pop to top: navigation.popToTop()
  
  // Example
  <Stack.Navigator>
    {isLoggedIn ? (
      // Screens for logged in users
      <Stack.Group>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Group>
    ) : (
      // Auth screens
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Group>
    )}
      // Common modal screens
    <Stack.Group screenOptions={{ presentation: 'modal' }}>
      <Stack.Screen name="Help" component={Help} />
      <Stack.Screen name="Invite" component={Invite} />
    </Stack.Group>
  </Stack.Navigator>
*/
/* Navigation Ref for using navigation feature where useNavigation is not available */

// function Feed() {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Feed</Text>
//       <LinkWrapper screen="Messages" action={StackActions.popTo("Messages")}>
//         <Text>Go to Messages</Text>
//       </LinkWrapper>
//       <LinkWrapper screen="Home" action={StackActions.popTo("Home")}>
//         <Text>Go Back</Text>
//       </LinkWrapper>
//     </View>
//   );
// }

// function Messages() {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Messages</Text>
//       <LinkWrapper screen="Feed" action={StackActions.popTo("Feed")}>
//         <Text>Go to Feed</Text>
//       </LinkWrapper>
//       <LinkWrapper screen="Home" action={StackActions.popTo("Home")}>
//         <Text>Go Back</Text>
//       </LinkWrapper>
//     </View>
//   );
// }

// const Tab = createNativeStackNavigator();
// function MoreTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Feed" component={Feed} />
//       <Tab.Screen name="Messages" component={Messages} />
//     </Tab.Navigator>
//   );
// }

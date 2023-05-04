

// import React, {useState, useEffect} from 'react';
// import {StripeProvider} from '@stripe/stripe-react-native';

// import {StyleSheet, Button, View, Text} from 'react-native';
// import {useStripe} from '@stripe/stripe-react-native';

// const App = () => {
//   const API_URL = 'http://localhost:8000';
//   const {initPaymentSheet, presentPaymentSheet} = useStripe();
//   const [loading, setLoading] = useState(false);

//   const fetchPaymentSheetParams = async () => {
//     const response = await fetch(`${API_URL}/create-payment-intent`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//         console.log("=========123444444",response)
//     const {clientSecret, customer} = await response.json();

//     return {
//       clientSecret,
//       customer,
//     };
//   };
//   const initializePaymentSheet = async () => {
//     const {clientSecret, customer} = await fetchPaymentSheetParams();

//     const {error} = await initPaymentSheet({
//       customerId: customer,
//       paymentIntentClientSecret: clientSecret,
//       merchantDisplayName: 'Merchant Name',
//     });
//     if (!error) {
//       setLoading(true);
//     }
//   };
//   const openPaymentSheet = async () => {
//     const {error} = await presentPaymentSheet();
//     if (error) {
//       console.log(`Error code: ${error.code}`, error.message);
//     } else {
//       console.log('Success', 'Your order is confirmed!');
//     }
//   };
//   useEffect(() => {
//     initializePaymentSheet();
//   }, []);

//   return (
//     <StripeProvider publishableKey="pk_test_51MvGhOSECuCbmaL04sAagvSh6bknn5RtjiRb2YVlRyI69yoiZzoY1xbxHQNmobOC9bp8Mkd555dWu5i15QdFLAzi00aR5tshaU">
//       <View style={styles.container}>
//         {!loading ? (
//           <Text style={{color: 'black'}}>Loading...</Text>
//         ) : (
//           <Button
//             style={styles.button}
//             disabled={!loading}
//             title="Checkout"
//             color="#841584"
//             onPress={openPaymentSheet}
//           />
//         )}
//       </View>
//     </StripeProvider>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     marginHorizontal: 100,
//     marginVertical: 100,
//   },
//   button: {
//     backgroundColor: '#00aeef',
//     borderColor: 'red',
//     borderWidth: 5,
//     borderRadius: 15,
//   },
// });

// export default App;




// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
// } from 'react-native';
// import { StripeProvider } from '@stripe/stripe-react-native';
// import PaymentScreen from "./src/screens/paymentScreen";
// const App = ()  => {
//   const publishableKey = "pk_test_51MvGhOSECuCbmaL04sAagvSh6bknn5RtjiRb2YVlRyI69yoiZzoY1xbxHQNmobOC9bp8Mkd555dWu5i15QdFLAzi00aR5tshaU";
//   return (
//     <StripeProvider
//       publishableKey={publishableKey}
//     >
//       <PaymentScreen />
//     </StripeProvider>
//   );
// };
// const styles = StyleSheet.create({
// });
// export default App;



import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Chat from './src/screens/Chat';
import Splash from './src/screens/Splash';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer  >
      <Stack.Navigator screenOptions={{
        // headerShown:false
      }}>
        <Stack.Screen name='Splash' component={Splash} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Chat' component={Chat}
//  options={{
//   title: 'Chat',
//   headerStyle: {
//     backgroundColor: 'blue',
//   }
// }}
       />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// import React, { useEffect } from 'react';
// import {

//   StatusBar,
// } from 'react-native';
// import Screens from './src/screens/Screen';

// const App=()=> {

//   useEffect(()=>{
//     StatusBar.setHidden(true);

//   },[])

//     return (
//       <Screens />
//     );

// }

// export default App;

// import * as React from 'react';
// import { Text } from 'react-native';
// import { PersistGate } from 'redux-persist/integration/react'
// import MyTodo from './src/screens/Todo';

// import {store, persistor} from './src/redux/store';
// import { Provider } from 'react-redux';

// const App = () => {
//   return (
//     <Provider store={store}>
//     <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
//       <MyTodo/>
//     </PersistGate>
//     </Provider>
//   );
// }

// export default App;

// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import Button from './src/screens/Callbutton';
// import GettingCall from './src/screens/GettingCall';
// import Video from './src/screens/Video';
// import { MediaStream } from 'react-native-webrtc';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/* <Button  iconName="video-camera" backgroundColor="grey"/> */}
//       {/* <GettingCall />z */}
//       <Video/>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
// container:{
//   justifyContent:'center',
//   alignItems:'center',
//   flex:1
// }

// });

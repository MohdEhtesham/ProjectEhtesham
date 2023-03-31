// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack'
// import { NavigationContainer } from '@react-navigation/native';
// import Login from './src/screens/Login';
// import Register from './src/screens/Register';
// import Chat from './src/screens/Chat';
// import Splash from './src/screens/Splash';


// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer  >
//       <Stack.Navigator screenOptions={{
//         headerShown:false
//       }}>
//         <Stack.Screen name='Splash' component={Splash} />
//         <Stack.Screen name='Login' component={Login} />
//         <Stack.Screen name='Register' component={Register} />
//         <Stack.Screen name='Chat' component={Chat} 
// //  options={{
// //   title: 'Chat',
// //   headerStyle: {
// //     backgroundColor: 'blue',
// //   }
// // }}
//        />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;



import React, { useEffect } from 'react';
import {

  StatusBar,  
} from 'react-native';
import Screens from './src/screens/Screen';

const App=()=> {

  useEffect(()=>{
    StatusBar.setHidden(true);

  },[])

 
    return (
      <Screens />
    );
  
}

export default App;



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
// install react-navigation

//TODO: import four screens
import HomeScreen from "./screens/HomeScreen";
import AddNewContact from "./screens/AddNewContact";
import ViewContact from "./screens/ViewContact";
import EditContact from "./screens/EditContact";

//TODO: import firebase
import * as firebase from "firebase";

// set up react navigation
import { createStackNavigator, createAppContainer } from "react-navigation";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Add: { screen: AddNewContact },
    View: { screen: ViewContact },
    Edit: { screen: EditContact }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#B83227"
      },
      headerTitleStyle: {
        color: "#fff"
      }
    }
  }
);

const App = createAppContainer(MainNavigator);

//TODO: Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyCWhgSjmGhvtRn9FWEqA_Kekam5DKGn3tI",
  authDomain: "login2-26d36.firebaseapp.com",
  databaseURL: "https://login2-26d36.firebaseio.com",
  projectId: "login2-26d36",
  storageBucket: "login2-26d36.appspot.com",
  messagingSenderId: "571221154709",
  appId: "1:571221154709:web:8b0b225029b61a10"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


//FirebaseTODO create firebase real-time database with rules

// {
//   "rules": {
//     ".read": true,
//     ".write": true
//   }
// }
export default App;

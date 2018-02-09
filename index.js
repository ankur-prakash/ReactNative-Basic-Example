// Import React and React native
import React from 'react'; // define component behaviour and manage them together
import {Text, AppRegistry} from 'react-native'; // destructed imports
// React native basically takes output of react and render on device.
// import header.js you need to have path
import Header from "./src/components/header";

//Create component - by calling function & store in App object

const App = () => {
return (
  <Header headerText="BasicExample" /> // self enclosing if you donot want any work here
);
};

// Register app component
AppRegistry.registerComponent('BasicExample',() => App);

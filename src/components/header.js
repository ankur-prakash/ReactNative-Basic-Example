import React from 'react';
import {Text, View} from 'react-native';

//creating component using function

const Header = (props) => {

return (
  <View style = {Styles.container}>
  <Text style = {Styles.textEntry}>{props.headerText}</Text>
  </View>
);
};

//creating style object
const Styles = {
  textEntry:{
    fontSize:20
  },
  container:{
    backgroundColor:'#F8F8F8',
    justifyContent:'center', //vertical
    alignItems:'center', //horzontal
    height:60,
    paddingTop:15,
    elevation:2,
    shadowOpacity:0.2,
    shadowOffset:{width:0, height:2},
    shadowColor:'#000'

  },
};

//export default allows to use components in other modules
export default Header;

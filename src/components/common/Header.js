//import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// make component
const Header = (props) => { //props object comes from parent object (comes from index.js)
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center', //vertical alignment
    alignItems: 'center', //horizontal alignment
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.3,
    elevation: 5, //needed for Android
    position: 'relative'
  }
};

// make the component available to other parts of the app
export {Header};

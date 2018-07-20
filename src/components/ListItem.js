import React, {Component} from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import {connect} from 'react-redux';
import {CardSection } from './common';
import * as actions from '../actions'; //import everything from index.js from actions folder

class ListItem extends Component {
  componentWillUpdate(){ //lifecycle methods are called automatically- no need to call it :) 
    LayoutAnimation.spring();
  }

  renderDescription(){
    const {library,expanded} = this.props;

    if (expanded){
      return (
        <CardSection>
          <Text style={{flex:1, paddingLeft: 15}}>
            {library.item.description}
          </Text>
        </CardSection>
      );
    }
  }
  render(){
    const { titleStyle } = styles;
    const { id, title} = this.props.library.item;


    return (
      <TouchableWithoutFeedback
        onPress = {()=>this.props.selectedLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle:{
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) =>{

  const expanded = state.selectedLibraryId === ownProps.library.item.id;
  return { expanded };
}

export default connect(mapStateToProps, actions)(ListItem);

//first argument is for mapStateToProps, passing null because we're not doing that here
// essentially, this say:
// take the action creators (actions) and whenever they are called the actions go to the right place then pass the actions into the component as props

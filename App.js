import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  ScrollView,
  Button,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import { TabNavigator } from "react-navigation";
import {
  Actions,
  Router,
  Scene,
} from 'react-native-router-flux';

import MessagesData from './src/Data/messages.json';

class Subscriptions extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.title}>Subscriptions</Text>
        </View>
        <ScrollView style={styles.subscriptions}>
          <Subscription />
          <Subscription />
          <Subscription />
          <Subscription />
          <Subscription />
          <Subscription />
          <Subscription />
          <Subscription />
        </ScrollView>
      </View>
    );
  }
}

class Subscription extends React.Component {
  render() {
    return (
      <View>
      <TouchableOpacity>
        <View style={styles.container}>
          <Image style={styles.subLogo} source={this.props.source}/>
        </View>
      </TouchableOpacity>
      </View>
    );
  }
}

class Info extends React.Component {
  render() {
    return (
      <View style={styles.info}>
        <Text>Save 20% off anything in the store in the month of July, 2017 with offer code XYCABC123. Reply STOP to stop</Text>
      </View>
    )
  }
}

class Chat extends React.Component {
  state = {
    messages: MessagesData
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello there!',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
      ],
    });
  }
  onSend(messages = []) {
  this.setState((previousState) => ({
    messages: GiftedChat.append(previousState.messages, messages),
  }));
}

  render() {
    return(
      <GiftedChat
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
      />
    );
  }
}



class Offers extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.title}>Offers</Text>
        </View>
        <ScrollView style={styles.margintop}>
          <Offer source={require('./images/bbb.png')} text="Save 20% off anything in the store in the month of July, 2017 with offer code XYCABC123. Reply STOP to stop"/>
          <Offer source={require('./images/shoecarnival.png')} text="Save 20% off anything in the store in the month of July, 2017 with offer code XYCABC123. Reply STOP to stop"/>
          <Offer source={require('./images/cvs.png')} text="Text SAVE5 to 42767 for $5 CVS ExtraBucks & Save on Exclusive Online Deals" />
          <Offer  source={require('./images/kohls.png')} text="Extra 20% Off Select Juniors, young men's and kids clothing, shoes, juniors accessories and character backpacks with code SCHOOL20"/>
          <Offer source={require('./images/uber-eats.jpg')} text="Text SARAM24170UE for $10 off first meal order for new users"/>
          <Offer source={require('./images/macys.png')} text="Text WKND for 20% Off Super Weekend & Semi Annual Home Sale + Free Shipping on $49"/>
          <Offer source={require('./images/JCPenney_logo.png')} text="Text BUYNOW37 for an extra 30% off at Black Friday in July"/>
          <Offer source={require('./images/lyft.png')} text="Text NEWUSER10 for a $10 Total Ride Credit"/>
          <Offer source={require('./images/walgreens.png')} text="Text ALLPIC for 30% Off Everything Photo + Same Day Pickup"/>
          <Offer />
        </ScrollView>
      </View>
    );
  }
}

class Offer extends React.Component {
  render() {
    return (
      <TouchableOpacity>
        <View style={styles.container}>
          <Image style={styles.subLogo} source={this.props.source}/>
          <Text style={styles.content}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>

    );
  }
}

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    backgroundColor: '#001C55',
    width: '100%',
    height: 60,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
    padding: 15,
  },
  container: {
    display:'flex',
    height:90,
    width:'90%',
    borderRadius: 5,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginLeft:20,
    marginRight:20,
    marginTop:10,
    shadowOffset:{  width: 5,  height: 5,  },
    shadowColor: 'grey',
    shadowOpacity: .5,
  },
  content: {
    width:150,
    fontSize:12,
  },
  input: {
    marginLeft:215,
    height: 30,
    width: '40%',
    borderRadius:50,
    backgroundColor: 'lightgrey',
    marginTop: 500,
    padding:10,
  },
  subLogo: {
    flex:1,
    justifyContent: 'center',
    resizeMode: 'contain',
    height: 75,
  },
  info: {
    marginBottom: 25,
    marginRight: 25,
    marginLeft: 25,
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
    padding:5,
  },
  down: {
    width: 25,
    height: 25,
    marginLeft: 175,
    marginTop: 10,
  },
  hamburger: {
    width: 20,
    height: 20,
  },
})

const TextSubscriberApp = TabNavigator({
  Subscriptions: { screen: Subscriptions },
  Messages: { screen: Chat },
  Offers: { screen: Offers },
});

AppRegistry.registerComponent('TextSubscriberApp', () => TextSubscriberApp);

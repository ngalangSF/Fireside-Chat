import React, { Component } from 'react';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';
import './App.css';

var config = {
  apiKey: "AIzaSyBLDsrWJCDv_nvvUEwYKWaXHsF-IIv29lM",
  authDomain: "bloc-chat-react-dd055.firebaseapp.com",
  databaseURL: "https://bloc-chat-react-dd055.firebaseio.com",
  projectId: "bloc-chat-react-dd055",
  storageBucket: "bloc-chat-react-dd055.appspot.com",
  messagingSenderId: "310991137695"
};
firebase.initializeApp(config);


class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        user: '',
        activeRoom: '',
        messageId: ''
      }
      this.setActiveRoom = this.setActiveRoom.bind(this);
      this.setMessage = this.setMessage.bind(this);
      this.setUser = this.setUser.bind(this);
    }

    setMessage(message) {
      this.setState({ messageId: message })
    }


    setActiveRoom(room) {
      this.setState({ activeRoom: room })
    }

    setUser(user) {

      this.setState({ user: user })

    }

  render() {
    return (
      <div className="App">
        <h1 className="chat-header">Fireside Chat </h1>
        <User
         firebase={ firebase }
         user={this.state.user}
         setUser={(user) => this.setUser(user)}
         />
        <RoomList
          firebase={ firebase }
          setActiveRoom={ this.setActiveRoom }
          activeRoom={ this.state.activeRoom}
          />
        <MessageList
          firebase={ firebase }
          activeRoom={this.state.activeRoom}
          setActiveRoom={this.setActiveRoom}
          messageId={this.setMessage}
          user={ this.state.user }
          />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Fab
} from "native-base";
import EventComponent from "../EventComponent";

export class HomeScreen extends Component {
constructor(props) {
   super(props);
   this.state = {
       events: [],
       currentUserInfo: Object
   }  
}
  componentDidMount() {
    console.log("hehexd",this.props.navigation.state.params.currentUserInfo);
     fetch('http://172.20.10.11:3000/event',{
      method: 'GET',
     })
    .then(response => response.json())
    .then((response) => {
      console.log(response);
      this.setState({
        events: response
      })
      return response;
    })
    .catch((error) => {
      console.error(error);
    });
  }

  renderButtons() {
    return this.state.events.map((item) => {
        return (
           
            <EventComponent
            key = {item.id}
            username={item.event_name}     
            comments= {item.event_comment}       
            imageSource="1"
            likes="101"
            profileSource="1"
            comments="5"
            time="6"
          />
        );
    });
}
newEvent() {
  this.props.navigation.navigate("Event");
}
  render() {
    return (
      <Container style={styles.container}>

        <Content>
        <EventComponent
           
           username= "Test Username"     
           comments= "Comment Şelalesi"       
           imageSource="2"
           likes="101"
           profileSource="1"
           comments="5"
           time="6"
         />
         <EventComponent
           
           username= "Test Username"     
           comments= "Comment Şelalesi"       
           imageSource="3"
           likes="101"
           profileSource="1"
           comments="5"
           time="6"
         />
        {
          
                this.renderButtons()
            }
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => {this.newEvent()}}>
            <Icon name="add" />
          </Fab>
        </Content>
        <Footer>
          <FooterTab>
            <Button
              onPress={() => this.props.navigation.navigate("Home")}
              active
            >
              <Icon name="home" />
              <Text style={styles.barText}> Home</Text>
            </Button>
            <Button onPress={() => this.props.navigation.navigate("Profile",{ currentUserInfo: this.state.currentUserInfo })}>
              <Icon name="person" />
              <Text style={styles.barText}> Profile</Text>
            </Button>
            <Button>
              <Icon name="close-circle" />
              <Text style={styles.barText}> Exit</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bde5eb"
  },
  barText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold"
  }
});


import React from "react";
import { View, Text, StyleSheet, ImageBackground,TextInput, Button } from "react-native";

export class EventScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      event_comment: '',
      event_name: '',
      vote: 1,
      description: '',
      map_id: 1,
    };
  }
  createNewEvent() {
    fetch('http://192.168.1.41:3000/event',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({
        event_comment: this.state.event_comment,
        event_name: this.state.event_name,
        vote: this.state.vote,
        description: this.state.description,
        map_id: this.state.map_id,
      }),
     })
    .then(response => response.json())
    .then((response) => {
        this.props.navigation.navigate('Home');
    })
    .catch((error) => {
      console.log('Event couldnt created');
      console.error(error);
    });
    
  }
  

  render() {
    return (
        <View>
            <Text>
                Create Your Event
            </Text>
            <TextInput
              style={{  height: 40,width: 300,borderColor: 'white', borderWidth: 1 }}
              onChangeText={event_name => this.setState({ event_name })}
              placeholder = "Event Name"
              value={this.state.event_name}
            />
             <TextInput
              style={{  height: 40,width: 300,borderColor: 'white', borderWidth: 1 }}
              onChangeText={vote => this.setState({ vote })}
              placeholder = "Vote"
              value={this.state.vote}
            />
             <TextInput
              style={{  height: 40,width: 300,borderColor: 'white', borderWidth: 1 }}
              onChangeText={description => this.setState({ description })}
              placeholder = "Description"
              value={this.state.description}
            />
             <TextInput
              style={{  height: 40,width: 300,borderColor: 'white', borderWidth: 1 }}
              onChangeText={map_id => this.setState({ map_id })}
              placeholder = "Map Id"
              value={this.state.map_id}
            />
             <TextInput
              style={{  height: 40,width: 300,borderColor: 'white', borderWidth: 1 }}
              onChangeText={event_comment => this.setState({ event_comment })}
              placeholder = "Event Comment"
              value={this.state.event_comment}
            />
             <Button
            full
            bordered
            light
            title = "Create"
            onPress={() => this.createNewEvent()}
          >
          </Button>
            
        </View>
    );
  }
}

const styles = StyleSheet.create({

});



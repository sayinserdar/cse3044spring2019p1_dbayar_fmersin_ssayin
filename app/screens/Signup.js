
import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { Container, Content, Item, Label, Input, DatePicker, Picker, Form, Icon } from "native-base";

export class SignupScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
    this.pick = {
      selected: undefined
    };
  }

  onValueChange(value) {
    this.setState({
      selected: value
    });
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  render() {
    return (
      <Container style={styles.container}>
       <Content>
         <Text style={styles.baseText}> Name</Text>
           <Item full rounded inlineLabel style={styles.item}>
             <Input />
           </Item>
         <Text style={styles.baseText}>Choose your user name</Text>
         <Item full rounded inlineLabel style={styles.item}>
             <Input />
           </Item>
         <Text style={styles.baseText}>Create a password</Text>
         <Item full rounded inlineLabel style={styles.item}>
             <Input />
           </Item>
         <Text style={styles.baseText}>Confirm a password</Text>
         <Item full rounded inlineLabel style={styles.item}>
             <Input />
           </Item>
         <Text style={styles.baseText}>Birthday</Text>
         <DatePicker
            defaultDate={new Date(2018, 4, 4)}
            minimumDate={new Date(1945, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            textStyle={{ color: "black", fontWeight: 'bold', alignSelf: 'center' }}
            placeHolderTextStyle={{ color: "#d3d3d3", alignSelf: 'center'}}
            onDateChange={this.setDate}
            disabled={false}
            />
            <Text style={{ color: "black", fontWeight: 'bold', alignSelf: 'center' }}>
              Date: {this.state.chosenDate.toString().substr(4, 12)}
            </Text>
         <Text style={styles.baseText}>Gender</Text>
         <Form>
           <Picker
              mode="dropdown"
              placeholder="Select your gender"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Select your gender"
              textStyle={{ color: "#ffffff", fontWeight: 'bold', alignSelf: 'center' }}
              itemStyle={{
                backgroundColor: "#ffffff",
                marginLeft: 10,
                paddingLeft: 10
              }}
              itemTextStyle={{ color: '#788ad2' }}
              style={{ width: '80%', alignSelf: 'center' }}
              selectedValue={this.pick.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Woman" value="key0" />
              <Picker.Item label="Man" value="key1" />
            </Picker>
          </Form>

         <Text style={styles.baseText}>Mobile Phone</Text>
         <Item full rounded inlineLabel style={styles.item}>
             <Input />
           </Item>
         <Text style={styles.baseText}>Email Address</Text>
         <Item full rounded inlineLabel style={styles.item}>
             <Input />
           </Item>
       </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
     flex:1,
     backgroundColor: '#0a5449',
     justifyContent: 'center',
  },
  baseText: {
    fontFamily: 'sans-serif',
    color:"white",
    fontSize: 15,
    marginLeft: 35,
    marginBottom: 3,
  },
  item: {
    borderRadius: 5,
    width: '80%', 
    height: '5%',
    alignSelf: 'center',
    marginBottom: 10,
  },
  placeButton: {
    alignSelf: 'center',
    borderRadius: 5, 
    width: '95%', 
    marginBottom:10,
    marginTop: 10,
  },
});



import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";

import { Container, Content, Footer, FooterTab, Button, Icon } from 'native-base'
import EventComponent from '../EventComponent'


export class HomeScreen extends Component {

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <EventComponent username="dilarabayar" imageSource="1" likes="101" profileSource="1" comments="5" time="6"/>
                    <EventComponent username="serdarsayın" imageSource="2" likes="201" profileSource="2" comments="6"  time="2" />
                    <EventComponent username="firdevsmersin" imageSource="3" likes="301" profileSource="3" comments="10"  time="1"/>
                </Content>
            <Footer>
              <FooterTab>
                <Button onPress={() => this.props.navigation.navigate('Home')}  active >
                  <Icon name="home" />
                  <Text style={styles.barText}> Home</Text>
                </Button>
                <Button onPress={() => this.props.navigation.navigate('Profile')}>
                  <Icon  name="person" />
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
        backgroundColor: '#bde5eb'
    },
    barText: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
    }
});
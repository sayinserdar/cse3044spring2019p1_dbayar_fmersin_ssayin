import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";

import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'

class EventComponent extends Component {

    render() {

        const images = {

            "1": require('../assets/photo1.jpg'),
            "2": require('../assets/photo2.jpg'),
            "3": require('../assets/photo3.jpeg')
        }

        const profilepics = {

            "1": require('../assets/photo1.jpg'),
            "2": require('../assets/photo2.jpg'),
            "3": require('../assets/photo3.jpeg')
        }

        return (
            <Card>
                <CardItem>
                <Left>
                  <Thumbnail source={profilepics[this.props.profileSource]} />
                  <Body>
                      <TouchableOpacity transparent>
                      <Text>{this.props.username}</Text>
                      </TouchableOpacity>
                      <Text note>Jan 15, 2018</Text>
                    </Body>
                </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={images[this.props.imageSource]} style={{ height: 200, width: null, flex: 1 }} />
                </CardItem>
                <CardItem>
                  <Left>
                     <Icon active name="thumbs-up" style={{ color: 'black' }} />
                     <Text style={styles.baseText}>{this.props.likes} </Text>
                     <Text style={styles.baseText}>likes</Text>
                   </Left>
                  <Body style={{flexDirection: 'row'}}>
                      <Button transparent>
                         <Icon active name="chatbubbles" style={{ color: 'black' }} />
                         <Text style={styles.baseText}>{this.props.comments} </Text>
                         <Text style={styles.baseText}>comments</Text>
                      </Button>
                   </Body>
                   <Right>
                      <Text style={styles.baseText}>{this.props.time}
                      <Text style={styles.baseText}>h ago</Text>
                      </Text>
                   </Right> 
                </CardItem>
                <CardItem>
                    <Left>
                       <Text style={{ fontWeight: "900" }}>{this.props.username}</Text>
                       <Text style={{marginLeft:10}}>Hi fellas!</Text>
                    </Left>
                </CardItem>
            </Card>
        );
    }
}
export default EventComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    baseText: {
        marginLeft: 5,
        fontFamily: 'sans-serif',
        fontSize: 15, 
    },
});
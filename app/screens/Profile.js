import React from "react";
import { ImageBackground,  View, Text, StyleSheet} from "react-native";
import { Container, Content, Card, CardItem, Thumbnail, Button, Icon, Item, Footer, FooterTab} from 'native-base';

export class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
   
  }
  componentDidMount() {
    console.log("hehexd",this.props.navigation.state.params.currentUserInfo);
    
  }
  render() {


    return (
      <Container>
         <ImageBackground source={require('../../assets/profilebackground.png')} style={styles.container}>
           <Content>
               <View style={{alignSelf: 'center', marginTop: 50}}>
               <Thumbnail style={{width: 100, height: 100, borderRadius: 100/2}} source={require('../../assets/photo1.jpg')} />
               <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>dilarabayar</Text>
               </View>
               <View style={{alignSelf: 'center', marginTop:100, width: '75%', height: '80%'}}>
                 <Text style={styles.topText}> Name</Text>
                 <View style={{borderBottomColor: '#7d7171', borderBottomWidth: 1,}}/>
                 <Text style={styles.baseText}>Dilara</Text>
                
                 <Text style={styles.topText}>Surname</Text>
                 <View style={{borderBottomColor: '#7d7171', borderBottomWidth: 1,}}/>
                 <Text style={styles.baseText}>Bayar</Text>

                 <Text style={styles.topText}>Birthday</Text>
                 <View style={{borderBottomColor: '#7d7171', borderBottomWidth: 1,}}/>
                 <Text style={styles.baseText}>01.01.1996</Text>

                 <Text style={styles.topText}>Mobile Phone</Text>
                 <View style={{borderBottomColor: '#7d7171', borderBottomWidth: 1,}}/>
                 <Text style={styles.baseText}>05347669701</Text>

                 <Text style={styles.topText}>Email Address</Text>
                 <View style={{borderBottomColor: '#7d7171', borderBottomWidth: 1,}}/>
                 <Text style={styles.baseText}>dilara.bayar55@gmail.com</Text>
               </View>
           </Content>
         <Footer>
          <FooterTab>
               <Button onPress={() => this.props.navigation.navigate('Home')}>
                  <Icon name="home" />
                  <Text style={styles.barText}> Home</Text>
                </Button>
                <Button onPress={() => this.props.navigation.navigate('Profile')} active>
                  <Icon  name="person" />
                  <Text style={styles.barText}> Profile</Text>
                </Button>
                <Button>
                  <Icon name="close-circle" />
                  <Text style={styles.barText}> Exit</Text>
                </Button>
          </FooterTab>
        </Footer>
        </ImageBackground>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0a5449'
    },
  barText: {
      color: 'white',
      fontSize: 10,
      fontWeight: 'bold',
      
  },
  baseText: {
    // fontFamily: 'sans-serif',
    fontSize: 15,
    color: '#7d7171',
    fontWeight: 'bold',
    marginBottom: 10
  },
  topText: {
    // fontFamily: 'sans-serif',
    fontSize: 15,
    color: '#7d7171',
    fontWeight: 'bold',
  },
  
});
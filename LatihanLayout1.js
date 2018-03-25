import React from 'react';
import {
  //AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class LatihanLayout1 extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
        <View style={styles.box1}>
          <Text style={styles.text1}>Pendidikan Teknik Informatika</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.text3}>SLIDER</Text>
        </View>
        <View style={styles.box3}>
          <View style={styles.box31}>
              <View style={styles.box5}>
              <Text style={styles.text2}>1</Text>
              </View>
              <View style={styles.box5}>
              <Text style={styles.text2}>2</Text>
              </View>
              <View style={styles.box5}>
              <Text style={styles.text2}>3</Text>
              </View>
          </View>
          <View style={styles.box31}>
              <View style={styles.box5}>
              <Text style={styles.text2}>1</Text>
              </View>
              <View style={styles.box5}>
              <Text style={styles.text2}>2</Text>
              </View>
              <View style={styles.box5}>
              <Text style={styles.text2}>3</Text>
              </View>
          </View>
          <View style={styles.box31}>
              <View style={styles.box5}>
              <Text style={styles.text2}>1</Text>
              </View>
              <View style={styles.box5}>
              <Text style={styles.text2}>2</Text>
              </View>
              <View style={styles.box5}>
              <Text style={styles.text2}>3</Text>
              </View>
          </View>
        </View>
        <View style={styles.box4}>
          <Text style={styles.text1}>#JaenKuliahDiPTI</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#FFAB40',
    flex: 1,
    flexDirection: 'column'

  },
  box1: {
    flex: 1,
    backgroundColor: '#E65100',
    alignItems: 'center',
    justifyContent: 'center'
  },
  box2: {
    flex: 2,
    backgroundColor: '#FFC107',
    alignItems: 'center',
    justifyContent: 'center'
  },
  box3: {
    flex: 4,
    backgroundColor: '#FFFF00',
    justifyContent: 'space-around',
    margin: 4
  },
  box31: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFF00',
    justifyContent: 'space-around'
  },
  box4: {
    flex: 1,
    backgroundColor: '#E65100',
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box5: {
    flex: 1,
    backgroundColor: '#FFD54F',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8
  },
  text1: {
    fontSize: 20,
    color: 'white'
  },
  text2: {
    fontSize: 25,
    color: '#E65100'
  },
  text3: {
    fontSize: 30,
    color: 'black'
  },
});

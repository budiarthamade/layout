import React from 'react';
import {
  StyleSheet,
  Text,
  View
 } from 'react-native';
//import LayoutDasar from './SRC/Latihan/LayoutDasar';
import LatihanLayout1 from './SRC/Latihan/LatihanLayout1';
//import LatihanLayout2 from './SRC/Latihan/LatihanLayout2';

export default class App extends React.Component {

  render() {
    return (
      //<LayoutDasar />
      <LatihanLayout1 />
      //<LatihanLayout2 />
    );
  }
}

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/dist/Ionicons';

import PropsTypes from 'prop-types';

// export default class Weather extends Component {
//   render() {
//     return (
//       <LinearGradient colors={['#00C6FB', '#005BEA']} style={styles.container}>
//         <View style={styles.upper}>
//           <Icon color="white" size={144} name="rainy" />
//           <Text>Icon here!</Text>
//           <Text style={styles.temp}>35℉</Text>
//         </View>
//         <View style={styles.lower}>
//           <Text style={styles.title}>Raining like a MF</Text>
//           <Text style={styles.subtitle}>For more info look outside</Text>
//         </View>
//       </LinearGradient>
//     );
//   }
// }

const weatherCases = {
  Rain: {
    colors: ['#006C6Fb', '#005BEA'],
    title: 'Raining like a MF',
    subtitle: 'For more info look outside',
    icon: 'rainy',
  },
  Clear: {
    colors: ['#FEE253', '#FF7300'],
    title: 'Sunny as fuck',
    subtitle: 'Go get your ass burnt',
    icon: 'sunny',
  },
  Thunderstorm: {
    colors: ['#00ECBC', '#007ADF'],
    title: 'Thunderstorm in the house',
    subtitle: 'Actually, outside of the house',
    icon: 'thunderstorm',
  },
  Clouds: {
    colors: ['#D7D2CC', '#304352'],
    title: 'Clouds',
    subtitle: 'I know, fucking boring',
    icon: 'cloud',
  },
  Snow: {
    colors: ['#7DE2FC', '#89B6E5'],
    title: 'Cold as balls',
    subtitle: 'Do you want to build a snowman? Fuck no.',
    icon: 'snow',
  },
  Drizzle: {
    colors: ['#89F7FE', '#66A6FF'],
    title: 'Drizzle',
    subtitle: 'Is like rain, but gay',
    icon: 'rainy-outline',
  },
  Haze: {
    colors: ['#89F7FE', '#66A6FF'],
    title: 'Haze',
    subtitle: 'I like Haze !!',
    icon: 'cloudy-outline',
  },
  Mist: {
    colors: ['#D7D2CC', '#304352'],
    title: 'Mist',
    subtitle: 'I have no idea what is defferent between Haze and Mist',
    icon: 'md-cloudy-sharp',
  },
};

export default function Weather({temp, weatherName}) {
  return (
    <LinearGradient
      colors={weatherCases[weatherName].colors}
      style={styles.container}>
      <View style={styles.upper}>
        <Icon color="white" size={144} name={weatherCases[weatherName].icon} />
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.subtitle}>
          {weatherCases[weatherName].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropsTypes.number.isRequired,
  weatherName: PropsTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp: {
    fontSize: 48,
    color: 'white',
    marginTop: 10,
  },
  lower: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
  },
  title: {
    fontSize: 38,
    color: 'white',
    marginBottom: 10,
    fontWeight: '300',
  },
  subtitle: {
    fontSize: 24,
    color: 'white',
    marginBottom: 24,
  },
});

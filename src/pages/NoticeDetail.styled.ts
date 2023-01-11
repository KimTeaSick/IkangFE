import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
  },
  detail: {
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#3f3d56',
  },
  nameAndRegDate: {
    display: 'flex',
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 15,
    color: '#000',
  },
  regDate: {
    fontSize: 15,
    color: '#7F7F7F',
  },
  content: {
    fontSize: 16,
    color: '#5E5E5E',
  },
  img: {
    height: 300,
  },
  arrow: {
    position: 'absolute',
    top: 0,
  },
  iosArrow: {
    position: 'absolute',
    top: 10,
  },
});

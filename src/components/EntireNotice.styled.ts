import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  notice: {
    alignItems: 'center',
    padding: '5%',
  },
  contents: {
    width: '100%',
    height: 120,
    padding: 10,
    display: 'flex',
    borderRadius: 20,
    marginVertical: 10,
    flexDirection: 'column',
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  noticeImage: {
    height: 100,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#f9a826',
  },
  Title: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#3f3d56',
  },
  Content: {
    fontSize: 12,
    color: '#9c9c9c',
  },
  noticeDesc: {
    marginLeft: 40,
    fontSize: 15,
    marginTop: 15,
    width: '75%',
    color: '#92a1b8',
  },
});

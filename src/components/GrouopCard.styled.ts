import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  cardCover: {
    width: '100%',
    height: 90,
    padding: 10,
    display: 'flex',
    borderRadius: 15,
    marginVertical: 5,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  avatarSection: {
    width: 65,
    height: 65,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  groupName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3f3d56',
    marginBottom: 5,
  },
  groupComment: {
    fontSize: 13,
    color: '#3f3d56',
  },
});

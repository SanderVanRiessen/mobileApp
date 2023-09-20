import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  menuContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#00041e',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  menu: {
    width: 250,
    height: 400,
    backgroundColor: '#00041e',
    padding: 20,
  },
});

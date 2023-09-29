import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
  },
  price: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  doneButton: {
    backgroundColor: '#000',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default styles;

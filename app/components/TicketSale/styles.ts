import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#f5f5f5',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: 250,
    height: 'auto',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 16,
  },
  footer: {
    height: 50,
  },
  amount: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  ambountText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
});

export default styles;

import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    width: '40%',
  },
  buttonContainer: {
    elevation: 8,
    backgroundColor: 'blue',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  buttonText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  buttonSubText: {
    fontSize: 13,
    color: 'rgba(0,0,0,0.5);',
    alignSelf: 'center',
  },
});

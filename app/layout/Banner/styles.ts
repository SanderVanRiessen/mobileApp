import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  background: {
    height: 350,
  },
  title: {
    maxWidth: '75%',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  subText: {
    color: 'white',
    alignSelf: 'center',
    marginBottom: 5,
  },
  buttonContainer: {
    flex: 1,
    gap: 20,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  uppperBannerContainer: {
    width: '100%',
    height: 155,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chip: {
    backgroundColor: 'white',
  },
});

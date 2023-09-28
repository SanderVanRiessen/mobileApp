import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexBasis: '48%',
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 'auto',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 12,
    color: 'gray',
  },
  textContainer: {
    alignItems: 'center',
  },
  buyButton: {
    backgroundColor: '#2ECC71',
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  detailButton: {
    backgroundColor: '#3498DB',
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    gap: 10,
  },
});

export default styles;

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContianer: {
    display: 'flex',
    gap: 10,
  },
});

export default styles;

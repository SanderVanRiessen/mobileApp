import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  search: {
    marginBottom: 20,
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});

export default styles;

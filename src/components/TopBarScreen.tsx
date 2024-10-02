import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function TopBarScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tab}>
        <Text style={styles.tabText}>Meals</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Text style={styles.tabText}>Sides</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Text style={styles.tabText}>Snacks</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tab: {
    paddingHorizontal: 20,
  },
  tabText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
});
